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
import { useEffect } from 'react';

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

export const useFloatPosition = (
  arrowRef: HTMLElement | null,
  placement = 'bottom' as Placement,
  offset = defaultOffset
) => {
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
    update,
    refs,
  } = useFloating({
    placement,
    middleware,
  });

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return;
    }

    // Only call this when the floating element is rendered
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [refs.reference, refs.floating, update]);

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
