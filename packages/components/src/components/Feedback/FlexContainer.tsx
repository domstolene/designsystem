import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

type FlexContainerProps = {
  flexDirection: CSSProperties['flexDirection'];
};

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
    gap: ${flexDirection === 'row'
      ? ddsBaseTokens.spacing.SizesDdsSpacingLocalX05
      : ddsBaseTokens.spacing.SizesDdsSpacingLocalX1};
  `};
`;
