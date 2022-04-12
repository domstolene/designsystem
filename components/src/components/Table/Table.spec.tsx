import { render, screen } from '@testing-library/react';
import { Table, Cell, Row, Body, Head } from '.';

describe('<Table />', () => {
  it('renders a table', () => {
    render(
      <Table>
        <Body>
          <Row>
            <Cell>Body</Cell>
          </Row>
        </Body>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument;
  });
  it('renders text in cells', () => {
    const headerText = 'header';
    const bodyText = 'body';
    render(
      <Table>
        <Head>
          <Row type="head">
            <Cell type="head">{headerText}</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>{bodyText}</Cell>
          </Row>
        </Body>
      </Table>
    );
    const headerTextNode = screen.getByText(headerText);
    const bodyTextNode = screen.getByText(bodyText);
    expect(headerTextNode).toBeDefined();
    expect(bodyTextNode).toBeDefined();
  });
  it('renders a header cell', () => {
    const headerText = 'header';
    render(
      <Table>
        <Head>
          <Row type="head">
            <Cell type="head">{headerText}</Cell>
          </Row>
        </Head>
      </Table>
    );
    const headerTextNode = screen.getByRole('columnheader');
    expect(headerTextNode.nodeName).toEqual('TH');
  });
  it('renders a body cell', () => {
    const bodyText = 'body';
    render(
      <Table>
        <Body>
          <Row>
            <Cell>{bodyText}</Cell>
          </Row>
        </Body>
      </Table>
    );
    const bodyTextNode = screen.getByRole('cell');
    expect(bodyTextNode.nodeName).toEqual('TD');
  });
});
