import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../styling/utilStyles.module.css';

/**
 * Usynlig `<input>` til bruk for skjermlesere, typisk for custom radioknapper o.l..
 *
 * @component
 * @param {Object} props - Standard HTML-attributter for komponenten.
 *
 * @returns {JSX.Element} Et usynlig `<input>`-element.

 * @example
 * ```tsx
 * <label htmlFor="id">
 *  <HiddenInput id="id" />
 *  //visuell erstatning for input
 * </label>
 * });
 * ```
 */

export const HiddenInput = ({
  className,
  ...rest
}: ComponentPropsWithRef<'input'>) => (
  <input className={cn(className, utilStyles['hide-input'])} {...rest} />
);
