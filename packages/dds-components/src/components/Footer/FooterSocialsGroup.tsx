import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterSocialsGroupProps = ComponentPropsWithRef<'div'>;

export const FooterSocialsGroup = ({
  className,
  ...rest
}: FooterSocialsGroupProps) => (
  <div className={cn(className, styles['socials-group'])} {...rest} />
);
