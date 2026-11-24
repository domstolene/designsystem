import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../utils';
import styles from './List.module.css';

export type ListItemProps = ComponentPropsWithRef<'li'>;

export const ListItem = ({ className, ...rest }: ListItemProps) => (
  <li {...rest} className={cn(className, styles.li)} />
);

ListItem.displayName = 'ListItem';
