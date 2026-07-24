import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Table } from '.';

describe('<SortCell>', () => {
  it('renders columnheader and button', () => {
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.SortCell onClick={() => null}></Table.SortCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    expect(screen.getByRole('columnheader')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('calls onclick event', async () => {
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

  it('has aria-sort', () => {
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
