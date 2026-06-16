import preview from '#.storybook/preview';

import { ScreenSize, useScreenSize } from '../../../hooks';
import { ddsProviderDecorator, windowWidthDecorator } from '../../../storybook';
import { Button } from '../../Button';
import { FavStar } from '../../FavStar';
import { Icon } from '../../Icon';
import {
  AttachmentIcon,
  FileIcon,
  JordskifterettIcon,
  PersonIcon,
  TrashIcon,
} from '../../Icon/icons';
import { Link } from '../../Typography';
import { VisuallyHidden } from '../../VisuallyHidden';
import { Table } from '../normal';
import { data, headerCells, mapCellContents } from '../story-utils/tableData';

import { CollapsibleTable } from '.';

const headerValues = headerCells.map(cell => {
  return {
    content: cell.name,
    key: cell.name,
  };
});

const meta = preview.meta({
  title: 'dds-components/Components/Table/CollapsibleTable',
  component: CollapsibleTable,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
    controls: {
      exclude: ['headerValues', 'definingColumnIndex'],
    },
  },
  args: { headerValues },
  decorators: [ddsProviderDecorator],
});

const mappedHeaderCells = headerCells.map(headerCell => {
  return (
    <Table.Cell key={`head-${headerCell.dataName}`}>
      {headerCell.name}
    </Table.Cell>
  );
});

export const SingleDefiningColumn = meta.story({
  args: { headerValues },
  render: args => (
    <CollapsibleTable
      {...args}
      isCollapsed={args.isCollapsed !== false && true}
    >
      <Table.Head>
        <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
      </Table.Head>
      <Table.Body>
        {mapCellContents(data, headerCells).map(row => (
          <CollapsibleTable.Row key={row.toString()}>
            {row.map(cellContent => (
              <Table.Cell key={`body-${cellContent}`}>{cellContent}</Table.Cell>
            ))}
          </CollapsibleTable.Row>
        ))}
      </Table.Body>
    </CollapsibleTable>
  ),
});

export const MultipleDefiningColumns = meta.story({
  render: args => (
    <Table.Wrapper>
      <CollapsibleTable
        {...args}
        isCollapsed={args.isCollapsed !== false && true}
        definingColumnIndex={[0, 2]}
      >
        <Table.Head>
          <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
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
  ),
});

export const PrioritizedDefiningColumns = meta.story({
  render: args => (
    <Table.Wrapper>
      <CollapsibleTable
        {...args}
        isCollapsed={args.isCollapsed !== false && true}
        definingColumnIndex={[2, 0]}
      >
        <Table.Head>
          <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
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
  ),
});

export const WithDividers = meta.story({
  render: args => (
    <CollapsibleTable
      {...args}
      withDividers
      isCollapsed={args.isCollapsed !== false && true}
    >
      <Table.Head>
        <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
      </Table.Head>
      <Table.Body>
        {mapCellContents(data, headerCells).map(row => (
          <CollapsibleTable.Row key={row.toString()}>
            {row.map(cellContent => (
              <Table.Cell key={`body-${cellContent}`}>{cellContent}</Table.Cell>
            ))}
          </CollapsibleTable.Row>
        ))}
      </Table.Body>
    </CollapsibleTable>
  ),
});

export const Large = meta.story({
  render: args => (
    <CollapsibleTable
      {...args}
      size="large"
      isCollapsed={args.isCollapsed !== false && true}
    >
      <Table.Head>
        <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
      </Table.Head>
      <Table.Body>
        {mapCellContents(data, headerCells).map(row => (
          <CollapsibleTable.Row key={row.toString()}>
            {row.map(cellContent => (
              <Table.Cell key={`body-${cellContent}`}>{cellContent}</Table.Cell>
            ))}
          </CollapsibleTable.Row>
        ))}
      </Table.Body>
    </CollapsibleTable>
  ),
});

export const StickyHeader = meta.story({
  render: args => (
    <CollapsibleTable
      {...args}
      stickyHeader
      isCollapsed={args.isCollapsed !== false && true}
      definingColumnIndex={[0, 2]}
    >
      <Table.Head>
        <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
      </Table.Head>
      <Table.Body>
        {mapCellContents(data, headerCells).map(row => (
          <CollapsibleTable.Row key={row.toString()}>
            {row.map(cellContent => (
              <Table.Cell key={`body-${cellContent}`}>{cellContent}</Table.Cell>
            ))}
          </CollapsibleTable.Row>
        ))}
        {mapCellContents(data, headerCells).map(row => (
          <CollapsibleTable.Row key={row.toString()}>
            {row.map(cellContent => (
              <Table.Cell key={`body-${cellContent}`}>{cellContent}</Table.Cell>
            ))}
          </CollapsibleTable.Row>
        ))}
      </Table.Body>
    </CollapsibleTable>
  ),
});

const adminIcon = <Icon icon={PersonIcon} />;

export const WithButtonAndIcons = meta.story({
  args: {
    headerValues: [
      { content: 'Navn til venstre', key: 'Navn til venstre' },
      { content: 'Navn til høyre', key: 'Navn til høyre' },
      { content: 'Rolle', key: 'Rolle' },
      { content: 'Aksjoner', key: 'Aksjoner' },
    ],
  },
  render: args => {
    const deleteButton = (
      <Button
        purpose="secondary"
        icon={TrashIcon}
        iconPosition="left"
        size="small"
      >
        Fjern tilgang
      </Button>
    );
    return (
      <CollapsibleTable {...args} isCollapsed>
        <Table.Head>
          <CollapsibleTable.Row>
            {headerValues.map(headerCell => {
              return (
                <Table.Cell key={`head-${headerCell.key}`}>
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
    );
  },
});

export const Responsive = meta.story({
  render: args => {
    const screenSize = useScreenSize();
    return (
      <Table.Wrapper>
        <CollapsibleTable
          {...args}
          isCollapsed={screenSize <= ScreenSize.Small}
        >
          <Table.Head>
            <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
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
    );
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Kollapset versjon vises ved sm brekkpunkt.',
      ),
  ],
});

export const ResposiveMultipleBreakpoints = meta.story({
  render: args => {
    const screenSize = useScreenSize();
    return (
      <Table.Wrapper>
        <CollapsibleTable
          {...args}
          isCollapsed={screenSize <= ScreenSize.Small}
          definingColumnIndex={screenSize === ScreenSize.XSmall ? [2] : [2, 0]}
        >
          <Table.Head>
            <CollapsibleTable.Row>{mappedHeaderCells}</CollapsibleTable.Row>
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
    );
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Ulike kollapsede versjoner vises ved xs og sm brekkpunkt.',
      ),
  ],
});

const headers = [
  {
    key: 'fav',
    content: <VisuallyHidden>Velg som favoritt</VisuallyHidden>,
  },
  {
    key: 'Dokumenttype',
    content: <VisuallyHidden>Dokumenttype</VisuallyHidden>,
  },
  { key: 'Nummer', content: 'Nr.' },
  {
    key: 'Lest status',
    content: <VisuallyHidden>Lest status</VisuallyHidden>,
  },
  { key: 'Dokumentnavn', content: 'Dokumentnavn' },
  { key: 'Avsender', content: 'Avsender' },
  { key: 'Mottakere', content: 'Mottakere' },
  { key: 'Sendt', content: 'Sendt' },
];
export const Example = meta.story({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const screenSize = useScreenSize();
    const isSmall = screenSize <= ScreenSize.Small;
    const isXSmall = screenSize <= ScreenSize.XSmall;
    const iconSize = isXSmall ? 'small' : 'medium';
    return (
      <CollapsibleTable
        isCollapsed={isSmall}
        headerValues={headers}
        definingColumnIndex={[0, 1, 2, 3, 4]}
      >
        <Table.Head>
          <CollapsibleTable.Row>
            {headers.map(i => (
              <Table.Cell> {i.content} </Table.Cell>
            ))}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>
              <FavStar />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={FileIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>
              <Icon icon={JordskifterettIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Link href="/">
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
              <FavStar />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={AttachmentIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1-2</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <Link href="/">Merknader fra Knut-Håkon Dagsvik.pdf</Link>
            </Table.Cell>
            <Table.Cell>Akershus og Oslo jordskifterett</Table.Cell>
            <Table.Cell> Maake Karl</Table.Cell>
            <Table.Cell> 17.12.2018 </Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>
    );
  },
});
