import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Table } from '../Table/normal';
import { Link, Paragraph } from '../Typography';

import { VisuallyHidden } from '.';

export default {
  title: 'dds-components/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    as: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Paragraph>Teksten under er usynlig.</Paragraph>
      <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
    </>
  ),
};

export const WithLink: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: _args => (
    <>
      <Paragraph>
        I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og
        formue.
      </Paragraph>
      <Paragraph>
        På sivilrett.no finner du{' '}
        <Link href="/">
          mer informasjon og søknadsskjema
          <VisuallyHidden as="span">
            {' '}
            i forbindelse med foreldretvister
          </VisuallyHidden>
        </Link>
        .
      </Paragraph>
    </>
  ),
};

export const TableButtons: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: _args => (
    <Table.Wrapper style={{ width: '100%' }}>
      <Table density="compact" style={{ width: '100%' }}>
        <Table.Head>
          <Table.Row type="head">
            <Table.Cell type="head">Bruker</Table.Cell>
            <Table.Cell type="head">
              <VisuallyHidden as="span">Aksjoner</VisuallyHidden>
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row type="body">
            <Table.Cell>Ane Bjerke</Table.Cell>
            <Table.Cell layout="right">
              <Button size="small" purpose="danger">
                Slett <VisuallyHidden as="span">Ane Bjerke</VisuallyHidden>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row type="body">
            <Table.Cell>Sandra Lovsetter</Table.Cell>
            <Table.Cell layout="right">
              <Button size="small" purpose="danger">
                Slett{' '}
                <VisuallyHidden as="span">Sandra Lovsetter</VisuallyHidden>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Wrapper>
  ),
};
