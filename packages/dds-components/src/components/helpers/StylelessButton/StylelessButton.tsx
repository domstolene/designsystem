import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../styling/utilStyles.module.css';

export type StylelessButtonProps<TProps extends object = object> = TProps &
  ComponentPropsWithRef<'button'>;

/**
 * Normalisert `<button>` uten styling. Base for custom buttom styling.
 *
 * @component
 * @template T ekstra props ved behov.
 * @param {Object & T} props - Standard HTML-attributter for komponenten med mulig utvidelse.
 *
 * @returns {JSX.Element} `<button>`-element uten styling.

 * @example
 * ```tsx
 *  <StylelessButton className="min-styling">
 *    Tekst
 *  </StylelessButton>
 * ```
 */

export const StylelessButton = ({
  className,
  ...rest
}: StylelessButtonProps) => (
  <button
    {...rest}
    className={cn(
      className,
      utilStyles['remove-button-styling'],
      utilStyles['normalize-button'],
    )}
  />
);
