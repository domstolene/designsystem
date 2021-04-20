import { ChangeEvent, useState } from 'react';
import { Radio as RadioButton, RadioGroup } from '.';

export const Radio = () => {
  const [value, setValue] = useState<number>(2);

  return (
    <div className="component-container">
      <h2> Radio button</h2>
      <hr />
      <RadioGroup
        name="test"
        aria-label="test"
        value={value}
        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {
          setValue(value);
        }}
      >
        <RadioButton value={1}>Test 1</RadioButton>
        <RadioButton value={2}>Test 2</RadioButton>
        <RadioButton value={3}>Test 3</RadioButton>
      </RadioGroup>
    </div>
  );
};

export default {
  title: 'Designsystem/Radio',
  component: RadioButton
};
