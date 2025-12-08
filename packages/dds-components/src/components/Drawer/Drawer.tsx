import {
  type MouseEvent,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Drawer.module.css';
import {
  useCombinedRef,
  useFocusTrap,
  useMountTransition,
  useOnClickOutside,
} from '../../hooks';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import {
  type BaseComponentPropsWithChildren,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import {
  Backdrop,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
import { ThemeContext } from '../ThemeProvider';
import { Heading } from '../Typography';
import { useDrawerContext } from './Drawer.context';
import { HStack, Paper, type ResponsiveProps, VStack } from '../layout';

export const DRAWER_SIZES = createSizes('small', 'medium', 'large');
export type DrawerSize = (typeof DRAWER_SIZES)[number];
export type DrawerPlacement = 'left' | 'right';

export type DrawerProps = Omit<
  BaseComponentPropsWithChildren<
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
      /**Header for `<Drawer>`. Returnerer default `<Heading>` hvis verdien er en `string`. */
      header?: string | ReactNode;
      /**Spesifiserer hvilken DOM node `<Drawer>` skal ha som forelder via React portal.
       * Brukes med f.eks `document.getElementById("id")` eller ref (skaper ikke ny DOM node).
       * @default themeProviderRef
       */
      parentElement?: HTMLElement;
      /**
       * Om `<Drawer>` skal vises med backdrop som gråer ut bakgrunnen.
       */
      withBackdrop?: boolean;
    } & Pick<ResponsiveProps, 'minWidth' | 'maxWidth' | 'width'>
  >,
  'id'
>;

export const Drawer = ({
  children,
  header,
  placement = 'right',
  parentElement,
  size = 'small',
  className,
  style,
  htmlProps,
  maxWidth,
  minWidth = '300px',
  width,
  withBackdrop,
  ref,
  ...rest
}: DrawerProps) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Drawer must be used within a ThemeProvider');
  }
  const { t } = useTranslation();

  const portalTarget = parentElement ?? themeContext?.el;

  const { isOpen = false, onClose, drawerId, triggerEl } = useDrawerContext();

  const hasHeader = !!header;
  const headerId = hasHeader ? `${drawerId}-header` : undefined;

  const drawerRef = useFocusTrap<HTMLDivElement>(isOpen);
  const combinedRef = useCombinedRef(ref, drawerRef);

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

  const elements: Array<HTMLElement | null> = [drawerRef.current];
  if (triggerEl) elements.push(triggerEl);

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

  const getMaxWidth = (size: DrawerSize): string => {
    switch (size) {
      case 'small':
        return '400px';
      case 'medium':
        return '600px';
      case 'large':
        return '800px';
    }
  };

  const drawer = (
    <Paper
      ref={combinedRef}
      role="dialog"
      tabIndex={-1}
      position="fixed"
      top="0"
      height="100%"
      minWidth={minWidth}
      maxWidth={maxWidth ? maxWidth : getMaxWidth(size)}
      width={width}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      padding="var(--dds-drawer-container-padding)"
      borderRadius="0"
      {...getBaseHTMLProps(
        drawerId,
        cn(
          className,
          styles.container,
          styles[`container--${placement}`],
          styles[`container--${placement}-${isOpenCn}`],
          focusStyles['focusable--inset'],
        ),
        style,
        htmlProps,
        rest,
      )}
      elevation={4}
      aria-labelledby={headerId}
    >
      <HStack
        position="sticky"
        top="0"
        left="0"
        width="100%"
        paddingInline="var(--dds-drawer-content-container-padding)"
        className={styles['drawer-header']}
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
        <Button
          className={cn(styles['button--close'])}
          data-testid="drawer-close-btn"
          size="small"
          purpose="tertiary"
          onClick={onClose}
          aria-label={t(commonTexts.close)}
          icon={CloseIcon}
        />
      </HStack>
      <VStack
        gap="x1"
        overflowY="auto"
        className={cn(styles['content-container'], utilStyles.scrollbar)}
      >
        {children}
      </VStack>
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
};

Drawer.displayName = 'Drawer';
