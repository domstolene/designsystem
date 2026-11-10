import { type ComponentPropsWithRef } from 'react';

import { StylelessList } from '../helpers';
import { VStack } from '../layout';

export type FooterListProps = ComponentPropsWithRef<'ul'>;

export const FooterList = (props: FooterListProps) => (
  <VStack as={StylelessList} gap="x1.5" {...props} />
);
