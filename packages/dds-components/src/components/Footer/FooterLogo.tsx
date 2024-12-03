import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import Logo from './norges_domstoler_logo.svg';
import { cn } from '../../utils';

type HideBreakpoint = 'xs' | 'sm' | 'md';

export type FooterLogoProps = ComponentProps<'img'> & {
  /**Brekkepunkt når logoen skal skjules på mindre skjerm. */
  hideBreakpoint?: HideBreakpoint;
};

export const FooterLogo = forwardRef<HTMLImageElement, FooterLogoProps>(
  (props, ref) => {
    const { className, hideBreakpoint, ...rest } = props;
    return (
      <img
        ref={ref}
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
  },
);
