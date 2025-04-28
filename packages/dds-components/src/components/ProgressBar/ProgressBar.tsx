import { type ComponentPropsWithRef, useId } from 'react';

import { Label } from '../Typography';
import utilStyles from './../helpers/styling/utilStyles.module.css';
import styles from './ProgressBar.module.css';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { type CommonInputProps, getInputWidth } from '../helpers';
import { renderInputMessage } from '../InputMessage';
import { Box } from '../layout';

export type ProgressBarSize = 'medium' | 'small';

export type ProgressBarProps = Pick<
  CommonInputProps,
  'tip' | 'errorMessage' | 'label' | 'width'
> & {
  /**
   * Størrelse.
   * @default "medium"
   */
  size?: ProgressBarSize;
  /**
   * Indikerer i hvor stor grad prosessen er fullført.
   * Den skal ha verdi over 0; mindre eller lik `max`, mindre eller lik 1 hvis `max` ikke er satt.
   * Hvis verdien er `undefined` eller ugyldig blir komponenten "indeterminate".
   */
  value?: number;
  /**
   * Verdi som indikerer at prosessen er fullført; maksimal verdi.
   * @default 1
   */
  max?: number;
} & Omit<ComponentPropsWithRef<'progress'>, 'max' | 'value'>;

export const ProgressBar = ({
  label,
  tip,
  errorMessage,
  size = 'medium',
  'aria-describedby': ariaDescribedby,
  value,
  width,
  max,
  id,
  className,
  style,
  ...rest
}: ProgressBarProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-searchInput`;
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = !!label;
  const hasValidMax = !!max && max > 0;

  /**
   * Verdi skal være mindre eller lik max når max finnes; og mindre eller lik 1 hvis ikke.
   * Komponenten er "indeterminate" hvis value ikke er gyldig.
   */
  const hasValidValue =
    !!value &&
    value > 0 &&
    ((max !== undefined && value <= max) || (max === undefined && value <= 1));

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const fillPrecentage = hasValidValue && (value / (max ?? 1)) * 100 + '%';
  const isIndeterminate = !hasValidValue && !hasErrorMessage;
  return (
    <Box width="100%" className={className} style={style}>
      {hasLabel ? <Label htmlFor={uniqueId}>{label}</Label> : undefined}
      <progress
        id={uniqueId}
        className={utilStyles['visually-hidden']}
        value={hasValidValue ? value : undefined}
        max={hasValidMax ? max : undefined}
        aria-describedby={spaceSeparatedIdListGenerator([
          hasTip ? tipId : undefined,
          hasErrorMessage ? errorMessageId : undefined,
          ariaDescribedby,
        ])}
        {...rest}
      >
        {fillPrecentage}
      </progress>
      <Box
        width={getInputWidth(width)}
        height={size === 'small' ? 'x0.75' : 'x1.5'}
        className={cn(styles.progress)}
      >
        <Box
          height="100%"
          width={isIndeterminate ? '25%' : fillPrecentage ? fillPrecentage : 0}
          className={cn(
            styles.fill,
            isIndeterminate && styles['fill--indeterminate'],
            fillPrecentage === '100%' && styles['fill--done'],
            errorMessage && styles['fill--error'],
          )}
        />
      </Box>
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </Box>
  );
};

ProgressBar.displayName = 'ProgressBar';
