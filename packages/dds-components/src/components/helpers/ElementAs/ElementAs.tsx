import { type ElementType } from 'react';

import { type As, type PropsOfWithRef } from '../../../types';

export type PolymorphicProps<T extends As> = PropsOfWithRef<T>;

export const ElementAs = <T extends ElementType = 'div'>({
  as,
  ref,
  children,
  ...props
}: PolymorphicProps<T>) => {
  const Component = as || 'div';
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};
