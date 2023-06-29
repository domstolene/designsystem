import { useId } from 'react';
import styled from 'styled-components';
import {
  BaseComponentProps,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { Typography } from '@norges-domstoler/dds-typography';

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
