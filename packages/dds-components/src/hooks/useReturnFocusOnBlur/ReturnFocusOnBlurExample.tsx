import { useRef, useState } from 'react';

import { useReturnFocusOnBlur } from './useReturnFocusOnBlur';

export interface ReturnFocusOnBlurProps {
  /**Om container skal få fokus, f.eks. når en modal åpnes. */
  active: Parameters<typeof useReturnFocusOnBlur>[0];
  /**Funksjon som kjører når fokus forlater container.*/
  onBlur: Parameters<typeof useReturnFocusOnBlur>[1];
  /**Elementet som skal få fokus når fokus forlater container. */
  triggerElement: Parameters<typeof useReturnFocusOnBlur>[2];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ReturnFocusOnBlurExample = (props: ReturnFocusOnBlurProps) => {
  const [isOpen, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useReturnFocusOnBlur<HTMLDivElement>(
    isOpen,
    () => setOpen(false),
    triggerRef.current,
  );

  return (
    <div>
      <p>
        Tab for å gå gjennom elementene i flaten og returnere til første
        knappen.
      </p>
      <p>
        <code>useReturnFocusOnBlur(active, onBlur, triggerelement)</code>
      </p>
      <p>
        <code>
          useReturnFocusOnBlur&lt;HTMLDivElement&gt;(isOpen, () =&gt;
          setOpen(false)), triggerRef.current
        </code>
      </p>
      <div>
        <button ref={triggerRef} onClick={() => setOpen(true)}>
          Åpne
        </button>
        {isOpen && (
          <div ref={containerRef}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        )}
      </div>
    </div>
  );
};
