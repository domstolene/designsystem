import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

export interface PolymorphicProp {
  /**HTML- eller React-element som returneres. */
  as?: ElementType;
}

export type As = ElementType;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
};

export type PropsOfWithRef<T extends As> = ComponentPropsWithRef<T> & {
  /** HTML- eller React-element som returneres. */
  as?: T;
};
