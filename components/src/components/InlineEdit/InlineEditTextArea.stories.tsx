import { StoryTemplate } from '../../storybook';
import { Body, Cell, Head, Row, Table, TableWrapper } from '../Table';
import { useState } from 'react';
import { InlineEditTextArea } from './InlineEditTextArea';

import { InlineEditTextAreaProps } from './InlineEdit.types';

export default {
  title: 'Design system/InlineEdit/InlineEditTextArea',
  component: InlineEditTextArea,
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

export const Overview = (args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('tekst');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('tømbar');
  return (
    <StoryTemplate title="InlineEditTextArea - overview">
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
    </StoryTemplate>
  );
};

export const Default = (args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  return (
    <StoryTemplate title="InlineEditTextArea - default" display="block">
      <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>
  );
};

export const InTable = () => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return (
    <StoryTemplate title="InlineEditTextArea - in table" display="block">
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
                <InlineEditTextArea onSetValue={() => setValue(value)} />
              </Cell>
              <Cell>innhold</Cell>
              <Cell>innhold</Cell>
            </Row>
            <Row>
              <Cell>
                <InlineEditTextArea onSetValue={() => setValue2(value2)} />
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
