import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CookieBanner } from '.';

describe('<CookieBanner>', () => {
  it('renders region', () => {
    render(<CookieBanner />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
  it('renders text', () => {
    const text = 'text';
    render(<CookieBanner> {text} </CookieBanner>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders heading', () => {
    const heading = 'heading';
    render(<CookieBanner headerText={heading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('has accesible name', () => {
    const hText = 'Informasjonskapsler';
    render(<CookieBanner headerText={hText} />);
    expect(screen.getByRole('region')).toHaveAccessibleName(hText);
  });
  it('renders header text', () => {
    const headerText = 'headerText';
    render(<CookieBanner headerText={headerText} />);
    expect(screen.getByText(headerText)).toBeInTheDocument();
  });
  it('renders button', () => {
    const button = 'button';
    render(<CookieBanner buttons={[{ children: button }]} />);
    expect(screen.getByText(button)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders checkbox', () => {
    const checkboxHeader = 'checkboxHeader';
    const checkbox = 'checkbox';
    render(
      <CookieBanner
        checkboxes={[{ headerText: checkbox, description: checkboxHeader }]}
      />,
    );
    expect(screen.getByText(checkbox)).toBeInTheDocument();
    expect(screen.getByText(checkboxHeader)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('renders expand button', () => {
    render(<CookieBanner collapsedBreakpoint="sm" />);
    const button = screen.getByRole('button', {
      name: 'Utvid samtykke for bruk av informasjonskapsler',
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
  it('removes expand button after click', async () => {
    render(<CookieBanner collapsedBreakpoint="sm" />);
    const button = screen.getByRole('button', {
      name: 'Utvid samtykke for bruk av informasjonskapsler',
    });
    await userEvent.click(button);
    expect(button).not.toBeInTheDocument();
  });
});
