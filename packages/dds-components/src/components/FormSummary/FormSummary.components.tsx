import { type ComponentPropsWithRef } from 'react';

import { createTexts, useTranslation } from '../../i18n';
import { type ExtractStrict } from '../../types';
import { cn } from '../../utils';
import {
  DescriptionList,
  DescriptionListDesc,
  type DescriptionListDescProps,
  type DescriptionListProps,
  DescriptionListTerm,
  type DescriptionListTermProps,
} from '../DescriptionList';
import { InputMessage, type InputMessageProps } from '../InputMessage';
import { Box, HStack } from '../layout';
import { Spinner } from '../Spinner';
import { Heading, type HeadingProps } from '../Typography';
import styles from './FormSummary.module.css';
import { Button, type ButtonProps, type ButtonPurpose } from '../Button';
import { EditIcon } from '../Icon/icons';
import { VisuallyHidden } from '../VisuallyHidden';

type FormSummaryHeaderProps = ComponentPropsWithRef<'div'>;

export function FormSummaryHeader({ ...props }: FormSummaryHeaderProps) {
  return (
    <HStack
      {...props}
      justifyContent="space-between"
      flexWrap="wrap"
      alignItems="center"
      gap="x0.75"
      marginBlock="0 x0.75"
    />
  );
}

type FormSummaryHeadingProps = {
  /** Heading level. */
  level?: Exclude<HeadingProps['level'], 1>;
} & Omit<HeadingProps, 'level'>;

export function FormSummaryHeading({
  level = 2,
  ...props
}: FormSummaryHeadingProps) {
  return <Heading level={level} {...props} />;
}

type FormSummaryEditButtonProps = {
  /**Formål med knappen. */
  purpose?: ExtractStrict<ButtonPurpose, 'secondary' | 'tertiary'>;
} & Omit<ButtonProps, 'purpose'>;

export function FormSummaryEditButton({
  purpose = 'secondary',
  ...props
}: FormSummaryEditButtonProps) {
  return <Button icon={EditIcon} purpose={purpose} size="xsmall" {...props} />;
}

type FormSummaryFieldsProps = Omit<DescriptionListProps, 'direction'>;

export function FormSummaryFields({ ...props }: FormSummaryFieldsProps) {
  return <DescriptionList {...props} />;
}

type FormSummaryFieldProps = ComponentPropsWithRef<'div'>;

export function FormSummaryField({
  className,
  ...props
}: FormSummaryFieldProps) {
  return <div {...props} className={cn(styles.field, className)} />;
}

type FormSummaryLabelProps = DescriptionListTermProps;

export function FormSummaryLabel(props: FormSummaryLabelProps) {
  return <DescriptionListTerm {...props} />;
}

type FormSummaryValueProps = {
  /**Hvis data hentes fra ekstern kilde kan feltet vise innlastning. */
  isLoading?: boolean;
} & DescriptionListDescProps;

export function FormSummaryValue({
  className,
  isLoading,
  children,
  ...props
}: FormSummaryValueProps) {
  return (
    <DescriptionListDesc {...props} className={cn(className, styles.dd)}>
      {isLoading ? <Spinner size="1.5em" /> : children}
    </DescriptionListDesc>
  );
}

export function FormSummaryEmptyValue() {
  const { t } = useTranslation();
  return (
    <span>
      <span aria-hidden>-</span>{' '}
      <VisuallyHidden> {t(texts.noValue)} </VisuallyHidden>
    </span>
  );
}

type FormSummaryErrorProps = Omit<InputMessageProps, 'messageType' | 'message'>;

export function FormSummaryError({ ...props }: FormSummaryErrorProps) {
  return (
    <Box marginBlock="x0.25 0">
      <InputMessage {...props} messageType="error" />
    </Box>
  );
}

const texts = createTexts({
  noValue: {
    nb: 'Ikke fylt ut',
    no: 'Ikke fylt ut',
    nn: 'Ikkje fylt ut',
    en: 'Not filled out',
    se: 'Ii leat bidjan',
  },
});
