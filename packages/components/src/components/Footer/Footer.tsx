import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';
import { Contrast } from '../helpers';

export type FooterProps = ComponentProps<'footer'> & { smallScreen?: boolean };

export const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Contrast
      as="footer"
      ref={ref}
      className={cn(
        className,
        styles.container,
        props.smallScreen && styles['container--small-screen'],
      )}
      {...rest}
    />
  );
});
