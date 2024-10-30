import { forwardRef, useEffect, useId } from 'react';

import { OverflowMenuContextProvider } from './OverflowMenu.context';
import styles from './OverflowMenu.module.css';
import {
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Paper } from '../helpers';
import utilStyles from '../helpers/styling/utilStyles.module.css';

import { type OverflowMenuProps } from '.';

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  (props, ref) => {
    const {
      anchorRef,
      onClose,
      onToggle,
      isOpen = false,
      placement = 'bottom-end',
      id,
      offset = 2,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const { refs, styles: floatingStyles } = useFloatPosition(null, {
      placement,
      offset,
    });

    const combinedRef = useCombinedRef(ref, refs.setFloating);

    useEffect(() => {
      anchorRef
        ? refs.setReference(anchorRef.current)
        : refs.setReference(null);
    }, [anchorRef]);

    useOnClickOutside(
      [refs?.floating?.current, refs?.reference?.current as HTMLElement | null],
      () => {
        if (isOpen) {
          onClose && onClose();
          onToggle && onToggle();
        }
      },
    );

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose && onClose();
        onToggle && onToggle();
        anchorRef && anchorRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) {
        onClose && onClose();
        onToggle && onToggle();
      }
    });

    const { style = {}, ...restHTMLProps } = htmlProps;
    const generatedId = useId();

    return (
      <Paper
        ref={combinedRef}
        {...getBaseHTMLProps(
          id ?? `${generatedId}-overflowMenu`,
          cn(
            className,
            styles.container,
            utilStyles.scrollbar,
            utilStyles['visibility-transition'],
            isOpen
              ? utilStyles['visibility-transition--open']
              : utilStyles['visibility-transition--closed'],
          ),
          restHTMLProps,
          rest,
        )}
        role="menu"
        aria-hidden={!isOpen}
        border="default"
        elevation={1}
        style={{ ...style, ...floatingStyles.floating }}
      >
        <OverflowMenuContextProvider
          isOpen={isOpen}
          onToggle={onToggle}
          onClose={onClose}
        >
          {props.children}
        </OverflowMenuContextProvider>
      </Paper>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
