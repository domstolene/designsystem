import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { portalRender } from '../../test.utils';
import { ThemeProvider } from '../ThemeProvider';

import { Logo, courtsOfNorwayLogoi18n } from '.';

describe('<Logo>', () => {
  it('renders img', () => {
    portalRender(<Logo logo={courtsOfNorwayLogoi18n} />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('renders logo with nb alt', () => {
    portalRender(<Logo logo={courtsOfNorwayLogoi18n} />);

    const img = screen.getByRole('img', { name: 'Norges domstoler' });
    expect(img).toBeInTheDocument();
  });

  it('renders light logo', () => {
    portalRender(<Logo logo={courtsOfNorwayLogoi18n} />);

    const img = screen.getByRole('img', { name: 'Norges domstoler' });
    expect(img).toHaveAttribute(
      'src',
      courtsOfNorwayLogoi18n.variants.nb.src.light,
    );
  });

  it('reads themeMode from ThemeProvider context', () => {
    render(
      <ThemeProvider theme="core-dark">
        <Logo logo={courtsOfNorwayLogoi18n} />
      </ThemeProvider>,
    );

    const img = screen.getByRole('img', { name: 'Norges domstoler' });
    expect(img).toHaveAttribute(
      'src',
      courtsOfNorwayLogoi18n.variants.nb.src.dark,
    );
  });

  it('allows overriding themeMode via prop', () => {
    portalRender(
      <ThemeProvider theme="core-dark">
        <Logo logo={courtsOfNorwayLogoi18n} themeMode="light" />
      </ThemeProvider>,
    );

    const img = screen.getByRole('img', { name: 'Norges domstoler' });
    expect(img).toHaveAttribute(
      'src',
      courtsOfNorwayLogoi18n.variants.nb.src.light,
    );
  });

  it('forwards HTMLImageElement props', () => {
    portalRender(
      <Logo
        logo={courtsOfNorwayLogoi18n}
        id="my-logo"
        width={200}
        loading="lazy"
      />,
    );

    const img = screen.getByRole('img', { name: 'Norges domstoler' });
    expect(img).toHaveAttribute('id', 'my-logo');
    expect(img).toHaveAttribute('width', '200');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
