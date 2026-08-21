import { type ComponentPropsWithRef } from 'react';

import { VStack } from '../..';
import { StylelessList } from '../helpers';

export type FooterListProps = ComponentPropsWithRef<'ul'>;

export const FooterList = (props: FooterListProps) => (
  <VStack as={StylelessList} gap="x1.5" {...props} />
);
