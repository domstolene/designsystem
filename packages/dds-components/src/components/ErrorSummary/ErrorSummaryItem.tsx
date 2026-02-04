import { type ElementType } from 'react';

import { getBaseHTMLProps } from '../../types';
import { ListItem } from '../List';
import { Link, type LinkProps } from '../Typography';

export type ErrorSummaryItemProps<T extends ElementType> = LinkProps<T>;

export const ErrorSummaryItem = <T extends ElementType>({
  className,
  style,
  children,
  id,
  htmlProps,
  ...props
}: ErrorSummaryItemProps<T>) => {
  return (
    <ListItem>
      <Link {...getBaseHTMLProps(id, className, style, htmlProps, props)}>
        {children}
      </Link>
    </ListItem>
  );
};

ErrorSummaryItem.displayName = 'ErrorSummaryItem';
