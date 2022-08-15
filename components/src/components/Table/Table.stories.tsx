import { useEffect, useState, ChangeEvent } from 'react';
import {
  Table,
  TableProps,
  Row,
  Cell,
  SortCell,
  SortOrder,
  Body,
  Head,
  Foot,
  TableWrapper
} from '.';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import {
  HeaderCellToSort,
  CellDataToSort,
  data,
  headerCells,
  mapCellContents
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
        type: 'boolean'
      }
    }
  }
};

const mappedHeaderCells = headerCells.map(headerCell => {
  return (
    <Cell key={`head-${headerCell.dataName}`} type="head">
      {headerCell.name}
    </Cell>
  );
});

export const Default = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - default">
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">{mappedHeaderCells}</Row>
          </Head>
          <Body>
            {mapCellContents(data, headerCells).map(row => (
              <Row key={row.toString()}>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const Focusable = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - focusable">
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">{mappedHeaderCells}</Row>
          </Head>
          <Body>
            {mapCellContents(data, headerCells).map(row => (
              <Row
                key={row.toString()}
                tabIndex={0}
                onClick={() => {
                  console.log('click');
                }}
              >
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const Compact = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - compact">
      <TableWrapper>
        <Table {...args} density="compact">
          <Head>
            <Row type="head">{mappedHeaderCells}</Row>
          </Head>
          <Body>
            {mapCellContents(data, headerCells).map(row => (
              <Row key={row.toString()}>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const StickyHeader = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - sticky header">
      <TableWrapper>
        <Table {...args} stickyHeader>
          <Head>
            <Row type="head">{mappedHeaderCells}</Row>
          </Head>
          <Body>
            {mapCellContents(data, headerCells).map(row => (
              <Row key={row.toString()}>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
            {mapCellContents(data, headerCells).map(row => (
              <Row key={row.toString()}>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const Hoverable = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - hoverable">
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">{mappedHeaderCells}</Row>
          </Head>
          <Body>
            {mapCellContents(data, headerCells).map(row => (
              <Row key={row.toString()} hoverable>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
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
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">
              <Cell type="head">Navn</Cell>
              <Cell type="head">Navn</Cell>
              <Cell type="head">Rolle</Cell>
              <Cell type="head"></Cell>
            </Row>
          </Head>
          <Body>
            {data.map(item => (
              <Row key={item.name}>
                <Cell layout="text and icon">
                  {adminIcon} {item.name}
                </Cell>
                <Cell layout="text and icon">
                  <span>{item.name}</span> {adminIcon}
                </Cell>
                <Cell>Admin</Cell>
                <Cell layout="center">{deleteButton}</Cell>
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const WithSum = (args: TableProps) => {
  const sumData = [
    {
      id: '20-1234531TVI',
      amount: 472
    },
    {
      id: '21-4317383TVI',
      amount: 4
    },
    {
      id: '89-9204832TVI',
      amount: 56
    },
    {
      id: '30-9204712TVI',
      amount: 23
    }
  ];
  return (
    <StoryTemplate title="Table - sum">
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">
              <Cell type="head">Saksnummer</Cell>
              <Cell type="head" layout="right">
                Antall dokumenter
              </Cell>
            </Row>
          </Head>
          <Body>
            {sumData.map(item => (
              <Row key={item.id}>
                <Cell>{item.id}</Cell>
                <Cell layout="right">{item.amount}</Cell>
              </Row>
            ))}
          </Body>
          <Foot>
            <Row mode="sum">
              <Cell>Totalt</Cell>
              <Cell layout="right">
                {sumData.reduce((a, b) => a + (b.amount || 0), 0)}
              </Cell>
            </Row>
          </Foot>
        </Table>
      </TableWrapper>
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
      ...data[0]
    },
    {
      id: 'ch-2',
      ...data[1]
    },
    {
      id: 'ch-3',
      ...data[2]
    },
    {
      id: 'ch-4',
      ...data[3]
    }
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
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">
              <Cell type="head">
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
              </Cell>
              {mappedHeaderCells}
            </Row>
          </Head>
          <Body>
            {rows.map(row => {
              const isSelected = selectedRows.find(
                selectedRow => row.id === selectedRow.id
              )
                ? true
                : false;
              return (
                <Row
                  key={`row-${row.id}`}
                  hoverable
                  selected={isSelected}
                  // onClick={() => handleClick(row)}
                >
                  <Cell>
                    <Checkbox
                      id={row.id}
                      name={row.name}
                      checked={isSelected}
                      onChange={e => handleChange(e, row)}
                      // onClick={(e) => handleCheckboxClick(e)}
                    />
                  </Cell>
                  <Cell>{row.name}</Cell>
                  <Cell>{row.fnumber}</Cell>
                  <Cell>{row.employer}</Cell>
                  <Cell>{row.orgnumber}</Cell>
                  <Cell>{row.percentage}</Cell>
                </Row>
              );
            })}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const Complex = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - complex">
      <TableWrapper>
        <Table {...args} stickyHeader>
          <colgroup>
            <col />
          </colgroup>
          <colgroup span={2}></colgroup>
          <colgroup span={2}></colgroup>
          <Body>
            <Row type="head">
              <Cell rowSpan={2}></Cell>
              <Cell type="head" colSpan={2} scope="colgroup">
                Mars
              </Cell>
              <Cell type="head" colSpan={2} scope="colgroup">
                Venus
              </Cell>
            </Row>
            <Row type="head">
              <Cell type="head" scope="col">
                Produced
              </Cell>
              <Cell type="head" scope="col">
                Sold
              </Cell>
              <Cell type="head" scope="col">
                Produced
              </Cell>
              <Cell type="head" scope="col">
                Sold
              </Cell>
            </Row>
            <Row>
              <Cell type="head" scope="row">
                Teddy Bears
              </Cell>
              <Cell>50,000</Cell>
              <Cell>30,000</Cell>
              <Cell>100,000</Cell>
              <Cell>80,000</Cell>
            </Row>
            <Row>
              <Cell type="head" scope="row">
                Board Games
              </Cell>
              <Cell>10,000</Cell>
              <Cell>5,000</Cell>
              <Cell>12,000</Cell>
              <Cell>9,000</Cell>
            </Row>
            <Row>
              <Cell type="head" scope="row">
                Dolls
              </Cell>
              <Cell>50,000</Cell>
              <Cell>30,000</Cell>
              <Cell>100,000</Cell>
              <Cell>80,000</Cell>
            </Row>
            <Row>
              <Cell type="head" scope="row">
                Action Figures
              </Cell>
              <Cell>10,000</Cell>
              <Cell>5,000</Cell>
              <Cell>12,000</Cell>
              <Cell>9,000</Cell>
            </Row>
          </Body>
        </Table>
      </TableWrapper>
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
                : 'ascending'
          };
        }
        return {
          ...headerCell,
          isSorted: false,
          sortOrder: headerCell.sortOrder ? ('none' as SortOrder) : undefined
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
      <TableWrapper>
        <Table {...args}>
          <Head>
            <Row type="head">
              {headerSortCells.map(headerCell => {
                if (!headerCell.sortOrder) {
                  return (
                    <Cell type="head" key={`head-${headerCell.dataName}`}>
                      {headerCell.name}
                    </Cell>
                  );
                }
                return (
                  <SortCell
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
                  </SortCell>
                );
              })}
            </Row>
          </Head>
          <Body>
            {dataCellContents?.map(row => (
              <Row key={row.toString()}>
                {row.map(cellContent => (
                  <Cell key={`body-${cellContent}`}>{cellContent}</Cell>
                ))}
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};

export const ColumnAndRowHeaders = (args: TableProps) => {
  return (
    <StoryTemplate title="Table - column and row headers">
      <TableWrapper>
        <Table {...args}>
          <Body>
            <Row>
              <Cell></Cell>
              {headerCells.map(headerCell => (
                <Cell
                  key={`head-${headerCell.dataName}`}
                  type="head"
                  scope="col"
                >
                  {headerCell.name}
                </Cell>
              ))}
            </Row>
            {data.map(item => (
              <Row key={item.name}>
                <Cell type="head" scope="row">
                  Header
                </Cell>
                <Cell> {item.name} </Cell>
                <Cell> {item.fnumber} </Cell>
                <Cell> {item.employer} </Cell>
                <Cell> {item.orgnumber} </Cell>
                <Cell> {item.percentage} </Cell>
              </Row>
            ))}
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};
