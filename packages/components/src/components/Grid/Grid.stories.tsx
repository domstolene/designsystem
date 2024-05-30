import { type Meta, type StoryObj } from '@storybook/react';

import { ScreenSize, useScreenSize } from '../../hooks';
import { Button } from '../Button';
import { FilterIcon, PlusIcon } from '../Icon/icons';
import { InternalHeader } from '../InternalHeader';
import { LocalMessage } from '../LocalMessage';
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

export const Default: Story = {
  render: args => {
    const containerStyle = {
      border: '1px dashed gray',
      padding: 'var(--dds-spacing-x0-5)',
    };

    const childStyle = {
      ...containerStyle,
      background: 'var(--dds-color-surface-subtle)',
    };

    return (
      <Grid {...args} style={containerStyle}>
        <GridChild columnsOccupied="all">
          <div style={childStyle}>Alle kolonner</div>
        </GridChild>
        <GridChild columnsOccupied="firstHalf">
          <div style={childStyle}>Første halv</div>
        </GridChild>
        <GridChild columnsOccupied="secondHalf">
          <div style={childStyle}>Andre halv</div>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/7',
            md: '1/11',
            lg: '1/10',
            xl: '1/8',
          }}
        >
          <div style={childStyle}>Custom antall kolonner per brekkepunkt</div>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '7/9',
            md: '11/13',
            lg: '10/13',
            xl: '8/13',
          }}
        >
          <div style={childStyle}>Custom antall kolonner per brekkepunkt</div>
        </GridChild>
      </Grid>
    );
  },
};

export const PageExample: Story = {
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
            <Button icon={FilterIcon} purpose="tertiary">
              Filter
            </Button>
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
  render: args => (
    <Grid {...args} maxWidth={{ lg: '750px', xl: '750px' }}>
      <GridChild columnsOccupied="all">
        <Heading level={2} withMargins>
          Parter
        </Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <LocalMessage>Info om skjema</LocalMessage>
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Fornavn" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Etternavn" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="all">
        <TextInput label="Adresse" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="all" justifySelf="right">
        <Button icon={PlusIcon} purpose="secondary">
          Legg til
        </Button>
      </GridChild>
    </Grid>
  ),
};
