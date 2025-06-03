import { useId } from 'react';

import styles from './Input.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { Typography } from '../../Typography';

type Props = BaseComponentProps<
  HTMLElement,
  {
    current: number;
    max: number;
  }
>;

export function CharCounter(props: Props) {
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
      typographyType="bodyXsmall"
      color="text-subtle"
      aria-label={`${current} av ${max} tegn skrevet`}
    >
      {current}/{max}
    </Typography>
  );
}

export const renderCharCounter = (
  id: string,
  isShown: boolean,
  textLength: number,
  maxLength?: number,
) => {
  if (!!maxLength && Number.isInteger(maxLength) && maxLength > 0 && isShown)
    return <CharCounter id={id} max={maxLength} current={textLength} />;
};
