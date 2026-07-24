import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Table, TableWrapper } from '.';

const definingContent = 'header1';
const collapsingHeaderContent = 'header2';
const collapsingKey = 'col2';

const definingCellContent = 'content 1';
const collapsingCellContent = 'content 2';
const collapsingColumnHeaderText = 'Utvid';

const cTable = (
  <Table collapseBelow="sm">
    <Table.Head>
      <Table.Row>
        <Table.Cell>{definingContent}</Table.Cell>
        <Table.Cell collapseKey={collapsingKey}>
          <span>{collapsingHeaderContent}</span>
        </Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>{definingCellContent}</Table.Cell>
        <Table.Cell collapseKey={collapsingKey}>
          {collapsingCellContent}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

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

  describe('<TableWrapper>', () => {
    it('renders a div', () => {
      render(<TableWrapper data-testid="wrapper" />);
      const wrapper = screen.getByTestId('wrapper');
      expect(wrapper.nodeName).toEqual('DIV');
    });

    it('passes className to the div', () => {
      render(<TableWrapper data-testid="wrapper" className="custom-class" />);
      const wrapper = screen.getByTestId('wrapper');
      expect(wrapper).toHaveClass('custom-class');
    });

    it('renders children', () => {
      const content = 'content';
      render(<TableWrapper>{content}</TableWrapper>);
      expect(screen.getByText('content')).toBeInTheDocument();
    });

    it('does not apply scrollable class when not overflowing', () => {
      render(<TableWrapper data-testid="wrapper" />);
      const wrapper = screen.getByTestId('wrapper');
      expect(wrapper.className).not.toMatch(/scrollable/);
    });

    it('applies scrollable class when content overflows', () => {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get: () => 100,
      });
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        get: () => 200,
      });

      render(<TableWrapper data-testid="wrapper" />);
      const wrapper = screen.getByTestId('wrapper');

      expect(wrapper.className).toMatch(/scrollable/);

      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get: () => 0,
      });
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        get: () => 0,
      });
    });
  });
  describe('collapsible <Table>', () => {
    it('renders both full and collapsed rows in the DOM', () => {
      render(cTable);
      expect(screen.getAllByText(definingContent).length).toBe(2);
      expect(screen.getAllByText(collapsingHeaderContent).length).toBe(1);
      expect(screen.getAllByText(definingCellContent).length).toBe(2);
      expect(screen.getAllByText(collapsingCellContent).length).toBe(1);
      expect(screen.getByText(collapsingColumnHeaderText)).toBeInTheDocument();
    });

    it('collapsed detail row not rendered before chevron is clicked', () => {
      render(cTable);

      expect(screen.queryByRole('term')).not.toBeInTheDocument();
      expect(screen.queryByRole('definition')).not.toBeInTheDocument();
    });

    it('renders <DescriptionList> with label and content when row is expanded', async () => {
      render(cTable);

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByRole('term')).toBeInTheDocument();
      expect(screen.getByRole('definition')).toBeInTheDocument();
    });

    it('collapseKey label from head cell is used as description list term', async () => {
      render(cTable);

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByRole('term').textContent).toBe(
        collapsingHeaderContent,
      );
      expect(screen.getByRole('definition').textContent?.trim()).toBe(
        collapsingCellContent,
      );
    });

    it('renders ordinary table rows when no cells have collapse prop', () => {
      render(
        <Table collapseBelow="sm">
          <Table.Head>
            <Table.Row>
              <Table.Cell>{definingContent}</Table.Cell>
              <Table.Cell>{collapsingHeaderContent}</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{definingCellContent}</Table.Cell>
              <Table.Cell>{collapsingCellContent}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

      expect(screen.getAllByText(definingContent).length).toBe(1);
      expect(screen.getAllByText(collapsingHeaderContent).length).toBe(1);
      expect(screen.getAllByText(definingCellContent).length).toBe(1);
      expect(screen.getAllByText(collapsingCellContent).length).toBe(1);
      expect(
        screen.queryByText(collapsingColumnHeaderText),
      ).not.toBeInTheDocument();
    });
  });
});
