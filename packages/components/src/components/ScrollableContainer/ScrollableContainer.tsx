import { type Property } from 'csstype';
import { useRef } from 'react';

import styles from './ScrollableContainer.module.css';
import { Scrollbar } from './Scrollbar';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';

export type ScrollableContainerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Høyde på innholdscontainer. */
    contentHeight?: Property.Height;
  }
>;

export const ScrollableContainer = (props: ScrollableContainerProps) => {
  const {
    children,
    id,
    className,
    contentHeight = '90vh',
    htmlProps,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        htmlProps,
        rest,
      )}
    >
      <div
        ref={ref}
        tabIndex={0}
        className={cn(styles.content, focusable)}
        style={{ height: contentHeight }}
      >
        {children}
      </div>
      <Scrollbar contentRef={ref} />
    </div>
  );
};

ScrollableContainer.displayName = 'ScrollableContainer';
