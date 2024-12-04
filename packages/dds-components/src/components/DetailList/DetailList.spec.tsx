import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DetailList, DetailListDesc, DetailListRow, DetailListTerm } from '.';

describe('<DetailList>', () => {
  it('should render description term', () => {
    const termText = 'term';
    render(
      <DetailList>
        <DetailListRow>
          <DetailListTerm>{termText}</DetailListTerm>
          <DetailListDesc />
        </DetailListRow>
      </DetailList>,
    );
    const term = screen.getByRole('term');
    expect(term).toBeInTheDocument();
    expect(screen.getByText(termText)).toBeInTheDocument();
  });
  it('should render description', () => {
    const descText = 'desc';
    render(
      <DetailList>
        <DetailListRow>
          <DetailListTerm />
          <DetailListDesc>{descText}</DetailListDesc>
        </DetailListRow>
      </DetailList>,
    );
    const desc = screen.getByRole('definition');
    expect(desc).toBeInTheDocument();
    expect(screen.getByText(descText)).toBeInTheDocument();
  });
});
