import { InlineEdit, InlineEditProps } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { useState } from 'react';

const initialValue = 'v';
const newValue = 'text';

type TestProps = Pick<InlineEditProps, 'emptiable' | 'value'>;

const TestComponentInput = (props: TestProps) => {
  const { value: propValue, emptiable } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(propValue);
  return (
    <>
      <InlineEdit
        inputRef={ref}
        value={value}
        onSetValue={setValue}
        emptiable={emptiable}
      >
        <InlineEdit.Input ref={ref} />
      </InlineEdit>
    </>
  );
};

const TestComponentTextArea = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <InlineEdit inputRef={ref} value={value} onSetValue={setValue}>
        <InlineEdit.TextArea ref={ref} />
      </InlineEdit>
    </>
  );
};

describe('<InlineEdit />', () => {
  it('should render element with role textbox when using <input>', () => {
    render(<TestComponentInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument;
  });
  it('should render element with role textbox when using <textarea>', () => {
    render(<TestComponentTextArea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument;
  });
  it('should save input and lose focus on Enter', async () => {
    render(<TestComponentInput value={initialValue} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, `{backspace}${newValue}{enter}`);

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(newValue);
  });
  it('should save input and lose focus on Escape', async () => {
    render(<TestComponentInput value={initialValue} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, `{backspace}${newValue}{escape}`);

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(newValue);
  });

  it('should reset to last-saved value if input is empty', async () => {
    render(<TestComponentInput value={initialValue} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '{backspace}{enter}');

    expect(input).toHaveValue(initialValue);
  });
  it('should become empty when emptiable and input is empty', async () => {
    render(<TestComponentInput emptiable value={initialValue} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '{backspace}{enter}');

    expect(input).toHaveValue('');
  });

  it('should focus when tabbed to', async () => {
    render(<TestComponentInput />);
    const input = screen.getByRole('textbox');

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(input).toHaveFocus();
  });
});
