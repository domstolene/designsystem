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
  breakpointBelow,
  breakpointAbove,
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
        breakpointBelow && styles[`${breakpointBelow}-hide-below`],
        breakpointAbove && styles[`${breakpointAbove}-hide-above`],
      ),
      htmlProps,
      rest,
    )}
  />
);

Hide.displayName = 'Hide';
