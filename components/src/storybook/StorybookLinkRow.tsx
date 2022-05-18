import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export const StorybookLinkRow = styled.div`
  margin-top: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX2};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075};
`;
