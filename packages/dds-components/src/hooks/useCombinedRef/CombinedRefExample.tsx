import { useRef } from 'react';

import { useCombinedRef } from './useCombinedRef';
import { Paper } from '../../components/layout';

export interface CombinedRefProps {
  /**Refs som kombineres. */
  refs: Parameters<typeof useCombinedRef>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CombinedRefExample = (props: CombinedRefProps) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (ref1.current) {
      ref1.current.textContent = 'Ref1 endret meg!';
    }

    if (ref2.current) {
      ref2.current.textContent =
        ref2.current.textContent + ' Ref2 endret meg også!';
    }
  };

  const combinedRef = useCombinedRef(ref1, ref2);
  return (
    <div>
      <p>Klikk flaten for å se begge refs påvirke elementet.</p>
      <p>
        <code>useCombinedRef(...refs)</code>
      </p>
      <p>
        <code>useCombinedRef(ref1, ref2)</code>
      </p>
      <Paper
        ref={combinedRef}
        onClick={handleClick}
        border="border-default"
        padding="x1"
      >
        Klikk meg
      </Paper>
    </div>
  );
};
