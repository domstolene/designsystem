import { useRef, useState } from 'react';

import { useOnClickOutside } from './useOnClickOutside';
import { Paper } from '../../components/layout';

export interface UseOnClickOutsideProps {
  /**Element(er) brukeren klikker utenfor. */
  element?: Parameters<typeof useOnClickOutside>[0];
  /**Funksjon kjørt ved klikk utenfor. */
  handler: Parameters<typeof useOnClickOutside>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OnClickOutsideExample = (props: UseOnClickOutsideProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref.current, () => setCount(count + 1));

  return (
    <div>
      <p>Klikk utenfor flaten med innhold.</p>
      <p>Antall klikk utenfor: {count}</p>
      <p>
        <code>useOnClickOutside(element, handler);</code>
      </p>
      <p>
        <code>
          useOnClickOutside([ref.current], () =&gt; setCount(count + 1));
        </code>
      </p>
      <Paper padding="x1" border="border-default" margin="x1" ref={ref}>
        Innhold
      </Paper>
    </div>
  );
};
