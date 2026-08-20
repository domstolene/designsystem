import { type ComponentPropsWithRef } from 'react';

import Logo from './norges_domstoler_logo.svg';
import { Box } from '../layout/Box/Box';

type HideBreakpoint = 'xs' | 'sm' | 'md';

export type FooterLogoProps = ComponentPropsWithRef<'img'> & {
  /**Brekkepunkt når logoen skal skjules på mindre skjerm. */
  hideBreakpoint?: HideBreakpoint;
  /**Custom logo som ikke er HTML `<img>`. Settes istedenfor `<img>` props. */
  children?: ComponentPropsWithRef<'div'>['children'];
};

export const FooterLogo = ({
  children,
  hideBreakpoint,
  ...rest
}: FooterLogoProps) => {
  return (
    <Box
      hideBelow={hideBreakpoint ? hideBreakpoint : undefined}
      width="fit-content"
    >
      {children ? (
        children
      ) : (
        <img
          height={80}
          width={151}
          alt="norges domstoler"
          src={Logo}
          {...rest}
        />
      )}
    </Box>
  );
};
