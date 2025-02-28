import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';
import { Contrast } from '../Contrast';

export type FooterProps = ComponentPropsWithRef<'footer'>;

export const Footer = ({ className, ...rest }: FooterProps) => (
  <Contrast as="footer" className={cn(className, styles.container)} {...rest} />
);
