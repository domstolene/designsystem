import { type ElementType } from 'react';

import { type PropsOfWithRef } from './polymorphic.types';

export type PolymorphicProps<T extends ElementType> = PropsOfWithRef<T>;

export const ElementAs = <T extends ElementType>({
  as = 'div',
  ref,
  children,
  ...props
}: PolymorphicProps<T>) => {
  const Component = as;
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};
