import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InlineEditTextArea } from './InlineEditTextArea';
import { categoryCss, windowWidthDecorator } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';
import { Table } from '../Table/normal';

export default {
  title: 'dds-components/Components/InlineEdit/InlineEditTextArea',
  component: InlineEditTextArea,
  argTypes: {
    width: { control: 'text', table: categoryCss },
  },
  parameters: {
    controls: {
      exclude: ['inputRef'],
    },
  },
} satisfies Meta<typeof InlineEditTextArea>;

type Story = StoryObj<typeof InlineEditTextArea>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('');
    return <InlineEditTextArea {...args} value={value} onSetValue={setValue} />;
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
        <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
        <InlineEditTextArea {...args} onSetValue={setValue2} value={value2} />
        <InlineEditTextArea
          {...args}
          onSetValue={setValue3}
          value={value3}
          error
        />
        <InlineEditTextArea
          {...args}
          onSetValue={setValue4}
          value={value4}
          errorMessage="Feilmelding"
        />
        <InlineEditTextArea
          {...args}
          onSetValue={setValue5}
          value={value5}
          emptiable
        />
        <InlineEditTextArea
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
                <InlineEditTextArea
                  {...args}
                  onSetValue={() => setValue(value)}
                />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditTextArea
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
