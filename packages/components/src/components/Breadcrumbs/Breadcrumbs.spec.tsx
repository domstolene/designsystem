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
    <Breadcrumbs smallScreenBreakpoint="sm">
      <Breadcrumb>{page1}</Breadcrumb>
      <Breadcrumb>{page2}</Breadcrumb>
      <Breadcrumb>{page3}</Breadcrumb>
      <Breadcrumb>{page4}</Breadcrumb>
    </Breadcrumbs>
  );
};

describe('<Breadcrumbs>', () => {
  it('should have nav with accessible name', () => {
    render(<Breadcrumbs />);
    const breadcrumbs = screen.getByRole('navigation');
    expect(breadcrumbs).toHaveAccessibleName('brødsmulesti');
  });
  it('should render 4 breadcrumbs', () => {
    render(<TestComponent />);
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems[0].textContent).toBe(page1);
    expect(breadcrumbItems).toHaveLength(4);
    expect(breadcrumbItems[1].textContent).toBe(page2);
    expect(breadcrumbItems[2].textContent).toBe(page3);
    expect(breadcrumbItems[3].textContent).toBe(page4);
  });
  describe('Breadcrumbs with small screen variant', () => {
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
        <Breadcrumbs smallScreenBreakpoint="xl">
          <Breadcrumb>Side 1</Breadcrumb>
          <Breadcrumb>Side 2</Breadcrumb>
          <Breadcrumb href="#">{page3}</Breadcrumb>
          <Breadcrumb>Side 4</Breadcrumb>
        </Breadcrumbs>,
      );
      const button = screen.getByRole('button');

      await userEvent.click(button!);
      const menuitems = screen.getAllByRole('menuitem');
      expect(menuitems[1].textContent).toBe(page3);
      expect(menuitems[1]).toHaveAttribute('href', '#');
    });
    it('should render 7 breadcrumbs', () => {
      render(<TestComponentSmallScreen />);

      const breadcrumbItems = screen.getAllByRole('listitem');
      expect(breadcrumbItems[0].textContent).toBe(page1);
      expect(breadcrumbItems[1].textContent).toBe(page2);
      expect(breadcrumbItems[2].textContent).toBe(page3);
      expect(breadcrumbItems[3].textContent).toBe(page4);
      // Teller elementer fra begge listene
      expect(breadcrumbItems[4].textContent).toBe(page1);
      expect(breadcrumbItems[5].textContent).toBe(page2 + page3);
      expect(breadcrumbItems[6].textContent).toBe(page4);
      expect(breadcrumbItems).toHaveLength(7);
    });
  });
});
