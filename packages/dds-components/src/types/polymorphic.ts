import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

export type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
};

export type PropsOfWithRef<T extends ElementType> = ComponentPropsWithRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
};
