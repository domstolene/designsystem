import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../utils';
import {
  DescriptionList,
  DescriptionListDesc,
  type DescriptionListDescProps,
  type DescriptionListProps,
  DescriptionListTerm,
  type DescriptionListTermProps,
} from '../DescriptionList';
import { Box, HStack, type HStackProps } from '../layout';
import { Spinner } from '../Spinner';
import { Heading, type HeadingProps } from '../Typography';
import styles from './FormSummary.module.css';
import { Tag } from '../Tag';

type FormSummaryHeaderProps = HStackProps;

export function FormSummaryHeader({
  justifyContent = 'space-between',
  ...props
}: FormSummaryHeaderProps) {
  return <HStack justifyContent={justifyContent} {...props} />;
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

type FormSummaryFieldsProps = DescriptionListProps;

export function FormSummaryFields({
  className,
  ...props
}: FormSummaryFieldsProps) {
  return <DescriptionList {...props} className={cn(styles.dl, className)} />;
}

type FormSummaryFieldProps = {
  /**Hvis data hentes fra ekstern kilde kan feltet vise innlastning. */
  isLoading?: boolean;
} & ComponentPropsWithRef<'div'>;

export function FormSummaryField({
  className,
  isLoading,
  ...props
}: FormSummaryFieldProps) {
  return isLoading ? (
    <Spinner />
  ) : (
    <div {...props} className={cn(styles.field, className)} />
  );
}

type FormSummaryLabelProps = DescriptionListTermProps;

export function FormSummaryLabel(props: FormSummaryLabelProps) {
  return <DescriptionListTerm {...props} />;
}

type FormSummaryValueProps = DescriptionListDescProps;

export function FormSummaryValue({
  className,
  ...props
}: FormSummaryValueProps) {
  return (
    <DescriptionListDesc {...props} className={cn(className, styles.dd)} />
  );
}

type FormSummaryErrorProps = DescriptionListDescProps;

export function FormSummaryError({ ...props }: FormSummaryErrorProps) {
  return (
    <Box marginBlock="x0.25 0">
      <Tag {...props} purpose="danger" withIcon />
    </Box>
  );
}
