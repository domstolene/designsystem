import { useId } from 'react';

import styles from './TextInput.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Typography } from '../Typography';

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
    <Typography
      {...getBaseHTMLProps(
        uniqueId,
        cn(className, styles['char-counter']),
        htmlProps,
        rest,
      )}
      as="div"
      typographyType="supportingStyleHelperText01"
      aria-label={`${current} av ${max} tegn skrevet`}
    >
      {current}/{max}
    </Typography>
  );
}

export default CharCounter;
