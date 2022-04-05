import styled from 'styled-components';
import { typographyTokens } from '../../components/Typography/Typography.tokens';
import { paperTokens as tokens } from './Paper.tokens';

export const Paper = styled.div`
  box-sizing: border-box;
  margin: 0;
  &::selection,
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${tokens.base}
`;
