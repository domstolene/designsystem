import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CookieBanner } from '.';

describe('<CookieBanner>', () => {
  it('Should render region', () => {
    render(<CookieBanner />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
  it('Should have accesible name', () => {
    render(<CookieBanner />);
    expect(screen.getByRole('region')).toHaveAccessibleName();
  });
  it('Should render text', () => {
    const text = 'text';
    render(<CookieBanner> {text} </CookieBanner>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('Should render heading', () => {
    const heading = 'heading';
    render(<CookieBanner headerText={heading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('Should render description', () => {
    const description = 'description';
    render(<CookieBanner headerText={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
  it('Should render button', () => {
    const button = 'button';
    render(<CookieBanner buttons={[{ children: button }]} />);
    expect(screen.getByText(button)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Should render checkbox', () => {
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
});
