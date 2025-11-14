import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import {
  type InlineEditInputProps,
  type InlineEditSelectProps,
  type InlineEditTextAreaProps,
} from './InlineEdit.types';
import { InlineEditInput } from './InlineEditInput/InlineEditInput';
import { InlineEditSelect } from './InlineEditSelect/InlineEditSelect';
import { InlineEditTextArea } from './InlineEditTextArea/InlineEditTextArea';

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

const TestComponentSelect = (props: InlineEditSelectProps) => {
  const { value: propValue, ...rest } = props;
  const [value, setValue] = useState(propValue || '');

  return (
    <InlineEditSelect value={value} onSetValue={setValue} {...rest}>
      <option></option>
      <option>{initialValue}</option>
      <option>{newValue}</option>
    </InlineEditSelect>
  );
};

describe('<InlineEdit>', () => {
  describe('<input>', () => {
    it('should render textbox>', () => {
      render(<TestComponentInput />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    it('should be invalid', () => {
      render(<TestComponentInput error />);
      expect(screen.getByRole('textbox')).toBeInvalid();
    });

    it('should have accessible name', () => {
      const label = 'text';
      render(<TestComponentInput aria-label={label} />);
      expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
    });
    it('should have accessible description', () => {
      render(<TestComponentInput />);
      expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
        'Escape, Enter eller Tab for å lagre. Innskrivingsfeltet kan ikke tømmes.',
      );
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
  });

  describe('<textarea>', () => {
    it('should render textbox', () => {
      render(<TestComponentTextArea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    it('should be invalid', () => {
      render(<TestComponentTextArea error />);
      expect(screen.getByRole('textbox')).toBeInvalid();
    });

    it('should have accessible name', () => {
      const label = 'text';
      render(<TestComponentTextArea aria-label={label} />);
      expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
    });
    it('should have accessible description', () => {
      render(<TestComponentTextArea />);
      expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
        'Escape, Enter eller Tab for å lagre. Innskrivingsfeltet kan ikke tømmes.',
      );
    });

    it('should save input and lose focus on Enter', async () => {
      render(<TestComponentTextArea value={initialValue} />);
      const input = screen.getByRole('textbox');
      await userEvent.type(input, `{backspace}${newValue}{enter}`);

      expect(input).not.toHaveFocus();
      expect(input).toHaveValue(newValue);
    });

    it('should save input and lose focus on Escape', async () => {
      render(<TestComponentTextArea value={initialValue} />);
      const input = screen.getByRole('textbox');
      await userEvent.type(input, `{backspace}${newValue}{escape}`);

      expect(input).not.toHaveFocus();
      expect(input).toHaveValue(newValue);
    });

    it('should reset to last-saved value if input is empty', async () => {
      render(<TestComponentTextArea value={initialValue} />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, '{backspace}{enter}');

      expect(input).toHaveValue(initialValue);
    });

    it('should become empty when emptiable and input is empty', async () => {
      render(<TestComponentTextArea emptiable value={initialValue} />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, '{backspace}{enter}');

      expect(input).toHaveValue('');
    });

    it('should focus when tabbed to', async () => {
      render(<TestComponentTextArea />);
      const input = screen.getByRole('textbox');

      expect(document.body).toHaveFocus();

      await userEvent.tab();

      expect(input).toHaveFocus();
    });

    it('should run onFocus event', async () => {
      const event = vi.fn();
      render(<TestComponentTextArea onFocus={event} />);

      await userEvent.tab();

      expect(event).toHaveBeenCalled();
    });

    it('should run onChange event', async () => {
      const event = vi.fn();
      render(<TestComponentTextArea onChange={event} />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, `${newValue}`);

      expect(event).toHaveBeenCalled();
    });

    it('should run onBlur event', async () => {
      const event = vi.fn();
      render(<TestComponentTextArea onBlur={event} />);
      const input = screen.getByRole('textbox');

      await userEvent.tab();

      fireEvent.focusOut(input);

      expect(event).toHaveBeenCalled();
    });
  });
  describe('<select>', () => {
    it('should render combobox', () => {
      render(<TestComponentSelect />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
    it('should be invalid', () => {
      render(<TestComponentSelect error />);
      expect(screen.getByRole('combobox')).toBeInvalid();
    });

    it('should have accessible name', () => {
      const label = 'text';
      render(<TestComponentSelect aria-label={label} />);
      expect(screen.getByRole('combobox')).toHaveAccessibleName(label);
    });
    it('should have accessible description', () => {
      render(<TestComponentSelect />);
      expect(screen.getByRole('combobox')).toHaveAccessibleDescription(
        'Escape, Enter eller Tab for å lagre. Innskrivingsfeltet kan ikke tømmes.',
      );
    });

    it('should save input and lose focus on Enter', async () => {
      render(<TestComponentSelect value={initialValue} />);
      const input = screen.getByRole('combobox');
      await userEvent.selectOptions(input, newValue);
      await userEvent.keyboard('{Enter}');

      expect(input).not.toHaveFocus();
      expect(input).toHaveValue(newValue);
    });

    it('should save input and lose focus on Escape', async () => {
      render(<TestComponentSelect value={initialValue} />);
      const input = screen.getByRole('combobox');
      await userEvent.selectOptions(input, newValue);
      await userEvent.keyboard('{Escape}');

      expect(input).not.toHaveFocus();
      expect(input).toHaveValue(newValue);
    });

    it('should reset to last-saved value if input is empty', async () => {
      render(<TestComponentSelect value={initialValue} />);
      const input = screen.getByRole('combobox');

      await userEvent.selectOptions(input, '');
      await userEvent.keyboard('{Enter}');

      expect(input).toHaveValue(initialValue);
    });

    it('should become empty when emptiable and input is empty', async () => {
      render(<TestComponentSelect emptiable value={initialValue} />);
      const input = screen.getByRole('combobox');

      await userEvent.selectOptions(input, '');
      await userEvent.keyboard('{Enter}');

      expect(input).toHaveValue('');
    });

    it('should become empty when clear button is clicked', async () => {
      render(<TestComponentSelect emptiable value={initialValue} />);
      const input = screen.getByRole('combobox');
      const clearButton = screen.getByRole('button', {
        name: /tøm nedtrekksliste/i,
      });

      await userEvent.click(clearButton);

      expect(input).toHaveValue('');
    });

    it('should focus when tabbed to', async () => {
      render(<TestComponentSelect />);
      const input = screen.getByRole('combobox');

      expect(document.body).toHaveFocus();

      await userEvent.tab();

      expect(input).toHaveFocus();
    });

    it('should run onFocus event', async () => {
      const event = vi.fn();
      render(<TestComponentSelect onFocus={event} />);

      await userEvent.tab();

      expect(event).toHaveBeenCalled();
    });

    it('should run onChange event', async () => {
      const event = vi.fn();
      render(<TestComponentSelect onChange={event} />);
      const input = screen.getByRole('combobox');

      await userEvent.selectOptions(input, newValue);

      expect(event).toHaveBeenCalled();
    });

    it('should run onBlur event', async () => {
      const event = vi.fn();
      render(<TestComponentSelect onBlur={event} />);
      const input = screen.getByRole('combobox');

      await userEvent.tab();

      fireEvent.focusOut(input);

      expect(event).toHaveBeenCalled();
    });
  });
});
