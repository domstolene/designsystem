import {
  type Coords,
  type Strategy,
  type UseFloatingReturn,
  arrow,
  autoUpdate,
  flip,
  offset as floatingOffset,
  shift,
  useFloating,
} from '@floating-ui/react-dom';

const defaultOffset = 8;

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

export interface UseFloatPositionOptions {
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

export interface FloatingStyles {
  position: Strategy;
  top: number;
  left: number;
}

interface UseFloatPosition {
  refs: UseFloatingReturn['refs'];
  styles: {
    floating: FloatingStyles;
    arrow:
      | {
          [x: string]: string | number;
          position: Strategy;
          top: string | number;
          left: string | number;
          transform: string;
        }
      | undefined;
  };
}

/**
 * Håndterer posisjonering av et element i forhold til et annet element i DOM.
 * @param {HTMLElement | null} arrowRef pil-elementet.
 * @param {{AnimationFrame: boolean, offset: number, placement: Placement}} options alternativer for float.
 * @returns {{
 *  refs: import('@floating-ui/react-dom').UseFloatingReturn['refs'],
 *  styles: {
 *    floating: import('@floating-ui/react-dom').FloatingStyles,
 *    arrow:
 *      undefined | {
 *        [x: string]: string | number;
 *        position: Strategy;
 *        top: string | number;
 *        left: string | number;
 *        transform: string;
 *      }
 *  }
 * }}  Objekt med refs og styling for floating UI.
 * @example
 * ```tsx
 * function MyComponent() {
 *
 *    // Hvis du trenger en pil
 *    const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
 *
 *    const { refs, styles: positionStyles } = useFloatPosition(arrowElement, {
 *      placement: 'right',
 *      offset: 2,
 *    });
 *
 *    return (
 *      <>
 *        <button ref={refs.setReference}>Anchor</button>
 *        <div
 *          ref={refs.setFloating}
 *          style={positionStyles.floating}
 *        >
 *          <div ref={setArrowElement} style={positionStyles.arrow}>
 *          // din pil, f.eks. svg
 *          </div>
 *          Innhold
 *        </div>
 *      </>
 * };
 * ```
 */

export const useFloatPosition = (
  arrowRef: HTMLElement | null,
  options: UseFloatPositionOptions = {},
): UseFloatPosition => {
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
  arrow: Arrow,
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

type ArrowPlacement = 'top' | 'bottom' | 'left' | 'right';

function placementToArrowPlacement(placement: Placement): ArrowPlacement {
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
