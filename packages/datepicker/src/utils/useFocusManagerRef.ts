import { Ref, RefObject, useImperativeHandle, useRef } from 'react';
import { createFocusManager } from '@react-aria/focus';

interface DOMRefValue<T extends HTMLElement = HTMLElement> {
  UNSAFE_getDOMNode(): T | null;
}

export interface FocusableRefValue<
  T extends HTMLElement = HTMLElement,
  D extends HTMLElement = T,
> extends DOMRefValue<D> {
  focus(): void;
}

export type DOMRef<T extends HTMLElement = HTMLElement> = Ref<DOMRefValue<T>>;
export type FocusableRef<T extends HTMLElement = HTMLElement> = Ref<
  FocusableRefValue<T>
>;

export function useFocusManagerRef(ref: FocusableRef<HTMLElement>) {
  const domRef = useRef(null);
  useImperativeHandle(ref, () => ({
    ...createDOMRef(domRef),
    focus() {
      createFocusManager(domRef).focusFirst({ tabbable: true });
    },
  }));
  return domRef;
}

function createDOMRef<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
): DOMRefValue<T> {
  return {
    UNSAFE_getDOMNode() {
      return ref.current;
    },
  };
}
