import { type Property } from 'csstype';
import { forwardRef } from 'react';

import styles from './DescriptionList.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type DescriptionListGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Custom margin. */
    margin?: Property.Margin<string>;
    /**Custom min-width. */
    minWidth?: Property.MinWidth<string>;
    /**Custom max-width. */
    maxWidth?: Property.MaxWidth<string>;
  }
>;

export const DescriptionListGroup = forwardRef<
  HTMLDivElement,
  DescriptionListGroupProps
>((props, ref) => {
  const {
    children,
    margin,
    minWidth,
    maxWidth,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      {...getBaseHTMLProps(id, cn(className, styles.group), htmlProps, rest)}
      style={{ ...htmlProps?.style, maxWidth, minWidth, margin }}
    >
      {children}
    </div>
  );
});

DescriptionListGroup.displayName = 'DescriptionListGroup';
