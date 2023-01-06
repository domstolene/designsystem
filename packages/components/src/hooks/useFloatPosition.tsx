import {
  arrow,
  autoUpdate,
  Coords,
  flip,
  offset as floatingOffset,
  shift,
  Strategy,
  useFloating,
} from '@floating-ui/react-dom';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const defaultOffset = ddsBaseTokens.spacing.SizesDdsSpacingLocalX05NumberPx;

export type Placement =
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

interface UseFloatPositionOptions {
  /**
   * Whether to update the position of the floating element on every animation frame if required.
   * This is optimized for performance but can still be costly.
   * @default true
   */
  animationFrame?: boolean;
  /**
   * `offset` is used to displace the floating element from its core placement.
   * The value passed is logical, meaning its effect on the
   * physical result is dependent on the writing direction (e.g. RTL).
   * @default 8
   */
  offset?: number;
  /**
   * Where to place the floating element relative to its reference element.
   * @default 'bottom'
   */
  placement?: Placement;
}

export const useFloatPosition = (
  arrowRef: HTMLElement | null,
  options: UseFloatPositionOptions = {}
) => {
  const {
    animationFrame = true,
    offset = defaultOffset,
    placement = 'bottom',
  } = options;

  const middleware = [
    floatingOffset(offset),
    flip(),
    shift(),

    // Only add arrow(...) if arrowRef is set
    ...(arrowRef ? [arrow({ element: arrowRef })] : []),
  ];

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    middlewareData,
    placement: actualPlacement,
    refs,
  } = useFloating({
    placement,
    middleware,
    whileElementsMounted: (reference, floating, update) =>
      autoUpdate(reference, floating, update, { animationFrame }),
  });

  return {
    reference,
    floating,
    refs,
    styles: {
      floating: {
        position: strategy,
        top: y ?? '',
        left: x ?? '',
      },
      arrow: middlewareData.arrow
        ? getArrowStyling(strategy, actualPlacement, middlewareData.arrow)
        : undefined,
    },
  };
};

type Arrow = Partial<Coords> & { centerOffset: number };

function getArrowStyling(
  strategy: Strategy,
  placement: Placement,
  arrow: Arrow
) {
  const arrowPlacement = placementToArrowPlacement(placement);

  const arrowPlacementOffset = {
    top: '-15px',
    bottom: '-15px',
    right: '-21px',
    left: '-21px',
  }[arrowPlacement];

  const rotateArrow = {
    top: 'rotate(180deg)',
    right: 'rotate(-90deg)',
    bottom: '',
    left: 'rotate(90deg)',
  }[arrowPlacement];

  return {
    position: strategy,
    top: arrow?.y ?? '',
    left: arrow?.x ?? '',
    [arrowPlacement]: arrowPlacementOffset,
    transform: rotateArrow,
  };
}

function placementToArrowPlacement(placement: Placement) {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return 'bottom';

    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return 'top';

    case 'left':
    case 'left-start':
    case 'left-end':
      return 'right';

    case 'right':
    case 'right-start':
    case 'right-end':
      return 'left';
  }
}
