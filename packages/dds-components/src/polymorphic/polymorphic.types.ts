import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

export type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>;

export type PropsOfWithRef<T extends ElementType> = ComponentPropsWithRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
} & Omit<React.ComponentPropsWithRef<T>, 'as'>;
