import { usePopper } from 'react-popper';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSProperties } from 'react';

const defaultOffset = ddsBaseTokens.spacing.SizesDdsSpacingLocalX05NumberPx;

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export const useReactPopper = (
  referenceElement: HTMLElement,
  popperElement: HTMLElement,
  arrowRef?: HTMLElement | string,
  placement = 'auto' as Placement,
  offset = defaultOffset
): {
  styles: { [key: string]: CSSProperties };
  attributes: { [key: string]: { [key: string]: string } | undefined };
} => {
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowRef
        }
      },

      {
        name: 'offset',
        options: {
          offset: [0, offset]
        }
      }
    ]
  });

  return { styles, attributes };
};
