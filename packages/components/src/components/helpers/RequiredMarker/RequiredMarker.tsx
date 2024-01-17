import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';
import styled from 'styled-components';

const MarkerWrapper = styled.span`
  color: ${tokens.colors.DdsColorDangerBase};
`;

export const RequiredMarker = () => <MarkerWrapper>*</MarkerWrapper>;
