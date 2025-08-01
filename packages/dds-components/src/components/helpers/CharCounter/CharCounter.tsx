import { useId } from 'react';

import styles from './CharCounter.module.css';
import { createTexts, useTranslation } from '../../../i18n';
import { Typography } from '../../Typography';
import { VisuallyHidden } from '../../VisuallyHidden';

interface CharCounterProps {
  id: string;
  current: number;
  max: number;
}

export function CharCounter(props: CharCounterProps) {
  const { t } = useTranslation();
  const { current, max, id } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-characterCounter`;

  return (
    <Typography
      id={uniqueId}
      className={styles.container}
      as="div"
      typographyType="bodyXsmall"
      color="textSubtle"
    >
      <span aria-hidden>
        {current}/{max}
      </span>
      <VisuallyHidden>
        {t(texts.charsWritten(current, max, max - current))}
      </VisuallyHidden>
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

const texts = createTexts({
  charsWritten: (current, max, remain) => ({
    nb: `${current} av ${max} tegn skrevet. ${remain} igjen.`,
    no: `${current} av ${max} tegn skrevet. ${remain} igjen.`,
    nn: `${current} av ${max} teikn skrivne. ${remain} att.`,
    en: `${current} of ${max} characters used. ${remain} remaining.`,
  }),
});
