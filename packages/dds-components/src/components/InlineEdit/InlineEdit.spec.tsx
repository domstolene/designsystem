import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import {
  type InlineEditInputProps,
  type InlineEditTextAreaProps,
} from './InlineEdit.types';
import { InlineEditInput } from './InlineEditInput';
import { InlineEditTextArea } from './InlineEditTextArea';

const initialValue = 'v';
const newValue = 'text';

const TestComponentTextArea = (props: InlineEditTextAreaProps) => {
  const { value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue || '');

  return <InlineEditTextArea value={value} onSetValue={setValue} {...rest} />;
};

const TestComponentInput = (props: InlineEditInputProps) => {
  const { value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue || '');

  return <InlineEditInput value={value} onSetValue={setValue} {...rest} />;
};

describe('<InlineEdit>', () => {
  it('should render textbox when using <input>', () => {
    render(<TestComponentInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument;
  });
  it('should render textbox when using <textarea>', () => {
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

  it('should run onFocus event', async () => {
    const event = vi.fn();
    render(<TestComponentInput onFocus={event} />);

    await userEvent.tab();

    expect(event).toHaveBeenCalled();
  });

  it('should run onChange event', async () => {
    const event = vi.fn();
    render(<TestComponentInput onChange={event} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, `${newValue}`);

    expect(event).toHaveBeenCalled();
  });

  it('should run onBlur event', async () => {
    const event = vi.fn();
    render(<TestComponentInput onBlur={event} />);
    const input = screen.getByRole('textbox');

    await userEvent.tab();

    fireEvent.focusOut(input);

    expect(event).toHaveBeenCalled();
  });

  it('textarea should save input and lose focus on Enter', async () => {
    render(<TestComponentTextArea value={initialValue} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, `{backspace}${newValue}{enter}`);

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(newValue);
  });

  it('textarea should save input and lose focus on Escape', async () => {
    render(<TestComponentTextArea value={initialValue} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, `{backspace}${newValue}{escape}`);

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(newValue);
  });

  it('textarea should reset to last-saved value if input is empty', async () => {
    render(<TestComponentTextArea value={initialValue} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '{backspace}{enter}');

    expect(input).toHaveValue(initialValue);
  });
  it('textarea should become empty when emptiable and input is empty', async () => {
    render(<TestComponentTextArea emptiable value={initialValue} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '{backspace}{enter}');

    expect(input).toHaveValue('');
  });

  it('textarea should focus when tabbed to', async () => {
    render(<TestComponentTextArea />);
    const input = screen.getByRole('textbox');

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(input).toHaveFocus();
  });

  it('should run onFocus event on textarea', async () => {
    const event = vi.fn();
    render(<TestComponentTextArea onFocus={event} />);

    await userEvent.tab();

    expect(event).toHaveBeenCalled();
  });

  it('should run onChange event on textarea', async () => {
    const event = vi.fn();
    render(<TestComponentTextArea onChange={event} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, `${newValue}`);

    expect(event).toHaveBeenCalled();
  });

  it('should run onBlur event on textarea', async () => {
    const event = vi.fn();
    render(<TestComponentTextArea onBlur={event} />);
    const input = screen.getByRole('textbox');

    await userEvent.tab();

    fireEvent.focusOut(input);

    expect(event).toHaveBeenCalled();
  });
});
