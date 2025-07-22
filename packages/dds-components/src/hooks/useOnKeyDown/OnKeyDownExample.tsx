import { useState } from 'react';

import { useOnKeyDown } from './useOnKeyDown';

export interface OnKeyDownProps {
  /**Tast som trykkes. */
  key: Parameters<typeof useOnKeyDown>[0];
  /**Funksjon som kjøres. */
  handler: Parameters<typeof useOnKeyDown>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OnKeyDownExample = (props: OnKeyDownProps) => {
  const [count, setCount] = useState(0);

  useOnKeyDown('+', () => setCount(count + 1));
  return (
    <div>
      <p>Trykk '+' for å øke tallet.</p>
      <p>
        <code>useOnKeyDown(key, handler)</code>
      </p>
      <p>
        <code>useOnKeyDown('+', () =&gt; setCount(count + 1))</code>
      </p>
      <p>{count}</p>
    </div>
  );
};
