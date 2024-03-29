import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { ScreenSize, useScreenSize } from '../../hooks';
import { Button } from '../Button';
import { FilterIcon, PlusIcon } from '../Icon/icons';
import { InternalHeader } from '../InternalHeader';
import { Pagination } from '../Pagination';
import { Search } from '../Search';
import { Table } from '../Table/normal';
import { Tag } from '../Tag';
import { TextInput } from '../TextInput';
import { Heading } from '../Typography';

import { Grid, GridChild } from '.';

export default {
  title: 'dds-components/Grid',
  component: Grid,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const PageExample: Story = {
  args: {},
  render: args => {
    const screenSize = useScreenSize();
    const isXSmall = screenSize === ScreenSize.XSmall;
    const smallScreenVersion = isXSmall ? true : undefined;
    return (
      <>
        <InternalHeader
          applicationName="Applikasjon"
          applicationDesc="Beskrivelse"
          navigationElements={[
            { title: 'Advokater', href: '/' },
            { title: 'Saker', href: '/' },
          ]}
          smallScreen={smallScreenVersion}
        />
        <Grid {...args} style={{ marginTop: isXSmall ? '16px' : '32px' }}>
          <GridChild
            columnsOccupied={{
              xs: '1/-1',
              sm: '1/7',
              md: '1/11',
              lg: '1/11',
              xl: '1/9',
            }}
          >
            <Search buttonProps={{ onClick: () => null }} />
          </GridChild>
          <GridChild
            columnsOccupied={{
              xs: '1/-1',
              sm: '7/9',
              md: '11/13',
              lg: '11/13',
              xl: '9/13',
            }}
          >
            <Button
              icon={FilterIcon}
              label="Filter"
              appearance="borderless"
              purpose="secondary"
            />
          </GridChild>
          <GridChild columnsOccupied="all">
            <Table.Wrapper>
              <Table style={{ width: '100%' }}>
                <Table.Head>
                  <Table.Row type="head">
                    <Table.Cell type="head">Navn</Table.Cell>
                    <Table.Cell type="head">Firma</Table.Cell>
                    <Table.Cell type="head">Status</Table.Cell>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  <Table.Row type="body">
                    <Table.Cell> Marie Bjerke </Table.Cell>
                    <Table.Cell>Advokat Firma </Table.Cell>
                    <Table.Cell>
                      <Tag text="Møterett" purpose="success" />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row type="body">
                    <Table.Cell>Sandra-Katrine Ingvaldsen Lovsetter</Table.Cell>
                    <Table.Cell>Advokatene AS</Table.Cell>
                    <Table.Cell>
                      <Tag text="Ikke møterett" purpose="danger" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Table.Wrapper>
          </GridChild>
          <GridChild columnsOccupied="all">
            <Pagination
              itemsAmount={20}
              withCounter
              smallScreen={smallScreenVersion}
            />
          </GridChild>
        </Grid>
      </>
    );
  },
};

export const JustRelativeColumns: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Grid {...args}>
      <GridChild columnsOccupied="all">
        <Heading level={2} withMargins>
          Opplysninger
        </Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="all" justifySelf="right">
        <Button label="Legg til" icon={PlusIcon} purpose="secondary" />
      </GridChild>
    </Grid>
  ),
};
