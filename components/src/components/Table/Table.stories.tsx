import { useEffect, useState, ChangeEvent } from 'react';
import { Table, TableProps, SortOrder } from '.';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import {
  HeaderCellToSort,
  CellDataToSort,
  data,
  headerCells,
  mapCellContents,
} from './tableData';
import { StoryTemplate } from '../../storybook';
import { Icon } from '../Icon';
import { PersonIcon, TrashIcon } from '../../icons/tsx';

export default {
  title: 'design system/Table',
  component: Table,
  argTypes: {
    stickyHeader: {
      control: {
        type: 'boolean',
      },
    },
    withDividers: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const mappedHeaderCells = headerCells.map(headerCell => {
  return (
    <Table.Cell key={`head-${headerCell.dataName}`} type="head">
      {headerCell.name}
    </Table.Cell>
  );
});

export const Default = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - default">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const WithDividers = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - with dividers">
      <Table.Wrapper>
        <Table {...args} withDividers>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Focusable = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - focusable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row
                key={row.toString()}
                tabIndex={0}
                onClick={() => {
                  console.log('click');
                }}
              >
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Compact = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - compact">
      <Table.Wrapper>
        <Table {...args} density="compact">
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const StickyHeader = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - sticky header">
      <Table.Wrapper>
        <Table {...args} stickyHeader>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Hoverable = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - hoverable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <Table.Row key={row.toString()} hoverable>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const WithButtonAndIcons = (args: TableProps) => {
  const adminIcon = <Icon icon={PersonIcon} />;
  const deleteButton = (
    <Button
      label="Fjern tilgang"
      appearance="borderless"
      icon={TrashIcon}
      iconPosition="left"
    />
  );
  return (
    <StoryTemplate title="Table - with buttons and icons">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Navn</Table.Cell>
              <Table.Cell type="head">Navn</Table.Cell>
              <Table.Cell type="head">Rolle</Table.Cell>
              <Table.Cell type="head"></Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.map(item => (
              <Table.Row key={item.name}>
                <Table.Cell layout="text and icon">
                  {adminIcon} {item.name}
                </Table.Cell>
                <Table.Cell layout="text and icon">
                  {item.name} {adminIcon}
                </Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell layout="center">{deleteButton}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const WithSum = (args: TableProps) => {
  const sumData = [
    {
      id: '20-1234531TVI',
      amount: 472,
    },
    {
      id: '21-4317383TVI',
      amount: 4,
    },
    {
      id: '89-9204832TVI',
      amount: 56,
    },
    {
      id: '30-9204712TVI',
      amount: 23,
    },
  ];
  return (
    <StoryTemplate title="Table - sum">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Saksnummer</Table.Cell>
              <Table.Cell type="head" layout="right">
                Antall dokumenter
              </Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {sumData.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell layout="right">{item.amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Foot>
            <Table.Row mode="sum">
              <Table.Cell>Totalt</Table.Cell>
              <Table.Cell layout="right">
                {sumData.reduce((a, b) => a + (b.amount || 0), 0)}
              </Table.Cell>
            </Table.Row>
          </Table.Foot>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const WithCheckbox = (args: TableProps) => {
  type chechboxRow = {
    id: string;
  } & CellDataToSort;

  const rows: chechboxRow[] = [
    {
      id: 'ch-1',
      ...data[0],
    },
    {
      id: 'ch-2',
      ...data[1],
    },
    {
      id: 'ch-3',
      ...data[2],
    },
    {
      id: 'ch-4',
      ...data[3],
    },
  ];

  const [selectedRows, setselectedRows] = useState<chechboxRow[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>, row: chechboxRow) {
    const currentRows = [...selectedRows];
    if (e.target.checked) {
      currentRows.push(row);
    } else {
      const index = currentRows.findIndex(
        selectedRow => selectedRow.id === row.id
      );
      currentRows.splice(index, 1);
    }
    setselectedRows(currentRows);
  }

  // function handleClick(row: chechboxRow) {
  //   const currentRows = [...selectedRows];
  //   const index = currentRows.findIndex(
  //     selectedRow => selectedRow.id === row.id
  //   );
  //   if (index >= 0) {
  //     currentRows.splice(index, 1);
  //   } else {
  //     currentRows.push(row);
  //   }
  //   setselectedRows(currentRows);
  // }

  // function handleCheckboxClick(e: React.MouseEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   e.nativeEvent.stopImmediatePropagation();
  // }

  function changeAll(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setselectedRows([...rows]);
    } else {
      setselectedRows([]);
    }
  }
  return (
    <StoryTemplate title="Table - with checkboxes">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">
                <Checkbox
                  indeterminate={
                    selectedRows?.length > 0 &&
                    selectedRows?.length !== rows.length
                      ? true
                      : false
                  }
                  checked={selectedRows?.length === rows.length ? true : false}
                  onChange={e => changeAll(e)}
                  // onClick={(e) => handleCheckboxClick(e)}
                />
              </Table.Cell>
              {mappedHeaderCells}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {rows.map(row => {
              const isSelected = selectedRows.find(
                selectedRow => row.id === selectedRow.id
              )
                ? true
                : false;
              return (
                <Table.Row
                  key={`row-${row.id}`}
                  hoverable
                  selected={isSelected}
                  // onClick={() => handleClick(row)}
                >
                  <Table.Cell>
                    <Checkbox
                      id={row.id}
                      name={row.name}
                      checked={isSelected}
                      onChange={e => handleChange(e, row)}
                      // onClick={(e) => handleCheckboxClick(e)}
                    />
                  </Table.Cell>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.fnumber}</Table.Cell>
                  <Table.Cell>{row.employer}</Table.Cell>
                  <Table.Cell>{row.orgnumber}</Table.Cell>
                  <Table.Cell>{row.percentage}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Complex = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - complex">
      <Table.Wrapper>
        <Table {...args} stickyHeader>
          <colgroup>
            <col />
          </colgroup>
          <colgroup span={2}></colgroup>
          <colgroup span={2}></colgroup>
          <Table.Body>
            <Table.Row type="head">
              <Table.Cell rowSpan={2}></Table.Cell>
              <Table.Cell type="head" colSpan={2} scope="colgroup">
                Mars
              </Table.Cell>
              <Table.Cell type="head" colSpan={2} scope="colgroup">
                Venus
              </Table.Cell>
            </Table.Row>
            <Table.Row type="head">
              <Table.Cell type="head" scope="col">
                Produced
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Sold
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Produced
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Sold
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Teddy Bears
              </Table.Cell>
              <Table.Cell>50,000</Table.Cell>
              <Table.Cell>30,000</Table.Cell>
              <Table.Cell>100,000</Table.Cell>
              <Table.Cell>80,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Board Games
              </Table.Cell>
              <Table.Cell>10,000</Table.Cell>
              <Table.Cell>5,000</Table.Cell>
              <Table.Cell>12,000</Table.Cell>
              <Table.Cell>9,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Dolls
              </Table.Cell>
              <Table.Cell>50,000</Table.Cell>
              <Table.Cell>30,000</Table.Cell>
              <Table.Cell>100,000</Table.Cell>
              <Table.Cell>80,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Action Figures
              </Table.Cell>
              <Table.Cell>10,000</Table.Cell>
              <Table.Cell>5,000</Table.Cell>
              <Table.Cell>12,000</Table.Cell>
              <Table.Cell>9,000</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Sortable = (args: TableProps) => {
  const [headerSortCells, setHeaderSortCells] =
    useState<HeaderCellToSort[]>(headerCells);
  const [dataCellContents, setDataCellContents] = useState<string[][]>();

  useEffect(() => {
    if (headerSortCells) {
      const sortedData = handleSort(data);
      const mappedCellContents = mapCellContents(sortedData, headerSortCells);
      setDataCellContents(mappedCellContents);
    }
  }, [headerSortCells]);

  const onClickSort = (sortHeaderCell: HeaderCellToSort) => {
    const updateSortInfo = headerSortCells.map(
      (headerCell): HeaderCellToSort => {
        if (sortHeaderCell.dataName === headerCell.dataName) {
          return {
            ...sortHeaderCell,
            isSorted: true,
            sortOrder:
              sortHeaderCell.sortOrder === 'ascending'
                ? 'descending'
                : 'ascending',
          };
        }
        return {
          ...headerCell,
          isSorted: false,
          sortOrder: headerCell.sortOrder ? ('none' as SortOrder) : undefined,
        };
      }
    );
    setHeaderSortCells(updateSortInfo);
  };

  const handleSort = (data: CellDataToSort[]) =>
    data.sort((a, b) => {
      const sorted = headerSortCells.find(headerCell => headerCell.isSorted);
      if (!sorted) return 1;

      const { sortOrder, dataName } = sorted;
      const name = dataName as keyof CellDataToSort;

      if (sortOrder === 'ascending') return a[name] > b[name] ? 1 : -1;
      if (sortOrder === 'descending') return a[name] < b[name] ? 1 : -1;
      return 0;
    });

  return (
    <StoryTemplate title="Table - sortable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              {headerSortCells.map(headerCell => {
                if (!headerCell.sortOrder) {
                  return (
                    <Table.Cell type="head" key={`head-${headerCell.dataName}`}>
                      {headerCell.name}
                    </Table.Cell>
                  );
                }
                return (
                  <Table.SortCell
                    key={`head-${headerCell.dataName}`}
                    onClick={() => onClickSort(headerCell)}
                    isSorted={headerCell.isSorted}
                    sortOrder={
                      headerCell.sortOrder === 'none'
                        ? undefined
                        : headerCell.sortOrder
                    }
                  >
                    {headerCell.name}
                  </Table.SortCell>
                );
              })}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {dataCellContents?.map(row => (
              <Table.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const ColumnAndRowHeaders = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - column and row headers">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              {headerCells.map(headerCell => (
                <Table.Cell
                  key={`head-${headerCell.dataName}`}
                  type="head"
                  scope="col"
                >
                  {headerCell.name}
                </Table.Cell>
              ))}
            </Table.Row>
            {data.map(item => (
              <Table.Row key={item.name}>
                <Table.Cell type="head" scope="row">
                  Header
                </Table.Cell>
                <Table.Cell> {item.name} </Table.Cell>
                <Table.Cell> {item.fnumber} </Table.Cell>
                <Table.Cell> {item.employer} </Table.Cell>
                <Table.Cell> {item.orgnumber} </Table.Cell>
                <Table.Cell> {item.percentage} </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};
