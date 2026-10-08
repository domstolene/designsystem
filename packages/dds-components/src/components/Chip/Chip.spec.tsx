import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PersonIcon } from '../..';

import {
  Chip,
  ChipButton,
  ChipCheckbox,
  ChipGroup,
  ChipRadio,
  ChipRemovable,
} from '.';

describe('<Chip>', () => {
  describe('<ChipRemovable>', () => {
    it('renders text', () => {
      const text = 'text';
      render(<ChipRemovable>{text}</ChipRemovable>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('renders button', () => {
      render(<ChipRemovable />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('renders button in compound variant', () => {
      render(<Chip.Removable />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('removes component from DOM on close', async () => {
      const text = 'text';
      render(<ChipRemovable>{text}</ChipRemovable>);
      const button = screen.getByRole('button');
      await userEvent.click(button!);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
    it('has accessible name for button based on text', () => {
      const text = 'text';
      render(<ChipRemovable>{text}</ChipRemovable>);
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName(`Fjern merkelapp ${text}`);
    });
    it('has generic accessible name for button', () => {
      render(<ChipRemovable />);
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName('Fjern merkelapp');
    });
    it('calls onClose event', async () => {
      const event = vi.fn();
      render(<ChipRemovable onClose={event} />);
      const button = screen.getByRole('button');
      await userEvent.click(button!);
      expect(event).toHaveBeenCalled();
    });
  });
  describe('<ChipButton>', () => {
    it('renders text', () => {
      const text = 'text';
      render(<ChipButton>{text}</ChipButton>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('renders button', () => {
      render(<ChipButton />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('renders svg icon', () => {
      const container = render(<ChipButton icon={PersonIcon} />);
      const icon = container.container.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
    it('renders badge content', () => {
      const number = 5;
      render(<ChipButton badgeProps={{ children: number }}></ChipButton>);
      expect(screen.getByText(number)).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveAccessibleName(`${number}`);
    });
    it('renders button in compound variant', () => {
      render(<Chip.Button />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('has accessible name', () => {
      const text = 'text';
      render(<ChipButton>{text}</ChipButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName(text);
    });
    it('calls onClick event', async () => {
      const text = 'text';
      const onClick = vi.fn();
      render(<ChipButton onClick={onClick}>{text}</ChipButton>);
      const button = screen.getByRole('button');
      await userEvent.click(button!);
      expect(onClick).toHaveBeenCalled();
    });
  });
  describe('<ChipCheckbox>', () => {
    it('renders text', () => {
      const text = 'text';
      render(<ChipCheckbox>{text}</ChipCheckbox>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('renders checkbox', () => {
      render(<ChipCheckbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });
    it('renders svg icon', () => {
      const container = render(<ChipCheckbox icon={PersonIcon} />);
      const icon = container.container.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
    it('renders checkbox in compound variant', () => {
      render(<Chip.Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });
    it('has accessible name', () => {
      const text = 'text';
      render(<ChipCheckbox>{text}</ChipCheckbox>);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleName(text);
    });
    it('is selectable', async () => {
      render(<ChipCheckbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
    it('is disabled', async () => {
      render(<ChipCheckbox disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });
    it('gets focus on click', async () => {
      render(<ChipCheckbox />);
      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);

      expect(checkbox).toHaveFocus();
    });
  });
  describe('<ChipRadio>', () => {
    it('renders text', () => {
      const text = 'text';
      render(<ChipRadio>{text}</ChipRadio>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('renders radio', () => {
      render(<ChipRadio />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });
    it('renders svg icon', () => {
      const container = render(<ChipRadio icon={PersonIcon} />);
      const icon = container.container.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
    it('renders radio in compound variant', () => {
      render(<Chip.Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });
    it('has accessible name', () => {
      const text = 'text';
      render(<ChipRadio>{text}</ChipRadio>);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleName(text);
    });
    it('is disabled', async () => {
      render(<ChipRadio disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeDisabled();
    });
    it('gets focus on click', async () => {
      render(<ChipRadio />);
      const radio = screen.getByRole('radio');
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
  });
  describe('<ChipGroup>', () => {
    it('renders group', () => {
      render(<ChipGroup />);

      const group = screen.getByRole('group');
      expect(group).toBeInTheDocument();
    });
    it('renders children', () => {
      render(
        <ChipGroup>
          <ChipButton />
          <ChipCheckbox />
        </ChipGroup>,
      );

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
    it('has accessible name when label provided', () => {
      const label = 'label';
      render(<ChipGroup label={label} />);

      const group = screen.getByRole('group');
      expect(group).toHaveAccessibleName(label);
    });
    it('renders group in compound variant', () => {
      const label = 'label';
      render(<Chip.Group label={label} />);

      const group = screen.getByRole('group');
      expect(group).toHaveAccessibleName(label);
    });
  });
});
