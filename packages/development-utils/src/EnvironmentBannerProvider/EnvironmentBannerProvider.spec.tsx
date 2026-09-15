import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EnvironmentBannerProvider } from '.';

describe('<EnvironmentBannerProvider>', () => {
  it('displays provided environment', () => {
    const environment = 'LOKAL';
    render(
      <EnvironmentBannerProvider environment={environment}>
        test
      </EnvironmentBannerProvider>,
    );
    expect(screen.getByText(environment)).toBeInTheDocument();
  });
  it('does not display provided environment if PROD', () => {
    const environment = 'PROD';
    render(
      <EnvironmentBannerProvider environment={environment}>
        test
      </EnvironmentBannerProvider>,
    );
    expect(screen.queryByText(environment)).not.toBeInTheDocument();
  });
  it('displays children', () => {
    const children = 'test';
    render(
      <EnvironmentBannerProvider environment="LOKAL">
        {children}
      </EnvironmentBannerProvider>,
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
