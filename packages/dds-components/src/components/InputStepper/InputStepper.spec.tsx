import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { InputStepper } from './InputStepper';
import { Button } from '../Button';

describe('<InputStepper>', () => {
  it('renders two buttons', () => {
    render(<InputStepper maxValue={5} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toEqual(2);
  });
  it('renders text input', () => {
    render(<InputStepper maxValue={5} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
  it('renders label', () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('renders error message', () => {
    const errorMessage = 'this is an error';
    render(
      <InputStepper label="Label" maxValue={5} errorMessage={errorMessage} />,
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('has accessible name assosiated with buttons', () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements[0]).toHaveAccessibleName(`Reduser ${label} med 1`);
    expect(buttonElements[1]).toHaveAccessibleName(`Øk ${label} med 1`);
  });
  it('has label assosiated with input', () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
  });
  it('has accessible description and invalid state when errorMessage is provided', () => {
    const errorMessage = 'this is an errorMessage';
    render(
      <InputStepper label="Label" errorMessage={errorMessage} maxValue={5} />,
    );
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      errorMessage,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  it('has accessible description when tip is provided', () => {
    const tip = 'this is a tip';
    render(<InputStepper label="Label" tip={tip} maxValue={5} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(tip);
  });
  it('increments on click on plus button', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} maxValue={5} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('1');
    const button = screen.getByRole('button', {
      name: new RegExp(`Øk ${label} med 1`, 'i'),
    });
    await userEvent.click(button);
    expect(inputField).toHaveValue('2');
  });
  it('decrements on click on minus button', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} maxValue={5} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('1');
    const button = screen.getByRole('button', {
      name: new RegExp(`Reduser ${label} med 1`, 'i'),
    });
    await userEvent.click(button);
    expect(inputField).toHaveValue('0');
  });
  it('does not increment past the maxValue', async () => {
    const label = 'label';
    render(<InputStepper label={label} defaultValue={1} maxValue={3} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('1');
    const button = screen.getByRole('button', {
      name: new RegExp(`Øk ${label} med 1`, 'i'),
    });
    await userEvent.click(button);
    expect(inputField).toHaveValue('2');
    await userEvent.click(button);
    expect(inputField).toHaveValue('3');
    await userEvent.click(button);
    expect(inputField).toHaveValue('3');
  });
  it('does not decrement past the minValue', async () => {
    const label = 'label';
    render(
      <InputStepper label={label} defaultValue={3} maxValue={5} minValue={1} />,
    );
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('3');
    const button = screen.getByRole('button', {
      name: new RegExp(`Reduser ${label} med 1`, 'i'),
    });
    await userEvent.click(button);
    expect(inputField).toHaveValue('2');
    await userEvent.click(button);
    expect(inputField).toHaveValue('1');
    await userEvent.click(button);
    expect(inputField).toHaveValue('1');
  });
  it('receives a typed user input', async () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('0');
    await userEvent.tripleClick(inputField);
    await userEvent.type(inputField, '5');
    expect(inputField).toHaveValue('5');
  });
  it.fails('does not allow initialization with negative numbers', async () => {
    render(<InputStepper minValue={-2} maxValue={5} />);
  });
  it('supports controlledState', async () => {
    const ControlledComponent = () => {
      const [value, setValue] = useState(4);
      return (
        <div>
          <InputStepper
            label="Label"
            step={1}
            minValue={0}
            maxValue={5}
            value={value}
            onChange={e => {
              if (typeof e === 'number') {
                setValue(e);
              } else {
                setValue(Number(e.target.value));
              }
            }}
          />
          <Button
            onClick={() => {
              setValue(0);
            }}
          >
            Nullstill
          </Button>
        </div>
      );
    };
    render(<ControlledComponent />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue('4');
    await userEvent.click(screen.getByRole('button', { name: 'Nullstill' }));
    expect(inputField).toHaveValue('0');
  });
  it('is readOnly', async () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} readOnly />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveAttribute('readonly');
  });
  it('is disabled', async () => {
    const label = 'label';
    render(<InputStepper label={label} maxValue={5} disabled />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeDisabled();
  });
});
