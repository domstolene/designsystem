import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type Property } from 'csstype';
import { type ReactNode, forwardRef } from 'react';

import styles from './Popover.module.css';
import {
  type Placement,
  useCombinedRef,
  useFloatPosition,
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
import { Typography } from '../Typography';

const { spacing: Spacing } = ddsBaseTokens;

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
    /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Spesifiserer om `<Popover />` skal vises. */
    isOpen?: boolean;
    /**Om lukkeknapp skal vises. */
    withCloseButton?: boolean;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Anchor-elementet. */
    anchorElement?: HTMLElement;
    /**Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet. */
    placement?: Placement;
    /**Avstand fra anchor-elementet i px. */
    offset?: number;
    /** Ekstra logikk kjørt når lukkeknappen trykkes. */
    onCloseButtonClick?: () => void;
    /** Ekstra logikk kjørt når popover mister fokus. */
    onBlur?: () => void;
    /**Custom størrelse. */
    sizeProps?: PopoverSizeProps;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Funksjon kjørt ved lukking. */
    onClose?: () => void;
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
      offset = Spacing.SizesDdsSpacingX05NumberPx,
      sizeProps,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;
    const hasTransitionedIn = useMountTransition(isOpen, 400);

    const { refs, styles: floatingStyles } = useFloatPosition(null, {
      placement,
      offset,
    });
    // Use position from anchor element for the popover
    refs.setReference(anchorElement || null);

    const popoverRef = useReturnFocusOnBlur(
      isOpen && hasTransitionedIn,
      () => {
        onClose && onClose();
        onBlur && onBlur();
      },
      anchorElement && anchorElement,
    );

    const multiRef = useCombinedRef(ref, popoverRef, refs.setFloating);

    const elements: Array<HTMLElement | null> = [popoverRef.current!];
    if (anchorElement) elements.push(anchorElement);

    const hasTitle = !!title;

    useOnClickOutside(elements, () => {
      if (isOpen) onClose && onClose();
    });

    return isOpen || hasTransitionedIn ? (
      <Paper
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={multiRef}
        tabIndex={-1}
        style={{ ...htmlProps.style, ...floatingStyles.floating, ...sizeProps }}
        role="dialog"
        elevation={3}
        border="light"
        className={cn(
          styles.container,
          utilStyles['visibility-transition'],
          hasTransitionedIn && isOpen
            ? utilStyles['visibility-transition--open']
            : utilStyles['visibility-transition--closed'],
          focusStyles.focusable,
        )}
      >
        {title && (
          <div className={styles.title}>
            {typeof title === 'string' ? (
              <Typography typographyType="headingSans02">{title}</Typography>
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
