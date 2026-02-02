import { type ReactNode } from 'react';

import { Typography } from '../components/Typography';

/** Storybook-hjelper: Formattering av ledetekst som ikke er enestående, f.eks. tekst i knapp */
export const labelText = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

/** Storybook-hjelper: Viser enestående navn til variantene i en oversikt, uten at de er semantiske ledetekster */
export const StoryLabel = (props: { children: ReactNode }) => (
  <Typography {...props} as="span" typographyType="labelMedium" />
);
