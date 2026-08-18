import { type ComponentPropsWithRef } from 'react';

import { StylelessList } from '../helpers';
import { HStack } from '../layout';

export type FooterSocialsListProps = ComponentPropsWithRef<'ul'>;

export const FooterSocialsList = (props: FooterSocialsListProps) => (
  <HStack as={StylelessList} gap="x1.5" {...props} />
);
