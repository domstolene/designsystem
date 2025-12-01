import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  categoryCss,
  ddsProviderDecorator,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook';
import { Button } from '../../Button';
import { FilterIcon, PlusIcon } from '../../Icon/icons';
import { InternalHeader } from '../../InternalHeader';
import { LocalMessage } from '../../LocalMessage';
import { Pagination } from '../../Pagination';
import { Search } from '../../Search';
import { Table } from '../../Table/normal';
import { Tag } from '../../Tag';
import { TextInput } from '../../TextInput';
import { Heading } from '../../Typography';

import { Grid, GridChild } from '.';

export default {
  title: 'dds-components/Layout Primitives/Grid',
  component: Grid,
  argTypes: {
    ...responsivePropsArgTypes,
    gridTemplateColumns: { control: 'text', table: categoryCss },
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Preview: Story = {
  decorators: [
    Story =>
      windowWidthDecorator(
        <>
          <Story />
          <style>
            {`
          .story-styling {
            border: 1px dashed gray;
            }
            `}
          </style>
        </>,
      ),
  ],
  render: args => {
    return (
      <Grid {...args} className="story-styling" padding="x0.5">
        <GridChild
          columnsOccupied="all"
          padding="x0.5"
          className="story-styling"
        >
          Alle kolonner
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: 'firstHalf',
            sm: 'firstHalf',
            md: 'firstHalf',
            lg: 'firstHalf',
            xl: 'firstHalf',
          }}
          padding="x0.5"
          className="story-styling"
        >
          Første halv
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: 'secondHalf',
            sm: 'secondHalf',
            md: 'secondHalf',
            lg: 'secondHalf',
            xl: 'secondHalf',
          }}
          padding="x0.5"
          className="story-styling"
        >
          Andre halv
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: 'all',
            sm: 'all',
            md: 'firstHalf',
            lg: '1/10',
            xl: '1/8',
          }}
          padding="x0.5"
          className="story-styling"
        >
          Responsiv
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: 'all',
            sm: 'all',
            md: 'secondHalf',
            lg: '10/13',
            xl: '8/13',
          }}
          padding="x0.5"
          className="story-styling"
        >
          Responsiv
        </GridChild>
      </Grid>
    );
  },
};

export const PageExample: Story = {
  render: args => {
    return (
      <>
        <InternalHeader
          applicationName="Applikasjon"
          applicationDesc="Beskrivelse"
          navItems={[
            { children: 'Advokater', href: '/' },
            { children: 'Saker', href: '/' },
          ]}
          smallScreenBreakpoint="xs"
        />
        <Grid
          {...args}
          maxWidth="150ch"
          marginBlock={{ xs: 'x1', sm: 'x1', md: 'x2', lg: 'x2', xl: 'x4' }}
        >
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
              <Table>
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
                      <Tag purpose="success">Møterett</Tag>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row type="body">
                    <Table.Cell>Sandra-Katrine Ingvaldsen Lovsetter</Table.Cell>
                    <Table.Cell>Advokatene AS</Table.Cell>
                    <Table.Cell>
                      <Tag purpose="danger">Ikke møterett</Tag>
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
              smallScreenBreakpoint="xs"
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
        <Button icon={PlusIcon} purpose="secondary" size="small">
          Legg til
        </Button>
      </GridChild>
    </Grid>
  ),
};
