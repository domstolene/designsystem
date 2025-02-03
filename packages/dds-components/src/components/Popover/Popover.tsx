import { type Property } from 'csstype';
import { type ReactNode, forwardRef, useEffect } from 'react';

import styles from './Popover.module.css';
import {
  type Placement,
  useCombinedRef,
  useMountTransition,
  useOnClickOutside,
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
    /**Tittel. */
    title?: string | ReactNode;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup>`. Spesifiserer om `<Popover>` skal vises.
     * @default false
     */
    isOpen?: boolean;
    /**Om lukkeknapp skal vises.
     * @default true
     */
    withCloseButton?: boolean;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup>`. Anchor-elementet. */
    anchorElement?: HTMLElement;
    /**Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet.
     * @default "bottom"
     */
    placement?: Placement;
    /**Avstand fra anchor-elementet i px.
     * @default 8
     */
    offset?: number;
    /** Ekstra logikk kjørt når lukkeknappen trykkes. */
    onCloseButtonClick?: () => void;
    /** Ekstra logikk kjørt når popover mister fokus. */
    onBlur?: () => void;
    /**Custom størrelse. */
    sizeProps?: PopoverSizeProps;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup>`. Funksjon kjørt ved lukking. */
    onClose?: () => void;
    /** Om focus skal returneres ved `blur`
     * @default true
     */
    returnFocusOnBlur?: boolean;
  }
>;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const {
      title,
      isOpen = false,
      withCloseButton = true,
      onBlur,
      onCloseButtonClick,
      onClose,
      anchorElement,
      children,
      placement = 'bottom',
      offset = 8,
      sizeProps,
      returnFocusOnBlur = true,
      className,
      htmlProps = {},
      ...rest
    } = props;
    const hasTransitionedIn = useMountTransition(isOpen, 400);

    const { floatStyling, setFloatOptions, floatingRef, popoverId } =
      usePopoverContext();

    const popoverRef = useReturnFocusOnBlur(
      isOpen && hasTransitionedIn && returnFocusOnBlur,
      () => {
        onClose && onClose();
        onBlur && onBlur();
      },
      anchorElement && anchorElement,
    );

    const multiRef = useCombinedRef(ref, popoverRef, floatingRef);

    useEffect(() => {
      setFloatOptions && setFloatOptions({ placement, offset });
    }, []);

    const elements: Array<HTMLElement | null> = [popoverRef.current!];
    if (anchorElement) elements.push(anchorElement);

    const hasTitle = !!title;

    useOnClickOutside(elements, () => {
      if (isOpen) onClose && onClose();
    });

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
        {title && (
          <div className={styles.title}>
            {typeof title === 'string' ? (
              <Heading level={2} typographyType="headingMedium">
                {title}
              </Heading>
            ) : (
              title
            )}
          </div>
        )}
        <div
          className={
            !hasTitle && withCloseButton
              ? styles['content--closable--no-title']
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
            onClick={onCloseButtonClick}
            aria-label="Lukk"
            className={styles['close-button']}
          />
        )}
      </Paper>
    ) : null;
  },
);

Popover.displayName = 'Popover';
