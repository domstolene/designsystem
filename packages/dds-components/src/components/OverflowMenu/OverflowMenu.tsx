import { forwardRef, useEffect } from 'react';

import { useOverflowMenuContext } from './OverflowMenu.context';
import styles from './OverflowMenu.module.css';
import { useCombinedRef } from '../../hooks';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Paper } from '../helpers';
import utilStyles from '../helpers/styling/utilStyles.module.css';

import { type OverflowMenuProps } from '.';

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  (props, ref) => {
    const {
      placement = 'bottom-end',
      offset = 2,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const { isOpen, floatStyling, setFloatOptions, menuRef, menuId } =
      useOverflowMenuContext();

    useEffect(() => {
      setFloatOptions?.({ placement, offset });
    }, [placement, offset]);

    const { style = {}, ...restHTMLProps } = htmlProps;
    const openCn = isOpen ? 'open' : 'closed';

    return (
      <Paper
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
        border="default"
        elevation={1}
        style={{ ...style, ...floatStyling }}
      >
        {props.children}
      </Paper>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
