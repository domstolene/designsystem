import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Table } from '../normal';

import { CollapsibleTable } from '.';

const definingContent = 'header1';
const collapsingHeaderContent = 'header2';
const collapsingKey = 'col2';

const definingCellContent = 'content 1';
const collapsingCellContent = 'content 2';

const table = (
  <CollapsibleTable collapseBelow="sm">
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
  </CollapsibleTable>
);

const collapsingColumnHeaderText = 'Utvid';

describe('<CollapsibleTable>', () => {
  it('renders both full and collapsed rows in the DOM', () => {
    render(table);
    expect(screen.getAllByText(definingContent).length).toBe(2);
    expect(screen.getAllByText(collapsingHeaderContent).length).toBe(1);
    expect(screen.getAllByText(definingCellContent).length).toBe(2);
    expect(screen.getAllByText(collapsingCellContent).length).toBe(1);
    expect(screen.getByText(collapsingColumnHeaderText)).toBeInTheDocument();
  });

  it('collapsed detail row not rendered before chevron is clicked', () => {
    render(table);

    expect(screen.queryByRole('term')).not.toBeInTheDocument();
    expect(screen.queryByRole('definition')).not.toBeInTheDocument();
  });

  it('renders <DescriptionList> with label and content when row is expanded', async () => {
    render(table);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('term')).toBeInTheDocument();
    expect(screen.getByRole('definition')).toBeInTheDocument();
  });

  it('collapseKey label from head cell is used as description list term', async () => {
    render(table);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('term').textContent).toBe(collapsingHeaderContent);
    expect(screen.getByRole('definition').textContent?.trim()).toBe(
      collapsingCellContent,
    );
  });

  it('renders ordinary table rows when no cells have collapse prop', () => {
    render(
      <CollapsibleTable collapseBelow="sm">
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
      </CollapsibleTable>,
    );

    expect(screen.getByText(definingContent)).toBeInTheDocument();
    expect(screen.getByText(collapsingHeaderContent)).toBeInTheDocument();
    expect(screen.getByText(definingCellContent)).toBeInTheDocument();
    expect(screen.getByText(collapsingCellContent)).toBeInTheDocument();
    expect(
      screen.queryByText(collapsingColumnHeaderText),
    ).not.toBeInTheDocument();
  });
});
