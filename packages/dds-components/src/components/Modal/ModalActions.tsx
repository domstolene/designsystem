import { type ComponentPropsWithRef } from 'react';

import { Box } from '../layout';

export type ModalActionsProps = ComponentPropsWithRef<'div'>;

export const ModalActions = (props: ModalActionsProps) => (
  <Box display="flex" flexWrap="wrap" gap="x1" {...props} />
);

ModalActions.displayName = 'ModalActions';
