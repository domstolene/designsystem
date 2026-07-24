import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { KeyIcon } from '../../Icon/icons';
import { StylelessButton } from '../StylelessButton';

import { DropdownHeader, DropdownItem } from '.';

describe('<Dropdown>', () => {
  describe('<DropdownHeader>', () => {
    it('renders heading', () => {
      render(<DropdownHeader />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });
    it('renders children', () => {
      const text = 'Dropdown Header';
      render(<DropdownHeader>{text}</DropdownHeader>);
      expect(screen.getByRole('heading', { name: text })).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
  describe('<DropdownItem>', () => {
    it('renders children', () => {
      const text = 'Dropdown Item';
      render(<DropdownItem>{text}</DropdownItem>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('renders button', () => {
      render(<DropdownItem as={StylelessButton} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('renders link', () => {
      render(<DropdownItem as="a" href="#" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
    it('renders icon', () => {
      const { container } = render(<DropdownItem icon={KeyIcon} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});
