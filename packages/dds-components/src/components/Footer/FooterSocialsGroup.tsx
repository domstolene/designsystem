import { type ComponentPropsWithRef } from 'react';

import { VStack } from '../layout';

export type FooterSocialsGroupProps = ComponentPropsWithRef<'div'>;

export const FooterSocialsGroup = (props: FooterSocialsGroupProps) => (
  <VStack gap="x1" {...props} />
);
