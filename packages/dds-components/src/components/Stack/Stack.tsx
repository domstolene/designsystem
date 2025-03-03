import { type Properties, type StandardProperties } from 'csstype';

import styles from './Stack.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type StackSpacing =
  | 'x0.125'
  | 'x0.25'
  | 'x0.5'
  | 'x0.75'
  | 'x1'
  | 'x1.5'
  | 'x2'
  | 'x2.5'
  | 'x3'
  | 'x4'
  | 'x6'
  | 'x10';
export interface StackStyleProps {
  /**
   * Hvilken retning elementene skal plasseres i.
   */
  direction: 'horizontal' | 'vertical';
  /**
   * CSS `align-items`.
   * @default "center"
   */
  align?: StandardProperties['alignItems'];
  /**
   * CSS `justify-content`.
   * @default "flex-start"
   */
  justify?: StandardProperties['justifyContent'];
  /**
   * Hvilken spacing token som skal brukes som CSS `gap`.
   */
  gap?: StackSpacing | 0;
  /**
   * Hvilken spacing token som skal brukes som CSS `padding`.
   */
  padding?: StackSpacing | 0;
}

export type StackProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  Omit<StackStyleProps, 'direction'>
>;

export const HStack = ({
  id,
  className,
  htmlProps,
  align = 'center',
  justify = 'flex-start',
  gap,
  padding,
  ...rest
}: StackProps) => {
  const style: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-stack-align-items' as any]: align,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-stack-justify-content' as any]: justify,
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.stack,
          styles.horizontal,
          gap ? styles[`gap-${spacingPropToCn(gap)}`] : styles['gap-0'],
          padding
            ? styles[`padding-${spacingPropToCn(padding)}`]
            : styles['padding-0'],
        ),
        htmlProps,
        rest,
      )}
      style={{ ...htmlProps?.style, ...style }}
    />
  );
};

HStack.displayName = 'HStack';

export const VStack = ({
  id,
  className,
  htmlProps,
  align = 'center',
  justify = 'flex-start',
  gap,
  padding,
  ...rest
}: StackProps) => {
  const style: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-stack-align-items' as any]: align,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-stack-justify-content' as any]: justify,
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.stack,
          styles.vertical,
          gap && styles[`gap-${spacingPropToCn(gap)}`],
          padding && styles[`padding-${spacingPropToCn(padding)}`],
        ),
        htmlProps,
        rest,
      )}
      style={{ ...htmlProps?.style, ...style }}
    />
  );
};

VStack.displayName = 'VStack';

export function spacingPropToCn(value: string): HyphenSpacingProps {
  return value
    .replace(/(0)(1-9)/g, '$1-$2')
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .replace(/\./g, '-') as HyphenSpacingProps;
}

type HyphenSpacingProps =
  | 'x-0-125'
  | 'x-0-25'
  | 'x-0-5'
  | 'x-0-75'
  | 'x-1'
  | 'x-1-5'
  | 'x-2'
  | 'x-2-5'
  | 'x-3'
  | 'x-4'
  | 'x-6'
  | 'x-10';
