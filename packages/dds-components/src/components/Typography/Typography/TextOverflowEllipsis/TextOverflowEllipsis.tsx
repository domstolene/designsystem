import type { ComponentProps } from 'react';

import styles from './TextOverflowEllipsis.module.css';
import { cn } from '../../../../utils/dom';

export function TextOverflowEllipsisWrapper({
  className,
  ...rest
}: ComponentProps<'span'>) {
  return <span {...rest} className={cn(className, styles.wrapper)} />;
}

export function TextOverflowEllipsisInner({
  className,
  ...rest
}: ComponentProps<'span'>) {
  return <span {...rest} className={cn(className, styles.inner)} />;
}
