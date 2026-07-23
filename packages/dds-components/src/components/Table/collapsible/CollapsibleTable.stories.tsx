import preview from '#.storybook/preview';

import { ddsProviderDecorator, windowWidthDecorator } from '../../../storybook';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { PersonIcon, TrashIcon } from '../../Icon/icons';
import { Table } from '../normal';
import { data, headerCells } from '../storybook-utils/tableData';

import { CollapsibleTable } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Table/CollapsibleTable',
  component: CollapsibleTable,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

const colKeys = headerCells.map(c => c.dataName);

export const Preview = meta.story({
  args: { collapseBelow: 'sm' },
  render: args => (
    <Table.Wrapper>
      <CollapsibleTable {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>{headerCells[0].name}</Table.Cell>
            <Table.Cell collapseKey={colKeys[1]}>
              {headerCells[1].name}
            </Table.Cell>
            <Table.Cell collapseKey={colKeys[2]}>
              {headerCells[2].name}
            </Table.Cell>
            <Table.Cell collapseKey={colKeys[3]}>
              {headerCells[3].name}
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(row => (
            <Table.Row key={row.dommer}>
              <Table.Cell>{row.dommer}</Table.Cell>
              <Table.Cell collapseKey={colKeys[1]}>{row.domstol}</Table.Cell>
              <Table.Cell collapseKey={colKeys[2]}>
                {row.favorittRett}
              </Table.Cell>
              <Table.Cell collapseKey={colKeys[3]}>
                {row.favorittDyr}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </Table.Wrapper>
  ),
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Kollapset versjon vises ved sm brekkpunkt.',
      ),
  ],
});

export const MultipleDefiningColumns = meta.story({
  args: { collapseBelow: 'sm' },
  render: args => (
    <Table.Wrapper>
      <CollapsibleTable {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>{headerCells[0].name}</Table.Cell>
            <Table.Cell collapseKey={colKeys[1]}>
              {headerCells[1].name}
            </Table.Cell>
            <Table.Cell>{headerCells[2].name}</Table.Cell>
            <Table.Cell collapseKey={colKeys[3]}>
              {headerCells[3].name}
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(row => (
            <Table.Row key={row.dommer}>
              <Table.Cell>{row.dommer}</Table.Cell>
              <Table.Cell collapseKey={colKeys[1]}>{row.domstol}</Table.Cell>
              <Table.Cell>{row.favorittRett}</Table.Cell>
              <Table.Cell collapseKey={colKeys[3]}>
                {row.favorittDyr}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    </Table.Wrapper>
  ),
});

const adminIcon = <Icon icon={PersonIcon} />;

export const WithButtonAndIcons = meta.story({
  args: { collapseBelow: 'sm' },
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
      <CollapsibleTable {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Navn til venstre</Table.Cell>
            <Table.Cell collapseKey="navn-hoyre">Navn til høyre</Table.Cell>
            <Table.Cell collapseKey="rolle">Rolle</Table.Cell>
            <Table.Cell collapseKey="aksjoner">Aksjoner</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.dommer}>
              <Table.Cell layout="text and icon">
                {adminIcon} {item.dommer}
              </Table.Cell>
              <Table.Cell collapseKey="navn-hoyre" layout="text and icon">
                {item.dommer} {adminIcon}
              </Table.Cell>
              <Table.Cell collapseKey="rolle">Admin</Table.Cell>
              <Table.Cell collapseKey="aksjoner" layout="center">
                {deleteButton}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </CollapsibleTable>
    );
  },
});
