import { type HTMLAttributes, type ReactNode } from 'react';

import { Paper, VStack } from '../layout';
import { Heading, type HeadingLevel, Typography } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type EmptyContentProps = {
  /**Tittel - kort oppsummering. */
  headerText?: string;
  /**Nivå på overskriften. Sørg for at den følger hierarkiet på siden.
   * @default 2
   */
  headerHeadingLevel?: HeadingLevel;
  /**Melding - beskrivelse og forklaring på hvordan brukeren kan få innhold. Kan inneholde lenker og andre interaktive elementer. */
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export function EmptyContent({
  headerText,
  children,
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
      <VStack
        maxWidth="70ch"
        gap="x1"
        textAlign="center"
        className={typographyStyles['text-color--medium']}
      >
        {headerText && (
          <Heading level={headerHeadingLevel} typographyType="headingMedium">
            {headerText}
          </Heading>
        )}
        <Typography as="div" color="text-medium">
          {children}
        </Typography>
      </VStack>
    </Paper>
  );
}

EmptyContent.displayName = 'EmptyContent';
