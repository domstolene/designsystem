import styled from 'styled-components';
import { selection } from '../styling';
import { paperTokens as tokens } from './Paper.tokens';

export const Paper = styled.div`
  box-sizing: border-box;
  margin: 0;
  &::selection,
  *::selection {
    ${selection}
  }
  ${tokens.base}
`;
