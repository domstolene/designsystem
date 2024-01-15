import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Table } from '.';
import userEvent from '@testing-library/user-event';

describe('<SortCell />', () => {
  it('should run onclick event', async () => {
    const event = vi.fn();
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.SortCell onClick={event}>Sorter</Table.SortCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const sortButton = screen.getByRole('button', { name: /sorter/i });
    await userEvent.click(sortButton!);
    expect(event).toHaveBeenCalled();
  });

  it('should have aria-sort', () => {
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.SortCell
              isSorted={true}
              sortOrder="ascending"
              onClick={() => null}
            >
              Sorter
            </Table.SortCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const sortCell = screen.getByRole('columnheader');
    expect(sortCell!.getAttribute('aria-sort')).toBe('ascending');
  });
});
