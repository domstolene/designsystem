import { useState } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Typography } from '../Typography';
import { charCounterTokens as tokens } from './CharCounter.tokens';

const Wrapper = styled(Typography)`
  margin-left: auto;
  ${tokens.base}
`;

type Props = BaseComponentProps<
  HTMLElement,
  {
    current: number;
    max: number;
  }
>;

let nextUniqueId = 0;

function CharCounter(props: Props) {
  const { current, max, id, htmlProps, ...rest } = props;

  const [uniqueId] = useState<string>(
    id ?? `characterCounter-${nextUniqueId++}`
  );

  return (
    <Wrapper
      {...getBaseHTMLProps(id, htmlProps, rest)}
      forwardedAs="div"
      typographyType="supportingStyleHelperText01"
      id={uniqueId}
      aria-label={`${current} av ${max} tegn skrevet`}
    >
      {current}/{max}
    </Wrapper>
  );
}

export default CharCounter;
