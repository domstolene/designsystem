import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

interface FlexContainerProps {
  flexDirection: CSSProperties['flexDirection'];
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
    gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX1};
  `};
`;
