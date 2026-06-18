import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CheckIcon } from '../Icon/icons';

import { TextInput } from '.';

describe('<TextInput>', () => {
  it('renders textbox', () => {
    render(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('has a label', () => {
    const label = 'label';
    render(<TextInput label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('has accessible name when label is provided', () => {
    const label = 'label';
    render(<TextInput label={label} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
  });
  it('has accessible name when aria-label is provided', () => {
    const label = 'label';
    render(<TextInput aria-label={label} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
  });
  it('is disabled', () => {
    render(<TextInput disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  it('is required', () => {
    render(<TextInput required />);

    expect(screen.getByRole('textbox')).toBeRequired();
  });
  it('is readonly', () => {
    render(<TextInput readOnly />);

    expect(screen.getByRole('textbox')).toHaveAttribute('readonly', '');
  });
  it('gets value on input', async () => {
    const value = 'text';
    render(<TextInput />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, value);

    expect(input).toHaveFocus();
    expect(input).toHaveValue(value);
  });
  it('gets focus on click', async () => {
    render(<TextInput />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    expect(input).toHaveFocus();
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<TextInput errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('has accessible description when tip provided', () => {
    const tip = 'this is a tip';
    render(<TextInput tip={tip} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveAccessibleDescription(tip);
  });
  it('has accessible description and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is an errorMessage';
    render(<TextInput id={id} errorMessage={errorMessage} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveAccessibleDescription(errorMessage);
    expect(textbox).toHaveAttribute('aria-invalid', 'true');
  });
  it('has character counter and aria-describedby when maxLength provided', () => {
    const id = 'id';
    const length = 5;
    render(<TextInput id={id} maxLength={length} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      `0 av ${length} tegn skrevet. ${length} igjen.`,
    );
    expect(screen.getByText(`0/${length}`)).toBeInTheDocument();
  });
  it('does not have character counter when both maxLength and withCharacterCounter=false provided', () => {
    const id = 'id';
    const length = 5;
    render(
      <TextInput id={id} maxLength={length} withCharacterCounter={false} />,
    );
    expect(screen.getByRole('textbox')).not.toHaveAccessibleDescription(
      `0/${length}`,
    );
    expect(screen.queryByText(`0/${length}`)).not.toBeInTheDocument();
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<TextInput tip={tip} errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(tip)).not.toBeInTheDocument();
  });
  it('renders correct number of characters when both maxLength and value are provided', () => {
    const value = 'Test';
    const valueLength = value.length;
    const maxLength = 10;

    render(<TextInput maxLength={maxLength} value={value} />);

    const textElement = screen.getByText(`${valueLength}/${maxLength}`);
    expect(textElement).toBeInTheDocument();
  });

  it('renders with icon prop', () => {
    const { container } = render(<TextInput icon={CheckIcon} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with prefix prop', () => {
    const prefix = '$';
    render(<TextInput prefix={prefix} />);
    expect(screen.getByText(prefix)).toBeInTheDocument();
  });

  it('renders with suffix prop', () => {
    const suffix = 'kr';
    render(<TextInput suffix={suffix} />);
    expect(screen.getByText(suffix)).toBeInTheDocument();
  });

  it('renders with both prefix and suffix', () => {
    const prefix = 'prefix';
    const suffix = 'suffix';
    render(<TextInput prefix={prefix} suffix={suffix} />);
    expect(screen.getByText(prefix)).toBeInTheDocument();
    expect(screen.getByText(suffix)).toBeInTheDocument();
  });

  it('renders with componentSize small', () => {
    render(<TextInput componentSize="small" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with componentSize xsmall', () => {
    render(<TextInput componentSize="xsmall" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with type email', () => {
    render(<TextInput type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('renders with defaultValue', () => {
    const defaultValue = 'default text';
    render(<TextInput defaultValue={defaultValue} />);
    expect(screen.getByRole('textbox')).toHaveValue(defaultValue);
  });

  it('renders with aria-required', () => {
    render(<TextInput aria-required />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-required',
      'true',
    );
  });

  it('renders required marker if required', () => {
    render(<TextInput label="Label" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('does not render required marker if required but no label is provided', () => {
    render(<TextInput required />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });
});
