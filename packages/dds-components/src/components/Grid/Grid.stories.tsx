import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
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
  argTypes: {
    htmlProps: htmlPropsArgType,
    columnGap: { control: false },
    maxWidth: { control: false },
    rowGap: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-grid, .story-grid__child {
            border:1px dashed gray;
            padding:var(--dds-spacing-x0-5);
          }
          .story-grid__child {
           background: var(--dds-color-surface-subtle);
          }
      `}
        </style>
      </>
    ),
  ],
  render: args => {
    return (
      <Grid {...args} className="story-grid">
        <GridChild columnsOccupied="all">
          <div className="story-grid__child">Alle kolonner</div>
        </GridChild>
        <GridChild columnsOccupied="firstHalf">
          <div className="story-grid__child">Første halv</div>
        </GridChild>
        <GridChild columnsOccupied="secondHalf">
          <div className="story-grid__child">Andre halv</div>
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
          <div className="story-grid__child">
            Custom antall kolonner per brekkepunkt
          </div>
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
          <div className="story-grid__child">
            Custom antall kolonner per brekkepunkt
          </div>
        </GridChild>
      </Grid>
    );
  },
};

export const PageExample: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-grid {
            margin-top: var(--dds-spacing-x1);

            @media (min-width: 768px) {
              margin-top: var(--dds-spacing-x2);
            }
          }
      `}
        </style>
      </>
    ),
  ],
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
        <Grid {...args} className="story-grid">
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
        <Button icon={PlusIcon} purpose="secondary">
          Legg til
        </Button>
      </GridChild>
    </Grid>
  ),
};
