import { type ReactNode } from 'react';

import styles from './ErrorSummary.module.css';
import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Paper } from '../layout';
import { List } from '../List';
import { Heading } from '../Typography';

export type ErrorSummaryProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Custom overskrift. Bruker default heading tag hvis den er av typen `string`. */
    heading?: ReactNode;
  }
>;

export const ErrorSummary = ({
  heading: pHeading,
  className,
  style,
  children,
  id,
  htmlProps,
  ...props
}: ErrorSummaryProps) => {
  const { t } = useTranslation();
  const heading =
    typeof pHeading === 'string' ? (
      <Heading level={2} typographyType="headingSmall">
        {pHeading}
      </Heading>
    ) : pHeading ? (
      pHeading
    ) : (
      <Heading level={2} typographyType="headingSmall">
        {t(texts.toProceedCorrectErrors)}
      </Heading>
    );
  return (
    <Paper
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        style,
        htmlProps,
        props,
      )}
      background="surface-danger-default"
      padding="x1 x0.75 x0.25 x1"
    >
      {heading}
      <List>{children}</List>
    </Paper>
  );
};

ErrorSummary.displayName = 'ErrorSummary';

export const texts = createTexts({
  toProceedCorrectErrors: {
    nb: 'For å gå videre må du rette opp følgende feil:',
    no: 'For å gå videre må du rette opp følgende feil:',
    nn: 'For å gå vidare må du rette opp følgjande feil:',
    en: 'To proceed, you must correct the following errors:',
    se: '-',
  },
});
