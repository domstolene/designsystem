import { Heading, type HeadingProps } from '../Typography';

export type FooterListHeaderProps = Omit<HeadingProps, 'level' | 'withMargins'>;

export const FooterListHeader = (props: FooterListHeaderProps) => (
  <Heading level={2} typographyType="headingSmall" {...props} />
);
