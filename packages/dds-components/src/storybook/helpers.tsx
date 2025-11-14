import { type ReactNode } from 'react';

import { Typography } from '../components/Typography';

export const labelText = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export const StoryLabel = (props: { children: ReactNode }) => (
  <Typography {...props} as="span" typographyType="labelMedium" />
);
