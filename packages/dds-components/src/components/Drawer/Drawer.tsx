import { type Property } from 'csstype';
import {
  type MouseEvent,
  type ReactNode,
  type RefObject,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Drawer.module.css';
import {
  useCombinedRef,
  useFocusTrap,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import {
  Backdrop,
  Paper,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
import { ThemeContext } from '../ThemeProvider';
import { Heading } from '../Typography';

export type DrawerSize = 'small' | 'medium' | 'large';
export type DrawerPlacement = 'left' | 'right';
export interface WidthProps {
  minWidth?: Property.MinWidth;
  maxWidth?: Property.MaxWidth;
  width?: Property.Width;
}

export type DrawerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Størrelsen på `<Drawer>`.
     * @default "small"
     */
    size?: DrawerSize;
    /** Plasseringen til `<Drawer>`.
     * @default "right"
     */
    placement?: DrawerPlacement;
    /**Header for `<Drawer>`. Har default styling hvis verdien er en string. */
    header?: string | ReactNode;
    /**Spesifiserer om `<Drawer>` vises. **OBS!** nødvendig kun hvis `<DrawerGroup>` ikke er i bruk. */
    isOpen?: boolean;
    /**Funksjon kjørt ved lukking. **OBS!** nødvendig kun hvis `<DrawerGroup>` ikke er i bruk. */
    onClose?: () => void;
    /**Spesifiserer hvilken DOM node `<Drawer>` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` eller ref (skaper ikke ny DOM node).
     * @default themeProviderRef
     */
    parentElement?: HTMLElement;
    /**Custom props for breddehåndtering ved behov. */
    widthProps?: WidthProps;
    /**Ref til elementet som åpner `<Drawer>`.  **OBS!** nødvendig kun hvis `<DrawerGroup>` ikke er i bruk. */
    triggerRef?: RefObject<HTMLElement>;
    /**
     * Om `<Drawer>` skal vises med backdrop som gråer ut bakgrunnen.
     */
    withBackdrop?: boolean;
  }
>;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    onClose,
    header,
    isOpen = false,
    placement = 'right',
    parentElement,
    size = 'small',
    triggerRef,
    id,
    className,
    htmlProps,
    widthProps,
    withBackdrop,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-drawer`;
  const hasHeader = !!header;
  const headerId = hasHeader ? `${uniqueId}-header` : undefined;

  const drawerRef = useFocusTrap<HTMLDivElement>(isOpen);
  const combinedRef = useCombinedRef(ref, drawerRef);

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (isOpen) {
      triggerRef && triggerRef.current?.focus();
      onClose && onClose();
    }
  });

  useEffect(() => {
    if (withBackdrop) {
      if (isOpen) {
        handleElementWithBackdropMount(document.body);
      } else {
        handleElementWithBackdropUnmount(document.body);
      }

      return () => handleElementWithBackdropUnmount(document.body);
    }
  }, [isOpen]);

  const elements: Array<HTMLElement | null> = [
    drawerRef.current as HTMLElement,
  ];
  if (triggerRef) elements.push(triggerRef.current);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Drawer must be used within a ThemeProvider');
  }

  const portalTarget = parentElement ?? themeContext?.el;

  useOnClickOutside(elements, () => {
    if (isOpen && !withBackdrop) {
      onClose?.();
    }
  });

  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === backdropRef.current && isOpen && withBackdrop) {
      onClose?.();
    }
  };

  const hasTransitionedIn = useMountTransition(isOpen, 500);
  const isMounted = hasTransitionedIn && isOpen;

  const isOpenCn = isMounted ? 'opened' : 'closed';

  const drawer = (
    <Paper
      ref={combinedRef}
      role="dialog"
      tabIndex={-1}
      {...getBaseHTMLProps(
        uniqueId,
        cn(
          className,
          styles.container,
          styles[`container--${size}`],
          styles[`container--${placement}`],
          styles[`container--${placement}-${isOpenCn}`],
          focusStyles['focusable--inset'],
        ),
        htmlProps,
        rest,
      )}
      elevation={4}
      style={{ ...htmlProps?.style, ...widthProps }}
      aria-labelledby={headerId}
    >
      <div
        className={cn(
          styles['content-container'],
          utilStyles.scrollbar,
          utilStyles['scrollable-y'],
        )}
      >
        {hasHeader && (
          <div id={headerId}>
            {typeof header === 'string' ? (
              <Heading level={2} typographyType="headingLarge">
                {header}
              </Heading>
            ) : (
              header
            )}
          </div>
        )}
        {children}
      </div>

      <Button
        className={cn(styles['button--close'])}
        data-testid="drawer-close-btn"
        size="small"
        purpose="tertiary"
        onClick={onClose}
        aria-label="Lukk"
        icon={CloseIcon}
      />
    </Paper>
  );

  const component = withBackdrop ? (
    <Backdrop
      zIndex="drawer"
      isMounted={isMounted}
      ref={backdropRef}
      onClick={onBackdropClick}
    >
      {drawer}
    </Backdrop>
  ) : (
    drawer
  );

  return (isOpen || hasTransitionedIn) && portalTarget
    ? createPortal(component, portalTarget)
    : null;
});

Drawer.displayName = 'Drawer';
