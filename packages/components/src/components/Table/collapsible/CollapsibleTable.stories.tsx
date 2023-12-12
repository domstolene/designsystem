import { Table, CollapsibleTableProps } from '..';
import { Button } from '../../Button';
import { data, headerCells, mapCellContents } from '../tableData';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { CollapsibleTable } from '..';
import { VisuallyHidden } from '../../VisuallyHidden';
import { useScreenSize, ScreenSize } from '../../../hooks';
import { Icon } from '../../Icon';
import {
  PersonIcon,
  TrashIcon,
  StarIcon,
  FileIcon,
  JordskifterettIcon,
  AttachmentIcon,
} from '../../Icon/icons';
import { Link } from '../../Typography';

export default {
  title: 'dds-components/Table/CollapsibleTable BETA',
  component: CollapsibleTable,
  argTypes: {
    isCollapsed: {
      control: { type: 'boolean' },
    },
    stickyHeader: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      exclude: ['headerValues', 'definingColumnIndex'],
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

const headerValues = headerCells.map(cell => {
  return {
    content: cell.name,
    key: cell.name,
  };
});

export const SingleDefiningColumn = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate
      title="CollapsibleTable - single defining column"
      display="block"
    >
      <CollapsibleTable
        {...args}
        headerValues={headerValues}
        isCollapsed={args.isCollapsed !== false && true}
      >
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => (
            <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => (
                <Table.Cell key={`body-${cellContent}`}>
                  {cellContent}
                </Table.Cell>
              ))}
            </CollapsibleTable.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};

export const MultipleDefiningColumns = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate
      title="CollapsibleTable - multiple defining columns"
      display="block"
    >
      <Table.Wrapper style={{ width: '100%' }}>
        <CollapsibleTable
          {...args}
          style={{ width: '100%' }}
          isCollapsed={args.isCollapsed !== false && true}
          headerValues={headerValues}
          definingColumnIndex={[0, 2]}
        >
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </CollapsibleTable.Row>
            ))}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const PrioritizedDefiningColumns = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate
      title="CollapsibleTable - prioritized defining columns"
      display="block"
    >
      <Table.Wrapper style={{ width: '100%' }}>
        <CollapsibleTable
          {...args}
          style={{ width: '100%' }}
          isCollapsed={args.isCollapsed !== false && true}
          headerValues={headerValues}
          definingColumnIndex={[2, 0]}
        >
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </CollapsibleTable.Row>
            ))}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const WithDividers = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate title="CollapsibleTable - with dividers" display="block">
      <CollapsibleTable
        {...args}
        withDividers
        headerValues={headerValues}
        isCollapsed={args.isCollapsed !== false && true}
      >
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => (
            <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => (
                <Table.Cell key={`body-${cellContent}`}>
                  {cellContent}
                </Table.Cell>
              ))}
            </CollapsibleTable.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};

export const Compact = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate title="CollapsibleTable - compact" display="block">
      <CollapsibleTable
        {...args}
        density="compact"
        headerValues={headerValues}
        isCollapsed={args.isCollapsed !== false && true}
      >
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => (
            <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => (
                <Table.Cell key={`body-${cellContent}`}>
                  {cellContent}
                </Table.Cell>
              ))}
            </CollapsibleTable.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};

export const StickyHeader = (args: CollapsibleTableProps) => {
  return (
    <StoryTemplate title="CollapsibleTable - sticky header" display="block">
      <CollapsibleTable
        {...args}
        stickyHeader
        isCollapsed={args.isCollapsed !== false && true}
        headerValues={headerValues}
        definingColumnIndex={[0, 2]}
      >
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => (
            <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => (
                <Table.Cell key={`body-${cellContent}`}>
                  {cellContent}
                </Table.Cell>
              ))}
            </CollapsibleTable.Row>
          ))}
          {mapCellContents(data, headerCells).map(row => (
            <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => (
                <Table.Cell key={`body-${cellContent}`}>
                  {cellContent}
                </Table.Cell>
              ))}
            </CollapsibleTable.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};

export const WithButtonAndIcons = (args: CollapsibleTableProps) => {
  const adminIcon = <Icon icon={PersonIcon} />;

  const headerValues = [
    { content: 'Navn til venstre', key: 'Navn til venstre' },
    { content: 'Navn til høyre', key: 'Navn til høyre' },
    { content: 'Rolle', key: 'Rolle' },
    { content: 'Aksjoner', key: 'Aksjoner' },
  ];
  const deleteButton = (
    <Button appearance="borderless" icon={TrashIcon} iconPosition="left">
      Fjern tilgang
    </Button>
  );
  return (
    <StoryTemplate title="Table - with buttons and icons" display="block">
      <CollapsibleTable {...args} headerValues={headerValues} isCollapsed>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {headerValues.map(headerCell => {
              return (
                <Table.Cell key={`head-${headerCell.key}`} type="head">
                  {headerCell.content}
                </Table.Cell>
              );
            })}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <CollapsibleTable.Row key={item.name}>
              <Table.Cell layout="text and icon">
                {adminIcon} {item.name}
              </Table.Cell>
              <Table.Cell layout="text and icon">
                {item.name} {adminIcon}
              </Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell layout="center">{deleteButton}</Table.Cell>
            </CollapsibleTable.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};

export const Responsive = (args: CollapsibleTableProps) => {
  const screenSize = useScreenSize();
  return (
    <StoryTemplate title="CollapsibleTable - responsive" display="block">
      <Table.Wrapper style={{ width: '100%' }}>
        <CollapsibleTable
          {...args}
          isCollapsed={screenSize <= ScreenSize.Small}
          headerValues={headerValues}
        >
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </CollapsibleTable.Row>
            ))}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const ResposiveMultipleBreakpoints = (args: CollapsibleTableProps) => {
  const screenSize = useScreenSize();
  return (
    <StoryTemplate
      title="CollapsibleTable - responsive multiple breakpoints"
      display="block"
    >
      <Table.Wrapper style={{ width: '100%' }}>
        <CollapsibleTable
          {...args}
          style={{ width: '100%' }}
          isCollapsed={screenSize <= ScreenSize.Small}
          headerValues={headerValues}
          definingColumnIndex={screenSize === ScreenSize.XSmall ? [2] : [2, 0]}
        >
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => (
              <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => (
                  <Table.Cell key={`body-${cellContent}`}>
                    {cellContent}
                  </Table.Cell>
                ))}
              </CollapsibleTable.Row>
            ))}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>
  );
};

export const Example = () => {
  const headers = [
    {
      key: 'fav',
      content: <VisuallyHidden as="span">Velg som favoritt</VisuallyHidden>,
    },
    {
      key: 'Dokumenttype',
      content: <VisuallyHidden as="span">Dokumenttype</VisuallyHidden>,
    },
    { key: 'Nummer', content: 'Nr.' },
    {
      key: 'Lest status',
      content: <VisuallyHidden as="span">Lest status</VisuallyHidden>,
    },
    { key: 'Dokumentnavn', content: 'Dokumentnavn' },
    { key: 'Avsender', content: 'Avsender' },
    { key: 'Mottakere', content: 'Mottakere' },
    { key: 'Sendt', content: 'Sendt' },
  ];

  const screenSize = useScreenSize();
  const isSmall = screenSize <= ScreenSize.Small;
  const isXSmall = screenSize <= ScreenSize.XSmall;
  const iconSize = isXSmall ? 'small' : 'medium';
  return (
    <StoryTemplate title="CollapsibleTable - Example" display="block">
      <CollapsibleTable
        isCollapsed={isSmall}
        headerValues={headers}
        definingColumnIndex={[0, 1, 2, 3, 4]}
      >
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {headers.map(i => (
              <Table.Cell type="head"> {i.content} </Table.Cell>
            ))}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>
              <Icon icon={StarIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={FileIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>
              <Icon icon={JordskifterettIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Link external href="/">
                Krav om sak fra Marie Luneby, Knut-Håkon Dagsvik, Sonja Luneby
                og Petter Olaf Jensen.pdf
              </Link>
            </Table.Cell>
            <Table.Cell> Maake Karl </Table.Cell>
            <Table.Cell> Akershus og Oslo jordskifterett </Table.Cell>
            <Table.Cell> 17.12.2018 </Table.Cell>
          </CollapsibleTable.Row>
          <CollapsibleTable.Row>
            <Table.Cell>
              <Icon icon={StarIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={AttachmentIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1-2</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <Link external href="/">
                Merknader fra Knut-Håkon Dagsvik.pdf
              </Link>
            </Table.Cell>
            <Table.Cell>Akershus og Oslo jordskifterett</Table.Cell>
            <Table.Cell> Maake Karl</Table.Cell>
            <Table.Cell> 17.12.2018 </Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>
  );
};
