import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Table } from '../Table';
import { useState } from 'react';
import { InlineEditInput } from './InlineEditInput';
import { InlineEditInputProps } from './InlineEdit.types';

export default {
  title: 'dds-components/InlineEdit/InlineEditInput',
  component: InlineEditInput,
  argTypes: {
    emptiable: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: [
        'style',
        'className',
        'onFocus',
        'onBlur',
        'onChange',
        'onSetValue',
        'inputRef',
        'children',
      ],
    },
  },
};

export const Overview = (args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('tekst');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('tømbar');
  const [value6, setValue6] = useState('uten ikon');
  return (
    <StoryTemplate title="InlineEditInput - overview">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
      <InlineEditInput {...args} onSetValue={setValue2} value={value2} />
      <InlineEditInput {...args} onSetValue={setValue3} value={value3} error />
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
    </StoryTemplate>
  );
};

export const Default = (args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  return (
    <StoryTemplate title="InlineEditInput - default" display="block">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>
  );
};

export const InTable = () => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return (
    <StoryTemplate title="InlineEditInput - in table" display="block">
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
                <InlineEditInput onSetValue={() => setValue(value)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditInput onSetValue={() => setValue2(value2)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};
