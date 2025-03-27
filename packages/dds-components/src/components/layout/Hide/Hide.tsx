import { type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  type PolymorphicProp,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import {
  type CSSProps,
  type PrimitiveDisplayHideProps,
} from '../common/Responsive.types';

export type HideProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  PolymorphicProp & PrimitiveDisplayHideProps & CSSProps,
  Omit<HTMLAttributes<HTMLDivElement>, keyof CSSProps>
>;

export const Hide = ({
  hideBelow,
  hideAbove,
  className,
  as = 'div',
  htmlProps,
  id,
  ...rest
}: HideProps) => (
  <ElementAs
    as={as}
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        hideBelow && styles[`${hideBelow}-hide-below`],
        hideAbove && styles[`${hideAbove}-hide-above`],
      ),
      htmlProps,
      rest,
    )}
  />
);

Hide.displayName = 'Hide';
