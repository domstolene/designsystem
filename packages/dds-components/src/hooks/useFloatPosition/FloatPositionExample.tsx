import { useState } from 'react';

import { useFloatPosition } from './useFloatPosition';
import { Paper } from '../../components/layout';

export interface FloatPositionProps {
  /**`ref` til pilen. */
  arrowRef: Parameters<typeof useFloatPosition>[0];
  /**Alternativer: plassering i forhold til ankeret, offset og om posisjonen skal oppdateres ved hver animation frame.  */
  options: Parameters<typeof useFloatPosition>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FloatPositionExample = (props: FloatPositionProps) => {
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  const placement = 'right';
  const offset = 8;
  const { refs, styles: positionStyles } = useFloatPosition(arrowElement, {
    placement,
    offset,
  });
  return (
    <div>
      <p>
        <code>useFloatPosition(arrowRef, options)</code>
      </p>
      <p>
        <code>
          useFloatPosition(arrowElement, &#123; placement: '{placement}',
          offset: {offset} &#125;)
        </code>
      </p>
      <div>
        <button ref={refs.setReference}>Anchor</button>
        <Paper
          ref={refs.setFloating}
          style={positionStyles.floating}
          border="border-default"
        >
          <div ref={setArrowElement} style={positionStyles.arrow}>
            <svg width="24" height="14">
              <path d="M 7 0 L 13 5 L 19 0 L 7 0" />
            </svg>
          </div>
          float
        </Paper>
      </div>
    </div>
  );
};
