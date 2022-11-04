import { StoryTemplate } from '../../storybook';
import { Body, Cell, Head, Row, Table, TableWrapper } from '../Table';
import { useState } from 'react';
import { InlineEditInput } from './InlineEditInput';
import { InlineEditInputProps } from './InlineEdit.types';

export default {
  title: 'Design system/InlineEdit/InlineEditInput',
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
      <TableWrapper>
        <Table>
          <Head>
            <Row type="head">
              <Cell type="head">Header</Cell>
              <Cell type="head">Header</Cell>
              <Cell type="head">Header</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>
                <InlineEditInput onSetValue={() => setValue(value)} />
              </Cell>
              <Cell>innhold</Cell>
              <Cell>innhold</Cell>
            </Row>
            <Row>
              <Cell>
                <InlineEditInput onSetValue={() => setValue2(value2)} />
              </Cell>
              <Cell>innhold</Cell>
              <Cell>innhold</Cell>
            </Row>
          </Body>
        </Table>
      </TableWrapper>
    </StoryTemplate>
  );
};
