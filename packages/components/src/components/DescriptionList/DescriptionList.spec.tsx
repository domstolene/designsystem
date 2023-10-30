import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DescriptionList, DescriptionListTerm, DescriptionListDesc } from '.';

describe('<DescriptionList />', () => {
  it('should render description term', () => {
    const termText = 'term';
    render(
      <DescriptionList>
        <DescriptionListTerm>{termText}</DescriptionListTerm>
        <DescriptionListDesc>desc</DescriptionListDesc>
      </DescriptionList>,
    );
    expect(screen.queryByText(termText)).toBeInTheDocument();
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
    expect(screen.queryByText(descText)).toBeInTheDocument();
  });
});
