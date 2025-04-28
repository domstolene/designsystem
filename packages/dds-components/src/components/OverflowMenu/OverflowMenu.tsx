import { useEffect } from 'react';

import { useOverflowMenuContext } from './OverflowMenu.context';
import styles from './OverflowMenu.module.css';
import { useCombinedRef } from '../../hooks';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Paper } from '../layout';

import { type OverflowMenuProps } from '.';

export const OverflowMenu = ({
  placement = 'bottom-end',
  offset = 2,
  className,
  htmlProps = {},
  ref,
  ...rest
}: OverflowMenuProps) => {
  const { isOpen, floatStyling, setFloatOptions, menuRef, menuId } =
    useOverflowMenuContext();

  useEffect(() => {
    setFloatOptions?.({ placement, offset });
  }, [placement, offset]);

  const { style = {}, ...restHTMLProps } = htmlProps;
  const openCn = isOpen ? 'open' : 'closed';

  return (
    <Paper
      overflowY="auto"
      minWidth="180px"
      maxWidth="300px"
      ref={useCombinedRef(menuRef, ref)}
      {...getBaseHTMLProps(
        menuId,
        cn(
          className,
          styles.container,
          utilStyles.scrollbar,
          utilStyles['visibility-transition'],
          utilStyles[`visibility-transition--${openCn}`],
        ),
        restHTMLProps,
        rest,
      )}
      role="menu"
      aria-hidden={!isOpen}
      elevation={1}
      border="border-default"
      style={{ ...style, ...floatStyling }}
    />
  );
};

OverflowMenu.displayName = 'OverflowMenu';
