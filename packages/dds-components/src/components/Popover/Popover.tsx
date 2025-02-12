import { type Property } from 'csstype';
import { type ReactNode, forwardRef, useEffect } from 'react';

import styles from './Popover.module.css';
import {
  type Placement,
  useCombinedRef,
  useMountTransition,
  useReturnFocusOnBlur,
} from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Paper } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
import { Heading } from '../Typography';
import { usePopoverContext } from './Popover.context';

export interface PopoverSizeProps {
  width?: Property.Width;
  height?: Property.Height;
  minWidth?: Property.MinWidth;
  minHeight?: Property.MinHeight;
  maxWidth?: Property.MaxWidth;
  maxHeight?: Property.MaxHeight;
}

export type PopoverProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Header. Bruker default semantisk heading hvis verdien er en `string`.  */
    header?: string | ReactNode;
    /**Om lukkeknapp skal vises.
     * @default true
     */
    withCloseButton?: boolean;
    /**Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet.
     * @default "bottom"
     */
    placement?: Placement;
    /**Avstand fra anchor-elementet i px.
     * @default 8
     */
    offset?: number;
    /** Ekstra logikk kjørt når popover mister fokus. */
    onBlur?: () => void;
    /**Custom størrelse. */
    sizeProps?: PopoverSizeProps;
    /** Om focus skal returneres ved `blur`
     * @default true
     */
    returnFocusOnBlur?: boolean;
  }
>;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const {
      header,
      withCloseButton = true,
      onBlur,
      children,
      placement = 'bottom',
      offset = 8,
      sizeProps,
      returnFocusOnBlur = true,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const {
      floatStyling,
      setFloatOptions,
      floatingRef,
      popoverId,
      onClose,
      isOpen = false,
      anchorEl,
    } = usePopoverContext();

    const hasTransitionedIn = useMountTransition(isOpen, 400);

    const popoverRef = useReturnFocusOnBlur(
      isOpen && hasTransitionedIn && returnFocusOnBlur,
      () => {
        onClose && onClose();
        onBlur && onBlur();
      },
      anchorEl && anchorEl,
    );

    const multiRef = useCombinedRef(ref, popoverRef, floatingRef);

    useEffect(() => {
      setFloatOptions && setFloatOptions({ placement, offset });
    }, [placement, offset]);

    const hasTitle = !!header;

    const openCn = hasTransitionedIn && isOpen ? 'open' : 'closed';

    return isOpen || hasTransitionedIn ? (
      <Paper
        {...getBaseHTMLProps(
          popoverId,
          cn(
            className,
            styles.container,
            utilStyles['visibility-transition'],
            utilStyles[`visibility-transition--${openCn}`],
            focusStyles.focusable,
          ),
          htmlProps,
          rest,
        )}
        ref={multiRef}
        tabIndex={-1}
        style={{
          ...htmlProps.style,
          ...floatStyling,
          ...sizeProps,
        }}
        role="dialog"
        elevation={3}
        border="subtle"
      >
        {header && (
          <div className={styles.header}>
            {typeof header === 'string' ? (
              <Heading level={2} typographyType="headingMedium">
                {header}
              </Heading>
            ) : (
              header
            )}
          </div>
        )}
        <div
          className={
            !hasTitle && withCloseButton
              ? styles['content--closable--no-header']
              : ''
          }
        >
          {children}
        </div>
        {withCloseButton && (
          <Button
            icon={CloseIcon}
            purpose="tertiary"
            size="small"
            onClick={onClose}
            aria-label="Lukk"
            className={styles['close-button']}
          />
        )}
      </Paper>
    ) : null;
  },
);

Popover.displayName = 'Popover';
