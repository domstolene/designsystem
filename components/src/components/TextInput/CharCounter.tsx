import styled from 'styled-components';
import { Typography } from '../Typography';
import { charCounterTokens as tokens } from './charCounterTokens';

const Wrapper = styled(Typography)`
  margin-left: auto;
  ${tokens.base}
`;

type Props = {
  current: number;
  max: number;
};

function CharCounter({ current, max }: Props) {
  return (
    <Wrapper forwardedAs="div" typographyType="supportingStyleHelperText01">
      {current}/{max}
    </Wrapper>
  );
}

export default CharCounter;
