import { useState } from 'react';

import { useWindowResize } from './useWindowResize';

export interface WindowResizeProps {
  /**Funksjon som kjøres. */
  handler: Parameters<typeof useWindowResize>[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WindowResizeExample = (props: WindowResizeProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  useWindowResize(() => setWidth(window.innerWidth));
  return (
    <div>
      <p>Endre vindusstørrelse for å se dets bredde.</p>
      <p>{width}px</p>
      <p>
        <code>useWindowResize(handler)</code>
      </p>
      <p>
        <code>useWindowResize(() =&gt; setWidth(window.innerWidth))</code>
      </p>
    </div>
  );
};
