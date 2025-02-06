import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { InputStepper } from './InputStepper';

describe('<InputStepper />', () => {
  it('should render two buttons', () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toEqual(2);
  });
  it('should render text input', () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
  it('should render label', () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('should render error message', () => {
    const errorMessage = 'this is an error';
    render(<InputStepper label="Label" errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('should have accessible name assosiated with buttons', () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements[0]).toHaveAccessibleName(`Trekk fra ${label}`);
    expect(buttonElements[1]).toHaveAccessibleName(`Legg til ${label}`);
  });
  it('should have label assosiated with input', () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    const inputElementId = screen.getByRole('textbox').getAttribute('id');
    const labelNode = screen.getByText(label);
    expect(labelNode.getAttribute('for')).toEqual(inputElementId);
  });
  it('should have accessible description and invalid state when errorMessage provided', () => {
    const errorMessage = 'this is an errorMessage';
    render(<InputStepper label="Label" errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      errorMessage,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  it('should increment on click on plus button', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} />);
    let inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('1');
    const button = screen.getByRole('button', { name: /Legg til Label/i });
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('2');
  });
  it('should decrement on click on minus button', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} />);
    let inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('1');
    const button = screen.getByRole('button', { name: /Trekk fra Label/i });
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('0');
  });
  it('should not increment past the maxValue', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} maxValue={3} />);
    let inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('1');
    const button = screen.getByRole('button', { name: /Legg til Label/i });
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('2');
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('3');
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('3');
  });
  it('should not decrement past the minValue', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={3} minValue={1} />);
    let inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('3');
    const button = screen.getByRole('button', { name: /Trekk fra Label/i });
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('2');
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('1');
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('1');
  });
  it('should receive a typed user input', async () => {
    const label = 'label';
    render(<InputStepper label={label} />);
    const inputField = screen.getByRole('textbox');
    let inputFieldValue = inputField.getAttribute('value');
    expect(inputFieldValue).toEqual('0');
    await userEvent.tripleClick(inputField);
    await userEvent.type(inputField, '5');
    inputFieldValue = inputField.getAttribute('value');
    console.log(inputFieldValue);
    expect(inputFieldValue).toEqual('5');
  });
  it('should allow decrement to a negative number', async () => {
    const label = 'label';
    render(<InputStepper label={label} minValue={-2} />);
    let inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('0');
    const button = screen.getByRole('button', { name: /Trekk fra Label/i });
    await userEvent.click(button);
    inputFieldValue = screen.getByRole('textbox').getAttribute('value');
    expect(inputFieldValue).toEqual('-1');
  });
});
