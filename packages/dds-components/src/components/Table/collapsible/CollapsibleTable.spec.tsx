import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { Button } from '../../Button';
import { Table } from '../normal';

import { CollapsibleTable } from '.';

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
      <CollapsibleTable.Row>
        <Table.Cell>{headers[0].content}</Table.Cell>
        <Table.Cell>{headers[1].content}</Table.Cell>
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
          <CollapsibleTable.Row>
            <Table.Cell>{headers[0].content}</Table.Cell>
            <Table.Cell>{headers[1].content}</Table.Cell>
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

describe('<CollapsibleTable>', () => {
  it('hides second column when collapsed', () => {
    render(table);

    expect(screen.getByText(headers[0].content.toString())).toBeInTheDocument();
    expect(screen.queryByText(header2Content)).not.toBeInTheDocument();
    expect(screen.getByText(bodyCellContent[0])).toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).not.toBeInTheDocument();

    expect(screen.queryByRole('term')).not.toBeInTheDocument();
    expect(screen.queryByRole('definition')).not.toBeInTheDocument();
  });

  it('renders <DescriptionList> with children while row expanded', async () => {
    render(table);
    const collapseButton = screen.getByRole('button');

    await userEvent.click(collapseButton);

    expect(screen.getByText(header2Content)).toBeInTheDocument();
    expect(screen.getByText(bodyCellContent[1])).toBeInTheDocument();

    expect(screen.getByRole('term')).toBeInTheDocument();
    expect(screen.getByRole('definition')).toBeInTheDocument();
  });

  it('table should switch between collapsed and not collapsed', async () => {
    render(<ControlledTable />);
    const controlButton = screen.getByText(controlButtonText);

    expect(screen.getByText(header2Content)).toBeInTheDocument();
    expect(screen.getByText(bodyCellContent[1])).toBeInTheDocument();
    expect(
      screen.queryByText(collapsingColumnHeaderText),
    ).not.toBeInTheDocument();

    await userEvent.click(controlButton);
    expect(screen.queryByText(header2Content)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyCellContent[1])).not.toBeInTheDocument();
    expect(screen.getByText(collapsingColumnHeaderText)).toBeInTheDocument();
  });

  it('renders ordinary table when headerValues is an empty array', () => {
    render(
      <CollapsibleTable headerValues={[]} isCollapsed>
        <Table.Head>
          <CollapsibleTable.Row>
            <Table.Cell>{headers[0].content}</Table.Cell>
            <Table.Cell>{headers[1].content}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>{bodyCellContent[0]}</Table.Cell>
            <Table.Cell>{bodyCellContent[1]}</Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>,
    );
    expect(screen.getByText(headers[0].content.toString())).toBeInTheDocument();
    expect(screen.getByText(header2Content)).toBeInTheDocument();
    expect(screen.getByText(bodyCellContent[1])).toBeInTheDocument();
    expect(screen.getByText(bodyCellContent[0])).toBeInTheDocument();
    expect(
      screen.queryByText(collapsingColumnHeaderText),
    ).not.toBeInTheDocument();
  });
});
