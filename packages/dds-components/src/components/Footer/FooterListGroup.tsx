import { type ComponentPropsWithRef } from 'react';

import { VStack } from '../layout';

export type FooterListGroupProps = ComponentPropsWithRef<'div'>;

export const FooterListGroup = (props: FooterListGroupProps) => (
  <VStack gap="x1.5" {...props} />
);
