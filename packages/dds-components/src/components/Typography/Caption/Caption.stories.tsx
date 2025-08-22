import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Table } from '../../Table';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Caption } from '.';

export default {
  title: 'dds-components/Components/Typography/Caption',
  component: Caption,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
} satisfies Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Preview: Story = {
  args: { children: 'Caption' },
};

export const WithTable: Story = {
  args: { children: 'Caption', withMargins: true },
  render: args => (
    <Table>
      <Caption {...args} />
      <Table.Head>
        <Table.Row>
          <Table.Cell>Header</Table.Cell>
          <Table.Cell>Header</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Body</Table.Cell>
          <Table.Cell>Body</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
