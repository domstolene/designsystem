import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Breadcrumb, Breadcrumbs } from '.';

const page1 = 'Side 1';
const page2 = 'Side 2';
const page3 = 'Side 3';
const page4 = 'Side 4';

const TestComponent = () => {
  return (
    <Breadcrumbs>
      <Breadcrumb>{page1}</Breadcrumb>
      <Breadcrumb>{page2}</Breadcrumb>
      <Breadcrumb>{page3}</Breadcrumb>
      <Breadcrumb>{page4}</Breadcrumb>
    </Breadcrumbs>
  );
};

const TestComponentSmallScreen = () => {
  return (
    <Breadcrumbs smallScreen>
      <Breadcrumb>{page1}</Breadcrumb>
      <Breadcrumb>{page2}</Breadcrumb>
      <Breadcrumb>{page3}</Breadcrumb>
      <Breadcrumb>{page4}</Breadcrumb>
    </Breadcrumbs>
  );
};

describe('Breadcrumbs', () => {
  it('has aria-label', () => {
    render(<TestComponent />);
    const breadcrumbs = screen.getByLabelText('brødsmulesti');
    expect(breadcrumbs).toHaveAttribute('aria-label', 'brødsmulesti');
  });
  it('should render four breadcrumbs', () => {
    render(<TestComponent />);
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems[0].textContent).toBe(page1);
    expect(breadcrumbItems).toHaveLength(4);
    expect(breadcrumbItems[1].textContent).toBe(page2);
    expect(breadcrumbItems[2].textContent).toBe(page3);
    expect(breadcrumbItems[3].textContent).toBe('Side 4');
  });
  describe('Breadcrumbs smallScreen', () => {
    it('should render three items', () => {
      render(<TestComponentSmallScreen />);
      const breadcrumbItems = screen.queryAllByRole('listitem');
      expect(breadcrumbItems).toHaveLength(3);
      expect(breadcrumbItems[0].textContent).toBe(page1);
      expect(breadcrumbItems[1].textContent).toBe(page2 + page3);
      expect(breadcrumbItems[2].textContent).toBe(page4);
      expect(breadcrumbItems[3]).not.toBeInTheDocument;
    });
    it('should render button for truncated children', () => {
      render(<TestComponentSmallScreen />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute(
        'aria-label',
        'Vis brødsmulesti brødsmule 2 til 3',
      );
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
    it('should show menu on button click', async () => {
      render(<TestComponentSmallScreen />);
      const menu = screen.queryByRole('menu');
      expect(menu).not.toBeInTheDocument();
      const button = screen.getByRole('button');

      await userEvent.click(button!);

      const menuOpened = screen.getByRole('menu');
      expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
    it('should have truncated child with text and href', async () => {
      render(
        <Breadcrumbs smallScreen>
          <Breadcrumb>Side 1</Breadcrumb>
          <Breadcrumb>Side 2</Breadcrumb>
          <Breadcrumb href="#">Side 3</Breadcrumb>
          <Breadcrumb>Side 4</Breadcrumb>
        </Breadcrumbs>,
      );
      const element = screen.getByText('Side 3');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('href', '#');
    });
  });
});
