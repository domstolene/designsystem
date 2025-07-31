import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../../helpers/styling/utilStyles.module.css';

export type StylelessListProps<TProps extends object = object> = TProps &
  ComponentPropsWithRef<'ul'>;

/**
 * Normalisert `<ul>` uten styling. Base for custom ul styling.
 *
 * @component
 * @template T ekstra props ved behov.
 * @param {Object & T} props - Standard HTML-attributter for komponenten med mulig utvidelse.
 *
 * @returns {JSX.Element} `<ul>`-element uten styling.

 * @example
 * ```tsx
 *  <StylelessList className="min-styling">
 *    <li>item</li>
 *    <li>item</li>
 *  </StylelessList>
 * ```
 */

export const StylelessList = ({ className, ...rest }: StylelessListProps) => (
  <ul {...rest} className={cn(className, utilStyles['remove-list-styling'])} />
);

export type StylelessOListProps<TProps extends object = object> = TProps &
  ComponentPropsWithRef<'ol'>;

/**
 * Normalisert `<ol>` uten styling. Base for custom ol styling.
 *
 * @component
 * @template T ekstra props ved behov.
 * @param {Object & T} props - Standard HTML-attributter for komponenten med mulig utvidelse.
 *
 * @returns {JSX.Element} `<ol>`-element uten styling.

 * @example
 * ```tsx
 *  <StylelessOList className="min-styling">
 *    <li>item</li>
 *    <li>item</li>
 *  </StylelessOList>
 * ```
 */

export const StylelessOList = ({ className, ...rest }: StylelessOListProps) => (
  <ol {...rest} className={cn(className, utilStyles['remove-list-styling'])} />
);
