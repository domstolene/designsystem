import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TextInput } from '.';

describe('<TextInput>', () => {
  it('should render textbox', () => {
    render(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should have a label', () => {
    const label = 'button label';
    render(<TextInput label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('should be disabled', () => {
    render(<TextInput disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  it('should be required', () => {
    render(<TextInput required />);

    expect(screen.getByRole('textbox')).toBeRequired();
  });
  it('should be readonly', () => {
    render(<TextInput readOnly />);

    expect(screen.getByRole('textbox')).toHaveAttribute('readonly', '');
  });
  it('should get value on input', async () => {
    const value = 'text';
    render(<TextInput />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, value);

    expect(input).toHaveFocus();
    expect(input).toHaveValue(value);
  });
  it('should get focus on click', async () => {
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

  it('should have accessible description when tip provided', () => {
    const tip = 'this is a tip';
    render(<TextInput tip={tip} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveAccessibleDescription(tip);
  });
  it('should have accessible description and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is an errorMessage';
    render(<TextInput id={id} errorMessage={errorMessage} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveAccessibleDescription(errorMessage);
    expect(textbox).toHaveAttribute('aria-invalid', 'true');
  });
  it('should have character counter and aria-describedby when maxLength provided', () => {
    const id = 'id';
    const length = 5;
    render(<TextInput id={id} maxLength={length} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      `0 av ${length} tegn skrevet. ${length} igjen.`,
    );
    expect(screen.getByText(`0/${length}`)).toBeInTheDocument();
  });
  it('should not have character counter when both maxLength and withCharacterCounter=false provided', () => {
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
  it('should render correct number of characters when both maxLength and value are provided', () => {
    const value = 'Test';
    const valueLength = value.length;
    const maxLength = 10;

    render(<TextInput maxLength={maxLength} value={value} />);

    const textElement = screen.getByText(`${valueLength}/${maxLength}`);
    expect(textElement).toBeInTheDocument();
  });
});
