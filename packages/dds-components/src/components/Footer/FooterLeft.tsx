import { type ComponentPropsWithRef } from 'react';

import { VStack } from '../layout';

export type FooterLeftProps = ComponentPropsWithRef<'div'>;

export const FooterLeft = (props: FooterLeftProps) => (
  <VStack gap="x4" {...props} />
);
