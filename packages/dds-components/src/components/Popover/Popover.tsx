import {
  type ReactNode,
  type RefObject,
  useContext,
  useEffect,
  useId,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Popover.module.css';
import {
  type Placement,
  useCombinedRef,
  useFloatPosition,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
  useReturnFocusOnBlur,
} from '../../hooks';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn, isEmpty } from '../../utils';
import { Button } from '../Button';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
import { Paper, type ResponsiveProps } from '../layout';
import { Heading } from '../Typography';
import { usePopoverContext } from './Popover.context';
import { ThemeContext } from '../ThemeProvider';

export type PopoverSizeProps = Pick<
  ResponsiveProps,
  'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'
>;

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
    /**Angir rotnode hvor popover skal rendres.
     * @default themeProviderRef
     */
    parentElement?: HTMLElement;
    /**Angir om popover skal rendre i en portal eller ikke.
     * @default "false"
     */
    portal?: boolean;
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
    /**Anchor ref ved custom kontrollert bruk uten `<PopoverGroup>` Kun for corner cases. */
    anchorRef?: RefObject<HTMLElement | null>;
    /**Spesifiserer om popover er åpen ved custom kontrollert bruk uten `<PopoverGroup>` Kun for corner cases. */
    isOpen?: boolean;
    /**Callback for lukking ved custom kontrollert bruk uten `<PopoverGroup>` Kun for corner cases. */
    onClose?: () => void;
  }
>;

export const Popover = ({
  id,
  header,
  withCloseButton = true,
  onBlur,
  children,
  placement = 'bottom',
  parentElement,
  portal = false,
  offset = 8,
  sizeProps = {},
  returnFocusOnBlur = true,
  className,
  htmlProps = {},
  anchorRef,
  isOpen: propIsOpen,
  onClose: propOnClose,
  style,
  ref,
  ...rest
}: PopoverProps) => {
  const { refs, styles: positionStyles } = useFloatPosition(null, {
    offset,
    placement,
  });
  const { maxHeight, maxWidth, minHeight, minWidth, height, width } = sizeProps;

  const context = usePopoverContext();
  const themeContext = useContext(ThemeContext);
  const portalTarget = parentElement ?? themeContext?.el;

  const {
    floatStyling: contextFloatStyling,
    setFloatOptions,
    floatingRef: contextFloatingRef,
    popoverId: contextPopoverId,
    onClose: contextOnClose,
    isOpen: contextIsOpen,
    anchorEl: contextAnchorEl,
  } = context;

  const { t } = useTranslation();

  const hasContext = !isEmpty(context);
  const generatedId = useId();
  const uniquePopoverId = id ?? `${generatedId}-popover`;

  const [
    popoverId,
    anchorEl,
    isOpen = false,
    floatingRef,
    floatStyling,
    onClose,
  ] = hasContext
    ? [
        contextPopoverId,
        contextAnchorEl,
        contextIsOpen,
        contextFloatingRef,
        contextFloatStyling,
        contextOnClose,
      ]
    : [
        uniquePopoverId,
        anchorRef?.current && anchorRef.current,
        propIsOpen,
        refs.setFloating,
        positionStyles.floating,
        propOnClose,
      ];

  if (!hasContext) {
    refs.setReference(anchorEl || null);
  }

  const hasTransitionedIn = useMountTransition(isOpen, 400);

  const popoverRef = useReturnFocusOnBlur(
    isOpen && hasTransitionedIn && returnFocusOnBlur,
    () => {
      onClose?.();
      onBlur?.();
    },
    anchorEl && anchorEl,
  );

  const multiRef = useCombinedRef(ref, popoverRef, floatingRef);

  useEffect(() => {
    setFloatOptions?.({ placement, offset });
  }, [placement, offset]);

  // hooks when without context
  useOnClickOutside([popoverRef.current, anchorEl], () => {
    if (isOpen && !hasContext) onClose?.();
  });

  useOnKeyDown('Escape', () => {
    if (isOpen && !hasContext) onClose?.();
  });

  const hasTitle = !!header;

  const openCn = hasTransitionedIn && isOpen ? 'open' : 'closed';

  const popover = (
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
        {
          ...style,
          ...floatStyling,
        },
        htmlProps,
        rest,
      )}
      ref={multiRef}
      tabIndex={-1}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      role="dialog"
      elevation={3}
      border="border-subtle"
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
          aria-label={t(commonTexts.close)}
          className={styles['close-button']}
        />
      )}
    </Paper>
  );

  return isOpen || hasTransitionedIn
    ? portal && portalTarget
      ? createPortal(popover, portalTarget)
      : popover
    : null;
};

Popover.displayName = 'Popover';
