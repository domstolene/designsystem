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
    const terms = screen.getAllByRole('term');
    expect(terms).toHaveLength(2);
    expect(screen.getAllByText(termText)).toHaveLength(2);
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
    const descs = screen.getAllByRole('definition');
    expect(descs).toHaveLength(2);
    expect(screen.getAllByText(descText)).toHaveLength(2);
  });
});
