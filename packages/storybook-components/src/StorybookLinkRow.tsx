import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export const StorybookLinkRow = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'withSpacing',
})<{ withSpacing?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075};
  ${({ withSpacing }) =>
    withSpacing === true &&
    css`
      justify-content: center;
      margin-top: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX2};
    `}
`;
