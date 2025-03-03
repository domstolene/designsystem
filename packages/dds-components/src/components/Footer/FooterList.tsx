import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';
import { StylelessList } from '../helpers';

export type FooterListProps = ComponentPropsWithRef<'ul'>;

export const FooterList = ({ className, ...rest }: FooterListProps) => (
  <StylelessList className={cn(className, styles.list)} {...rest} />
);
