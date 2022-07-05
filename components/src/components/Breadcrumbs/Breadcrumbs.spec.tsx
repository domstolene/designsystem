import { render, screen } from '@testing-library/react';
import { Breadcrumbs, Breadcrumb } from '.';

describe('Breadcrumbs', () => {
  it('has aria-label', () => {
    render(
      <Breadcrumbs>
        <Breadcrumb>Side 1</Breadcrumb>
        <Breadcrumb>Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    );
    const breadcrumbs = screen.getByLabelText('brødsmulesti');
    expect(breadcrumbs).toHaveAttribute('aria-label', 'brødsmulesti');
  });
  it('should render three breadcrumbs', () => {
    render(
      <Breadcrumbs>
        <Breadcrumb>Side 1</Breadcrumb>
        <Breadcrumb>Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    );
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(3);
    expect(breadcrumbItems[0].textContent).toBe('Side 1');
    expect(breadcrumbItems[1].textContent).toBe('Side 2');
    expect(breadcrumbItems[2].textContent).toBe('Side 3');
  });
});
