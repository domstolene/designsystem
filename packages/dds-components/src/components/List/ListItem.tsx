import { type ComponentPropsWithRef } from 'react';

import styles from './List.module.css';
import { cn } from '../../utils';

export type ListItemProps = ComponentPropsWithRef<'li'>;

export const ListItem = ({ className, ...rest }: ListItemProps) => (
  <li {...rest} className={cn(className, styles.li)} />
);

ListItem.displayName = 'ListItem';
