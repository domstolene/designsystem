import { forwardRef } from 'react';

import { Heading, type HeadingProps } from '../Typography';

export type FooterListHeaderProps = Omit<HeadingProps, 'level' | 'withMargins'>;

export const FooterListHeader = forwardRef<
  HTMLHeadingElement,
  FooterListHeaderProps
>((props, ref) => {
  return (
    <Heading level={2} typographyType="headingSmall" ref={ref} {...props} />
  );
});
