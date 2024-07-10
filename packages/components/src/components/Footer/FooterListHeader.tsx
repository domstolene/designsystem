import { type ComponentProps, forwardRef } from 'react';

import { Heading } from '../Typography';

export type FooterListHeaderProps = ComponentProps<'h2'>;

export const FooterListHeader = forwardRef<
  HTMLHeadingElement,
  FooterListHeaderProps
>((props, ref) => {
  return (
    <Heading level={2} typographyType="headingSans02" ref={ref} {...props} />
  );
});
