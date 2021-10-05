import React, { useEffect, useState } from 'react';
import {
  Table as DDSTable,
  TableProps,
  Row,
  Cell,
  SortCell,
  SortOrder,
  Body,
  Head,
  Foot
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
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';

export default {
  title: 'design system/Table',
  component: DDSTable,
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
  return storyHTMLTemplate(
    'Table - default',
    <DDSTable {...args}>
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
    </DDSTable>
  );
};

export const Compact = (args: TableProps) => {
  return storyHTMLTemplate(
    'Table - compact',
    <DDSTable {...args} density="compact">
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
    </DDSTable>
  );
};

export const StickyHeader = (args: TableProps) => {
  return storyHTMLTemplate(
    'Table - sticky header',
    <DDSTable {...args} stickyHeader>
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
    </DDSTable>
  );
};

export const Hoverable = (args: TableProps) => {
  return storyHTMLTemplate(
    'Table - hoverable',
    <DDSTable {...args}>
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
    </DDSTable>
  );
};

export const WithButtonAndIcons = (args: TableProps) => {
  const adminIcon = <SupervisorAccountOutlinedIcon />;
  const deleteButton = (
    <Button
      label="Fjern tilgang"
      appearance="borderless"
      Icon={DeleteOutlinedIcon}
      iconPosition="left"
    />
  );

  return storyHTMLTemplate(
    'Table - buttons and icons',
    <DDSTable {...args}>
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
    </DDSTable>
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
  return storyHTMLTemplate(
    'Table - sum',
    <DDSTable {...args}>
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
    </DDSTable>
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    row: chechboxRow
  ) {
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

  function handleClick(row: chechboxRow) {
    const currentRows = [...selectedRows];
    const index = currentRows.findIndex(
      selectedRow => selectedRow.id === row.id
    );
    console.log('index', index);
    if (index >= 0) {
      currentRows.splice(index, 1);
    } else {
      currentRows.push(row);
    }
    setselectedRows(currentRows);
  }

  function handleCheckboxClick(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  function changeAll(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setselectedRows([...rows]);
    } else {
      setselectedRows([]);
    }
  }

  return storyHTMLTemplate(
    'Table - with checkboxes',
    <DDSTable {...args}>
      <Head>
        <Row type="head">
          <Cell type="head">
            <Checkbox
              indeterminate={
                selectedRows?.length > 0 && selectedRows?.length !== rows.length
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
    </DDSTable>
  );
};

export const Complex = (args: TableProps) => {
  return storyHTMLTemplate(
    'Table - complex',
    <DDSTable {...args} stickyHeader>
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
    </DDSTable>
  );
};

export const Sortable = (args: TableProps) => {
  const [headerSortCells, setHeaderSortCells] = useState<HeaderCellToSort[]>(
    headerCells
  );
  const [dataCellContents, setDataCellContents] = useState<string[][]>();

  useEffect(() => {
    if (headerSortCells) {
      const sortedData = handleSort(data);
      const mappedCellContents = mapCellContents(sortedData, headerSortCells);
      setDataCellContents(mappedCellContents);
    }
  }, [headerSortCells]);

  const onClickSort = (sortHeaderCell: HeaderCellToSort) => {
    const updateSortInfo = headerSortCells.map(headerCell => {
      if (sortHeaderCell.dataName === headerCell.dataName) {
        let sortOrder: SortOrder = 'none';
        switch (sortHeaderCell.sortOrder) {
          case 'descending':
            sortOrder = 'ascending';
            break;
          case 'ascending':
            sortOrder = 'descending';
            break;
          default:
            sortOrder = 'ascending';
            break;
        }
        return {
          ...sortHeaderCell,
          isSorted: true,
          sortOrder
        };
      }
      return {
        ...headerCell,
        isSorted: false,
        sortOrder: headerCell.sortOrder ? ('none' as SortOrder) : undefined
      };
    });
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

  return storyHTMLTemplate(
    'Table - sortable',
    <DDSTable {...args}>
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
                sortOrder={headerCell.sortOrder}
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
    </DDSTable>
  );
};

export const ColumnAndRowHeaders = (args: TableProps) => {
  return storyHTMLTemplate(
    'Table - column and row headers',
    <DDSTable {...args}>
      <Body>
        <Row>
          <Cell></Cell>
          {headerCells.map(headerCell => (
            <Cell key={`head-${headerCell.dataName}`} type="head" scope="col">
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
    </DDSTable>
  );
};
