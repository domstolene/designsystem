import { useState } from 'react';

import {
  type UseControllableStateProps,
  useControllableState,
} from './useControllableState';
export const ControllableStateExample = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: UseControllableStateProps<boolean>,
) => {
  const [value, setValue] = useState(false);

  const [checked, setChecked] = useControllableState({
    value,
    defaultValue: false,
    onChange: setValue,
  });
  const [checked2, setChecked2] = useControllableState({
    value: undefined,
    defaultValue: false,
    onChange: undefined,
  });
  return (
    <div>
      <p>
        Test avkrysningsboksene under. Separate eksempler for å vise hvordan
        argumentene setter hver modus.
      </p>
      <p>
        <code>
          useControllableState&lt;T&gt;(&#123;value, defaultValue,
          onChange&#125;)
        </code>
      </p>
      <h2>Kontrollert</h2>
      <p>
        <code>
          useControllableState&lt;boolean&gt;(&#123;value: value, defaultValue:
          false, onChange: setValue&#125;)
        </code>
      </p>
      <p>
        <input
          id="controlled"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="controlled">Kontrollert</label>
      </p>
      <h2>Ukontrollert</h2>
      <p>
        <code>
          useControllableState&lt;boolean&gt;(&#123;value: undefined,
          defaultValue: false, onChange: undefined&#125;)
        </code>
      </p>
      <p>
        <input
          id="uncontrolled"
          checked={checked2}
          onChange={e => setChecked2(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="uncontrolled">Ukontrollert</label>
      </p>
    </div>
  );
};
