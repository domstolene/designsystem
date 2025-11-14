import { useState } from 'react';

import { useCallbackRef } from './useCallbackRef';

export interface CallbackRefProps {
  /** Callback-funksjonen som skal kjøres ved klikk. */
  callback: Parameters<typeof useCallbackRef>[0];
  /** Avhengigheter for callback. */
  deps?: Parameters<typeof useCallbackRef>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CallbackRefExample = (props: CallbackRefProps) => {
  const [count, setCount] = useState(0);

  const stableHandler = useCallbackRef(() => {
    setCount(c => c + 1);
  }, [count]);

  return (
    <div>
      <p>Klikk på knappen for å øke tallet.</p>
      <p>
        <code>useCallbackRef(callback, deps)</code>
      </p>
      <p>
        <code>useCallbackRef(() =&gt; setCount(c =&gt; c + 1), [count])</code>
      </p>
      <button onClick={stableHandler}>Øk</button>
      <p>{count}</p>
    </div>
  );
};
