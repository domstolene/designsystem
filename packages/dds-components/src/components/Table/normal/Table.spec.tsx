import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Table } from '.';

describe('<Table>', () => {
  it('renders a table', () => {
    render(<Table />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
  it('renders body as rowgroup', () => {
    render(
      <Table>
        <Table.Body />
      </Table>,
    );
    const rowGroup = screen.getByRole('rowgroup');
    expect(rowGroup).toBeInTheDocument();
  });
  it('renders head as rowgroup', () => {
    render(
      <Table>
        <Table.Head />
      </Table>,
    );
    const rowGroup = screen.getByRole('rowgroup');
    expect(rowGroup).toBeInTheDocument();
  });
  it('renders foot as rowgroup', () => {
    render(
      <Table>
        <Table.Foot />
      </Table>,
    );
    const rowGroup = screen.getByRole('rowgroup');
    expect(rowGroup).toBeInTheDocument();
  });
  it('renders a row', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row />
        </Table.Body>
      </Table>,
    );
    const row = screen.getByRole('row');
    expect(row).toBeInTheDocument();
  });
  it('renders a header cell', () => {
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell />
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const headerTextNode = screen.getByRole('columnheader');
    expect(headerTextNode.nodeName).toEqual('TH');
  });
  it('renders a body cell', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const headerTextNode = screen.getByRole('cell');
    expect(headerTextNode.nodeName).toEqual('TD');
  });
  it('renders text in cells', () => {
    const headerText = 'header';
    const bodyText = 'body';
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>{headerText}</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{bodyText}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const headerTextNode = screen.getByText(headerText);
    const bodyTextNode = screen.getByText(bodyText);
    expect(headerTextNode).toBeInTheDocument();
    expect(bodyTextNode).toBeInTheDocument();
  });
});
