import { render, screen, within } from '@testing-library/react';
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
  it('has nav with accessible name', () => {
    render(<Breadcrumbs />);
    const breadcrumbs = screen.getByRole('navigation');
    expect(breadcrumbs).toHaveAccessibleName('Brødsmulesti');
  });
  it('renders 4 breadcrumbs', () => {
    render(<TestComponent />);
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems[0].textContent).toBe(page1);
    expect(breadcrumbItems).toHaveLength(4);
    expect(breadcrumbItems[1].textContent).toBe(page2);
    expect(breadcrumbItems[2].textContent).toBe(page3);
    expect(breadcrumbItems[3].textContent).toBe(page4);
  });
  describe('Breadcrumbs with small screen variant', () => {
    it('renders button for truncated children', () => {
      render(<TestComponentSmallScreen />);
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName('Vis brødsmule 2 til 3');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
    it('shows menu on button click', async () => {
      render(<TestComponentSmallScreen />);
      const menu = screen.queryByRole('menu');
      expect(menu).not.toBeInTheDocument();
      const button = screen.getByRole('button');

      await userEvent.click(button!);

      const menuOpened = screen.getByRole('menu');
      expect(menuOpened).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
    it('renders 2 lists', () => {
      render(<TestComponentSmallScreen />);

      const breadcrumbItems = screen.getAllByRole('list');
      expect(breadcrumbItems).toHaveLength(2);
    });
    it('renders 4 breadcrumbs in large screen list', () => {
      render(<TestComponentSmallScreen />);

      const list = screen.getAllByRole('list')[0];

      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items).toHaveLength(4);
    });
    it('renders 3 breadcrumbs in small screen list', () => {
      render(<TestComponentSmallScreen />);

      const list = screen.getAllByRole('list')[1];

      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items).toHaveLength(3);
    });
    it('renders 7 breadcrumbs', () => {
      render(<TestComponentSmallScreen />);

      const breadcrumbItems = screen.getAllByRole('listitem');
      expect(breadcrumbItems).toHaveLength(7);
      expect(breadcrumbItems[0].textContent).toBe(page1);
      expect(breadcrumbItems[1].textContent).toBe(page2);
      expect(breadcrumbItems[2].textContent).toBe(page3);
      expect(breadcrumbItems[3].textContent).toBe(page4);
      // Teller elementer fra begge listene
      expect(breadcrumbItems[4].textContent).toBe(page1);
      expect(breadcrumbItems[5].textContent).toBe(page2 + page3);
      expect(breadcrumbItems[6].textContent).toBe(page4);
    });
    it('has 2 truncated children with text and href', async () => {
      const h1 = '#1';
      const h2 = '#2';

      render(
        <Breadcrumbs smallScreenBreakpoint="xl">
          <Breadcrumb href="#">Side 1</Breadcrumb>
          <Breadcrumb href={h1}>{page2}</Breadcrumb>
          <Breadcrumb href={h2}>{page3}</Breadcrumb>
          <Breadcrumb>Side 4</Breadcrumb>
        </Breadcrumbs>,
      );
      const button = screen.getByRole('button');

      await userEvent.click(button!);
      const menuitems = screen.getAllByRole('menuitem');
      expect(menuitems).toHaveLength(2);
      expect(menuitems[0].textContent).toBe(page2);
      expect(menuitems[0]).toHaveAttribute('href', h1);
      expect(menuitems[1].textContent).toBe(page3);
      expect(menuitems[1]).toHaveAttribute('href', h2);
    });
  });
});
