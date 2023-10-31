import { render, screen } from '@testing-library/react';
import { Table } from '.';

describe('<Table />', () => {
  it('renders a table', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Body</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument;
  });
  it('renders text in cells', () => {
    const headerText = 'header';
    const bodyText = 'body';
    render(
      <Table>
        <Table.Head>
          <Table.Row type="head">
            <Table.Cell type="head">{headerText}</Table.Cell>
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
  it('renders a header cell', () => {
    const headerText = 'header';
    render(
      <Table>
        <Table.Head>
          <Table.Row type="head">
            <Table.Cell type="head">{headerText}</Table.Cell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const headerTextNode = screen.getByRole('columnheader');
    expect(headerTextNode.nodeName).toEqual('TH');
  });
  it('renders a body cell', () => {
    const bodyText = 'body';
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{bodyText}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const bodyTextNode = screen.getByRole('cell');
    expect(bodyTextNode.nodeName).toEqual('TD');
  });
});
