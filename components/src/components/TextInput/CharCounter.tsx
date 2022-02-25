import { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography';
import { charCounterTokens as tokens } from './CharCounter.tokens';

const Wrapper = styled(Typography)`
  margin-left: auto;
  ${tokens.base}
`;

type Props = {
  current: number;
  max: number;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

function CharCounter({ current, max, id, ...rest }: Props) {
  const [uniqueId] = useState<string>(
    id ?? `characterCounter-${nextUniqueId++}`
  );
  return (
    <Wrapper
      forwardedAs="div"
      typographyType="supportingStyleHelperText01"
      id={uniqueId}
      aria-label={`${current} av ${max} tegn skrevet`}
      {...rest}
    >
      {current}/{max}
    </Wrapper>
  );
}

export default CharCounter;
