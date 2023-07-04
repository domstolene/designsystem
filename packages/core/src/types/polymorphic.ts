import { ComponentPropsWithoutRef, ElementType } from 'react';

export type As = ElementType;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};
