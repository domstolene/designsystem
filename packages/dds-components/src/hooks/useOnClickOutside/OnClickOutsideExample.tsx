import { useRef, useState } from 'react';

import { useOnClickOutside } from './useOnClickOutside';
import { Button } from '../../components/Button';
import { Paper } from '../../components/layout';

interface UseOnClickOutsideProps {
  /**Element(er) brukeren klikker utenfor. */
  element?: Parameters<typeof useOnClickOutside>[0];
  /**Funksjon kjørt ved klikk utenfor. */
  handler: Parameters<typeof useOnClickOutside>[1];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OnClickOutsideExample = (props: UseOnClickOutsideProps) => {
  const [isOpen, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside([ref.current, buttonRef.current], () => setOpen(false));

  return (
    <div>
      <p>Klikk utenfor knappen eller flaten lukker flaten.</p>
      <p>
        <code>useOnClickOutside(element, handler);</code>
      </p>
      <p>
        <code>
          useOnClickOutside([ref.current, buttonRef.current], () =&gt;
          setOpen(false));
        </code>
      </p>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Åpne
      </Button>
      {isOpen && (
        <Paper padding="x1" border="border-default" margin="x1" ref={ref}>
          innhold
        </Paper>
      )}
    </div>
  );
};
