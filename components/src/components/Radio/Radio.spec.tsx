import { ChangeEvent, useState } from 'react';
import { Radio, RadioGroup } from '.';
import { render } from '@testing-library/react';

const TestComponent = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <RadioGroup
      value={value}
      onChange={(_e: ChangeEvent<HTMLInputElement>, value: number) => {
        setValue(value);
      }}
    >
      <Radio value={1}>Test 1</Radio>
      <Radio value={2}>Test 2</Radio>
      <Radio value={3}>Test 3</Radio>
    </RadioGroup>
  );
};

let testContainer: HTMLElement;

describe('RadioGroup', () => {
  beforeEach(() => {
    const { container } = render(<TestComponent />);
    testContainer = container;
  });

  test('should set default checked state', () => {
    const input = testContainer.querySelector('input');
    expect(input?.checked).toBeTruthy();
  });

  test('should update checked state when selecting a radio button', () => {
    const label = testContainer.querySelectorAll('label')[2];
    label?.click();
    const input = label.querySelector('input');
    expect(input?.checked).toBeTruthy();
  });

  test('should disable input elements when group is disabled', () => {
    const { container } = render(
      <RadioGroup name="test" value={1} onChange={() => {}} disabled>
        <Radio value={1}>Test 1</Radio>
      </RadioGroup>
    );

    const input = container.querySelector('input');
    expect(input?.disabled).toBeTruthy();
  });
});
