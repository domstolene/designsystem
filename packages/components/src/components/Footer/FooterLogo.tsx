import { type ComponentProps, forwardRef } from 'react';

import Logo from './norges_domstoler_logo.svg';
import { cn } from '../../utils';

export type FooterLogoProps = ComponentProps<'img'>;

export const FooterLogo = forwardRef<HTMLImageElement, FooterLogoProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <img
        ref={ref}
        className={cn(className)}
        src={Logo}
        height={80}
        width={151}
        alt="norges domstoler"
        {...rest}
      />
    );
  },
);
