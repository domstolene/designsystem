import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DescriptionList, DescriptionListDesc, DescriptionListTerm } from '.';

describe('<DescriptionList />', () => {
  it('should render description term', () => {
    const termText = 'term';
    render(
      <DescriptionList>
        <DescriptionListTerm>{termText}</DescriptionListTerm>
        <DescriptionListDesc>desc</DescriptionListDesc>
      </DescriptionList>,
    );
    expect(screen.getByText(termText)).toBeInTheDocument();
  });
  it('should render description', () => {
    const descText = 'desc';
    render(
      <DescriptionList>
        <DescriptionListTerm>Term</DescriptionListTerm>
        <DescriptionListDesc>{descText}</DescriptionListDesc>
      </DescriptionList>,
    );
    const desc = screen.getByRole('definition');
    expect(desc).toBeInTheDocument();
    expect(screen.getByText(descText)).toBeInTheDocument();
  });
});
