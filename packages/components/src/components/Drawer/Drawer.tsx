import { type Property } from 'csstype';
import { type ReactNode, type RefObject, forwardRef, useId } from 'react';
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
import { Paper } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
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
    /**Header for `<Drawer />`. Har default styling hvis verdien er en string. */
    header?: string | ReactNode;
    /**Spesifiserer om `<Drawer />` skal legges vises. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
    isOpen?: boolean;
    /**Funksjon kjørt ved lukking. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
    onClose?: () => void;
    /**Spesifiserer hvilken DOM node `<Drawer>` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node).
     * @default document.body
     */
    parentElement?: HTMLElement;
    /**Custom props for breddehåndtering ved behov. */
    widthProps?: WidthProps;
    /**Ref til elementet som åpner `<Drawer />`.  **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
    triggerRef?: RefObject<HTMLElement>;
  }
>;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    onClose,
    header,
    isOpen = false,
    placement = 'right',
    parentElement = document.body,
    size = 'small',
    triggerRef,
    id,
    className,
    htmlProps,
    widthProps,
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

  const elements: Array<HTMLElement | null> = [
    drawerRef.current as HTMLElement,
  ];
  if (triggerRef) elements.push(triggerRef.current);

  useOnClickOutside(elements, () => {
    if (isOpen) {
      onClose?.();
    }
  });

  const hasTransitionedIn = useMountTransition(isOpen, 500);

  const isOpenCn = hasTransitionedIn && isOpen ? 'opened' : 'closed';

  const containerProps = {
    ...getBaseHTMLProps(
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
    ),
    ref: combinedRef,
    tabIndex: -1,
    role: 'dialog',
    'aria-labelledby': headerId,
    style: { ...htmlProps?.style, ...widthProps },
  };

  return isOpen || hasTransitionedIn
    ? createPortal(
        <Paper {...containerProps} elevation={4}>
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
                  <Heading level={2} typographyType="headingSans03">
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
        </Paper>,
        parentElement,
      )
    : null;
});

Drawer.displayName = 'Drawer';
