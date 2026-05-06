import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useOverflowMenuContext } from './OverflowMenu.context';
import styles from './OverflowMenu.module.css';
import { useCombinedRef } from '../../hooks';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Paper } from '../layout';
import { ThemeContext } from '../ThemeProvider';
import typographyStyles from '../Typography/typographyStyles.module.css';

import { type OverflowMenuProps } from '.';

export const OverflowMenu = ({
  placement = 'bottom-end',
  offset = 2,
  parentElement,
  portal = true,
  className,
  htmlProps = {},
  ref,
  style,
  ...rest
}: OverflowMenuProps) => {
  const { isOpen, floatStyling, setFloatOptions, menuRef, menuId } =
    useOverflowMenuContext();
  const themeContext = useContext(ThemeContext);

  if (portal && !themeContext) {
    throw new Error('OverflowMenu must be used within a DdsProvider');
  }

  const portalTarget = parentElement ?? themeContext?.el;

  useEffect(() => {
    setFloatOptions?.({ placement, offset });
  }, [placement, offset]);
  const openCn = isOpen ? 'open' : 'closed';

  const menu = (
    <Paper
      overflowY="auto"
      minWidth="180px"
      maxWidth="300px"
      ref={useCombinedRef(menuRef, ref)}
      {...getBaseHTMLProps(
        menuId,
        cn(
          className,
          typographyStyles['body-short-medium'],
          styles.container,
          utilStyles.scrollbar,
          utilStyles['visibility-transition'],
          utilStyles[`visibility-transition--${openCn}`],
        ),
        { ...style, ...floatStyling },
        htmlProps,
        rest,
      )}
      role="menu"
      aria-hidden={!isOpen}
      elevation="medium"
      border="border-default"
    />
  );

  return portal && portalTarget ? createPortal(menu, portalTarget) : menu;
};

OverflowMenu.displayName = 'OverflowMenu';
