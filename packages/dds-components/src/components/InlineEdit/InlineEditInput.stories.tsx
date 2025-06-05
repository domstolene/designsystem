import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { InlineEditInput } from './InlineEditInput';
import { categoryCss, windowWidthDecorator } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';
import { Table } from '../Table/normal';

export default {
  title: 'dds-components/Components/InlineEdit/InlineEditInput',
  component: InlineEditInput,
  argTypes: {
    width: { control: 'text', table: categoryCss },
  },
  parameters: {
    controls: {
      exclude: ['inputRef'],
    },
  },
} satisfies Meta<typeof InlineEditInput>;
type Story = StoryObj<typeof InlineEditInput>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('');
    return <InlineEditInput {...args} value={value} onSetValue={setValue} />;
  },
};

export const Overview: Story = {
  render: args => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('tekst');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('tømbar');
    const [value6, setValue6] = useState('uten ikon');
    return (
      <StoryVStack>
        <InlineEditInput {...args} value={value} onSetValue={setValue} />
        <InlineEditInput {...args} onSetValue={setValue2} value={value2} />
        <InlineEditInput
          {...args}
          onSetValue={setValue3}
          value={value3}
          error
        />
        <InlineEditInput
          {...args}
          onSetValue={setValue4}
          value={value4}
          errorMessage="Feilmelding"
        />
        <InlineEditInput
          {...args}
          onSetValue={setValue5}
          value={value5}
          emptiable
        />
        <InlineEditInput
          {...args}
          onSetValue={setValue6}
          value={value6}
          hideIcon
        />
      </StoryVStack>
    );
  },
};

export const InTable: Story = {
  render: args => {
    const [value, setValue] = useState();
    const [value2, setValue2] = useState();
    return (
      <Table.Wrapper>
        <Table>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Header</Table.Cell>
              <Table.Cell type="head">Header</Table.Cell>
              <Table.Cell type="head">Header</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <InlineEditInput {...args} onSetValue={() => setValue(value)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditInput
                  {...args}
                  onSetValue={() => setValue2(value2)}
                />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    );
  },
};

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
