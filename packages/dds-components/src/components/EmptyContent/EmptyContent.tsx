import { type HTMLAttributes, type ReactNode } from 'react';

import { Paper, VStack } from '../layout';
import { Heading, type HeadingLevel, Paragraph } from '../Typography';

export type EmptyContentProps = {
  /**Tittel - kort oppsummering. */
  headerText?: string;
  /**Nivå på overskriften. Sørg for at den følger hierarkiet på siden.
   * @default 2
   */
  headerHeadingLevel?: HeadingLevel;
  /**Melding - beskrivelse og forklaring på hvordan brukeren kan få innhold. Kan inneholde lenker og andre interaktive elementer. */
  message: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function EmptyContent({
  headerText,
  message,
  headerHeadingLevel = 2,

  ...rest
}: EmptyContentProps) {
  return (
    <Paper
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="var(--dds-spacing-x10)"
      height="100%"
      width="100%"
      padding="x1.5"
      background="surface-medium"
      borderRadius="surface"
      {...rest}
    >
      <VStack maxWidth="70ch" gap="x1" textAlign="center">
        {headerText && (
          <Heading level={headerHeadingLevel} typographyType="headingMedium">
            {headerText}
          </Heading>
        )}
        <Paragraph color="text-medium">{message}</Paragraph>
      </VStack>
    </Paper>
  );
}

EmptyContent.displayName = 'EmptyContent';
