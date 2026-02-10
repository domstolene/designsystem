import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { InlineEditSelect } from './InlineEditSelect';
import {
  categoryCss,
  ddsProviderDecorator,
  htmlEventArgType,
  windowWidthDecorator,
} from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
import { Table } from '../../Table/normal';

export default {
  title: 'dds-components/Components/InlineEdit/InlineEditSelect',
  component: InlineEditSelect,
  argTypes: {
    width: { control: 'text', table: categoryCss },
    onFocus: htmlEventArgType,
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
    value: htmlEventArgType,
  },
  args: { onChange: fn(), onBlur: fn(), onFocus: fn(), onSetValue: fn() },
  parameters: {
    controls: {
      exclude: ['inputRef'],
    },
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof InlineEditSelect>;
type Story = StoryObj<typeof InlineEditSelect>;

const children = [
  <option></option>,
  <option>Alt 1</option>,
  <option>Alt 2</option>,
  <option>Alt 3</option>,
];

export const Preview: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [value, setValue] = useState('');
    return (
      <InlineEditSelect
        {...args}
        children={children}
        value={value}
        onSetValue={setValue}
      />
    );
  },
};

export const Overview: Story = {
  render: args => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('Alt 1');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('Tømbar');
    const [value6, setValue6] = useState('Uten ikon');
    return (
      <StoryVStack>
        <InlineEditSelect
          {...args}
          children={children}
          value={value}
          onSetValue={setValue}
        />
        <InlineEditSelect
          {...args}
          children={children}
          onSetValue={setValue2}
          value={value2}
        />
        <InlineEditSelect
          {...args}
          children={children}
          onSetValue={setValue3}
          value={value3}
          error
        />
        <InlineEditSelect
          {...args}
          children={children}
          onSetValue={setValue4}
          value={value4}
          errorMessage="Feilmelding"
        />
        <InlineEditSelect
          {...args}
          children={[
            <option></option>,
            <option>Tømbar</option>,
            <option>Alt 2</option>,
          ]}
          onSetValue={setValue5}
          value={value5}
          emptiable
        />
        <InlineEditSelect
          {...args}
          children={[
            <option></option>,
            <option>Uten ikon</option>,
            <option>Alt 2</option>,
          ]}
          onSetValue={setValue6}
          value={value6}
          hideIcon
        />
      </StoryVStack>
    );
  },
};

export const InTable: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
                <InlineEditSelect
                  {...args}
                  children={children}
                  onSetValue={() => setValue(value)}
                />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditSelect
                  {...args}
                  children={children}
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
