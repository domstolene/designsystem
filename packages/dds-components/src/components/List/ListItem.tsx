import { type HTMLAttributes, forwardRef } from 'react';

import styles from './List.module.css';
import { cn } from '../../utils';

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...rest }, ref) => {
    return <li ref={ref} {...rest} className={cn(className, styles.li)} />;
  },
);

ListItem.displayName = 'ListItem';
