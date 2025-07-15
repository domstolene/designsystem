import { useState } from 'react';

import { useFocusTrap } from './useFocusTrap';
import { Paper, VStack } from '../../components/layout';

export interface FocusTrapProps {
  /**Om focus skal fanges i en flate, f.eks. modal når den åpnes. */
  active?: Parameters<typeof useFocusTrap>[0];
  /** Ref som skal motta focus idet focus trap blir aktiv. */
  initialFocusRef?: Parameters<typeof useFocusTrap>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FocusTrapExample = (props: FocusTrapProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useFocusTrap<HTMLDivElement>(isOpen);
  return (
    <div>
      <p>
        Bruk Tab for å navigere i focus trap. Active-tilstand kontrolleres
        internt i eksempelet.
      </p>
      <p>
        <code>
          useFocusTrap&lt;T extends HTMLElement&gt;(active, initialFocusRef)
        </code>
      </p>
      <p>
        <code>
          const ref = useFocusTrap&lt;HTMLDivElement&gt;({isOpen.toString()})
        </code>
      </p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Lukk' : 'Åpne'} flate
      </button>
      {isOpen && (
        <Paper ref={ref} border="border-default" padding="x0.75">
          <VStack gap="x1">
            <button onClick={() => setIsOpen(false)}>Lukk</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </VStack>
        </Paper>
      )}
    </div>
  );
};
