import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { css, styled } from 'styled-components';

export const StorybookLinkRow = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'withSpacing',
})<{ withSpacing?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingX075};
  ${({ withSpacing }) =>
    withSpacing === true &&
    css`
      justify-content: center;
      margin-top: ${ddsBaseTokens.spacing.SizesDdsSpacingX2};
    `}
`;
