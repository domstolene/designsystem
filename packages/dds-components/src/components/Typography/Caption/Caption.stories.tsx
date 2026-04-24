import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../../storybook';
import { Table } from '../../Table';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Caption } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Caption',
  component: Caption,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Caption' },
});

export const WithTable = meta.story({
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
});
