import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes, htmlArgType } from '../../storybook/helpers';
import { Button } from '../Button';
import { Table } from '../Table/normal';
import { Link, Paragraph } from '../Typography';

import { VisuallyHidden } from '.';

export default {
  title: 'dds-components/Components/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    ...commonArgTypes,
    as: { control: 'text', table: { defaultValue: { summary: 'span' } } },
    style: htmlArgType,
  },
} satisfies Meta<typeof VisuallyHidden>;

type Story = StoryObj<typeof VisuallyHidden>;

export const Preview: Story = {
  render: args => (
    <>
      <Paragraph>Teksten under er usynlig.</Paragraph>
      <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
    </>
  ),
};

export const WithLink: Story = {
  render: args => (
    <>
      <Paragraph>Eksempeltekst på en nettside.</Paragraph>
      <Paragraph>
        Her finner du{' '}
        <Link href="/">
          mer informasjon og søknadsskjema
          <VisuallyHidden {...args}>
            {' '}
            i forbindelse med et spesifikt tema
          </VisuallyHidden>
        </Link>
        .
      </Paragraph>
    </>
  ),
};

export const TableButtons: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => (
    <Table.Wrapper>
      <Table>
        <Table.Head>
          <Table.Row type="head">
            <Table.Cell type="head">Bruker</Table.Cell>
            <Table.Cell type="head">
              <VisuallyHidden>Aksjoner</VisuallyHidden>
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row type="body">
            <Table.Cell>Ane Bjerke</Table.Cell>
            <Table.Cell layout="right">
              <Button size="small" purpose="danger">
                Slett <VisuallyHidden>Navn Navnesen</VisuallyHidden>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row type="body">
            <Table.Cell>Sandra Lovsetter</Table.Cell>
            <Table.Cell layout="right">
              <Button size="small" purpose="danger">
                Slett <VisuallyHidden>Sandra Lovsetter</VisuallyHidden>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Wrapper>
  ),
};
