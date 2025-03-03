import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';
import { StylelessList } from '../helpers';

export type FooterSocialsListProps = ComponentPropsWithRef<'ul'>;

export const FooterSocialsList = ({
  className,
  ...rest
}: FooterSocialsListProps) => (
  <StylelessList className={cn(className, styles['socials-list'])} {...rest} />
);
