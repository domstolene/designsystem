import styled from 'styled-components';
import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';

const MarkerWrapper = styled.span`
  color: ${tokens.colors.DdsColorDangerBase};
`;

export const RequiredMarker = () => <MarkerWrapper>*</MarkerWrapper>;
