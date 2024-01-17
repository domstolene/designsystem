import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Typography } from '../Typography';

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
  title?: string;
  message: string;
} & HTMLAttributes<HTMLDivElement>;

export function EmptyContent({ title, message, ...rest }: EmptyContentProps) {
  return (
    <StyledEmptyContent {...rest}>
      <StyledEmptyContentText>
        {title && (
          <Typography typographyType="headingSans02">{title}</Typography>
        )}
        <Typography typographyType="bodySans02">{message}</Typography>
      </StyledEmptyContentText>
    </StyledEmptyContent>
  );
}

EmptyContent.displayName = 'EmptyContent';
