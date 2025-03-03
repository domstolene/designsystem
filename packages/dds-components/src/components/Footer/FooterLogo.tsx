import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import Logo from './norges_domstoler_logo.svg';
import { cn } from '../../utils';

type HideBreakpoint = 'xs' | 'sm' | 'md';

export type FooterLogoProps = ComponentPropsWithRef<'img'> & {
  /**Brekkepunkt når logoen skal skjules på mindre skjerm. */
  hideBreakpoint?: HideBreakpoint;
};

export const FooterLogo = ({
  className,
  hideBreakpoint,
  ...rest
}: FooterLogoProps) => (
  <img
    className={cn(
      className,
      !!hideBreakpoint && styles[`logo--${hideBreakpoint}-hide`],
    )}
    src={Logo}
    height={80}
    width={151}
    alt="norges domstoler"
    {...rest}
  />
);
