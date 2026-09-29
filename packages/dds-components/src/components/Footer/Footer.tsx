import { type ComponentPropsWithRef } from 'react';

import { Contrast } from '../layout';

export type FooterProps = ComponentPropsWithRef<'footer'>;

export const Footer = (props: FooterProps) => (
  <Contrast
    as="footer"
    paddingBlock={{
      xs: 'x3 x6',
      sm: 'x3 x6',
      md: 'x4',
      lg: 'x4',
      xl: 'x4',
    }}
    {...props}
  />
);
