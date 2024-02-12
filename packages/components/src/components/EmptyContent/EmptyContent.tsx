import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Heading, type HeadingLevel, Paragraph } from '../Typography';

const { colors, spacing } = ddsBaseTokens;

const StyledEmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${spacing.SizesDdsSpacingX10};
  height: 100%;
  width: 100%;
  background-color: ${colors.DdsColorNeutralsGray1};
  padding: ${spacing.SizesDdsSpacingX15};
`;

const StyledEmptyContentText = styled.div`
  max-width: 70ch;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing.SizesDdsSpacingX1};
`;

export type EmptyContentProps = {
  /**Tittel - kort oppsummering. */
  title?: string;
  /**Nivå på overskriften. Sørg for at den følger hierarkiet på siden. */
  titleHeadingLevel?: HeadingLevel;
  /**Melding - beskrivelse og forklaring på hvordan brukeren kan få innhold. */
  message: string;
} & HTMLAttributes<HTMLDivElement>;

export function EmptyContent({
  title,
  message,
  titleHeadingLevel = 5,
  ...rest
}: EmptyContentProps) {
  return (
    <StyledEmptyContent {...rest}>
      <StyledEmptyContentText>
        {title && <Heading level={titleHeadingLevel}>{title}</Heading>}
        <Paragraph>{message}</Paragraph>
      </StyledEmptyContentText>
    </StyledEmptyContent>
  );
}

EmptyContent.displayName = 'EmptyContent';
