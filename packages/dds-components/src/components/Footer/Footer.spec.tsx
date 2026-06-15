import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';
import { FooterList } from './FooterList';
import { FooterListHeader, FooterLogo, FooterSocialsList } from '../..';

describe('<Footer>', () => {
  it('renders footer', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  it('renders logo', () => {
    render(
      <Footer>
        <FooterLogo />
      </Footer>,
    );
    expect(
      screen.getByRole('img', { name: /norges domstoler/i }),
    ).toBeInTheDocument();
  });
  it('renders footer list', () => {
    render(
      <Footer>
        <FooterList />
      </Footer>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('renders footer header', () => {
    render(
      <Footer>
        <FooterListHeader />
      </Footer>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
  it('renders socials list', () => {
    render(
      <Footer>
        <FooterSocialsList />
      </Footer>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('renders children', () => {
    const text = 'text';
    render(<Footer>{text}</Footer>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
