import { screen, render, act, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { CollapsibleTable, Table } from '..';
import { Button } from '../../Button';

const header2Content = 'header2';

const headers = [
  {
    key: 'header1',
    content: 'header1',
  },
  {
    key: 'header2',
    content: <span>{header2Content}</span>,
  },
];

const bodyCellContent = ['content 1', 'content 2'];

const table = (
  <CollapsibleTable headerValues={headers} isCollapsed>
    <Table.Head>
      <CollapsibleTable.Row type="head">
        <Table.Cell type="head">{headers[0].content}</Table.Cell>
        <Table.Cell type="head">{headers[1].content}</Table.Cell>
      </CollapsibleTable.Row>
    </Table.Head>
    <Table.Body>
      <CollapsibleTable.Row>
        <Table.Cell>{bodyCellContent[0]}</Table.Cell>
        <Table.Cell>{bodyCellContent[1]}</Table.Cell>
      </CollapsibleTable.Row>
    </Table.Body>
  </CollapsibleTable>
);

const controlButtonText = 'control';

const ControlledTable = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Button onClick={() => setCollapse(!collapse)}>
        {controlButtonText}
      </Button>
      <CollapsibleTable headerValues={headers} isCollapsed={collapse}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            <Table.Cell type="head">{headers[0].content}</Table.Cell>
            <Table.Cell type="head">{headers[1].content}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>{bodyCellContent[0]}</Table.Cell>
            <Table.Cell>{bodyCellContent[1]}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>
    </>
  );
};

const collapsingColumnHeaderText = 'Utvid';

describe('<CollapsibleTable />', () => {
  it('should hide second column when collapsed', () => {
    render(table);

    expect(
      screen.queryByText(headers[0].content.toString())
    ).toBeInTheDocument();
    expect(screen.queryByText(header2Content)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[0])).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).not.toBeInTheDocument();

    expect(screen.queryByRole('term')).not.toBeInTheDocument();
    expect(screen.queryByRole('definition')).not.toBeInTheDocument();
  });

  it('should render <DescriptionList> with children while row expanded', () => {
    render(table);
    const collapseButton = screen.getByRole('button');

    act(() => {
      fireEvent.click(collapseButton);
    });

    expect(screen.queryByText(header2Content)).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).toBeInTheDocument();

    expect(screen.queryByRole('term')).toBeInTheDocument();
    expect(screen.queryByRole('definition')).toBeInTheDocument();
  });

  it('table should switch between collapsed and not collapsed', () => {
    render(<ControlledTable />);
    const controlButton = screen.getByText(controlButtonText);

    expect(screen.queryByText(header2Content)).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).toBeInTheDocument();
    expect(
      screen.queryByText(collapsingColumnHeaderText)
    ).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(controlButton);
    });
    expect(screen.queryByText(header2Content)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).not.toBeInTheDocument();
    expect(screen.queryByText(collapsingColumnHeaderText)).toBeInTheDocument();
  });

  it('should render ordinary table when headerValues is an empty array', () => {
    render(
      <CollapsibleTable headerValues={[]} isCollapsed>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            <Table.Cell type="head">{headers[0].content}</Table.Cell>
            <Table.Cell type="head">{headers[1].content}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>{bodyCellContent[0]}</Table.Cell>
            <Table.Cell>{bodyCellContent[1]}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>
    );
    expect(
      screen.queryByText(headers[0].content.toString())
    ).toBeInTheDocument();
    expect(screen.queryByText(header2Content)).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[0])).toBeInTheDocument();
    expect(
      screen.queryByText(collapsingColumnHeaderText)
    ).not.toBeInTheDocument();
  });
});
