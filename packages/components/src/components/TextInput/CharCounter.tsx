import { useId } from 'react';
import styled from 'styled-components';

import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Typography } from '../Typography';

const Wrapper = styled(Typography)`
  margin-left: auto;
`;

type Props = BaseComponentProps<
  HTMLElement,
  {
    current: number;
    max: number;
  }
>;

function CharCounter(props: Props) {
  const { current, max, id, className, htmlProps, ...rest } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-characterCounter`;

  return (
    <Wrapper
      {...getBaseHTMLProps(uniqueId, className, htmlProps, rest)}
      forwardedAs="div"
      typographyType="supportingStyleHelperText01"
      aria-label={`${current} av ${max} tegn skrevet`}
    >
      {current}/{max}
    </Wrapper>
  );
}

export default CharCounter;
