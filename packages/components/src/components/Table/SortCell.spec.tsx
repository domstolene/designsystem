import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Table } from '.';

describe('<SortCell />', () => {
  it('should run onclick event', () => {
    const event = vi.fn();
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.SortCell onClick={event}></Table.SortCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const sortButton = container.querySelector('th')?.querySelector('button');
    fireEvent.click(sortButton!);
    expect(event).toHaveBeenCalled();
  });

  it('should have aria-sort', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.SortCell
              isSorted={true}
              sortOrder="ascending"
              onClick={() => {}}
            ></Table.SortCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const sortCell = container.querySelector('th');
    expect(sortCell!.getAttribute('aria-sort')).toBe('ascending');
  });
});
