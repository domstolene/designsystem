import { StoryTemplate } from '../../storybook';
import { InlineEdit, InlineEditProps } from '.';
import { Body, Cell, Head, Row, Table, TableWrapper } from '../Table';
import { useRef, useState } from 'react';

export default {
  title: 'Design system/InlineEdit',
  component: InlineEdit,
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

export const Overview = (args: InlineEditProps) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const [value2, setValue2] = useState('tekst');
  const ref2 = useRef<HTMLInputElement>(null);
  const [value3, setValue3] = useState('');
  const ref3 = useRef<HTMLInputElement>(null);
  const [value4, setValue4] = useState('');
  const ref4 = useRef<HTMLInputElement>(null);
  const [value5, setValue5] = useState('tømbar');
  const ref5 = useRef<HTMLInputElement>(null);
  return (
    <StoryTemplate title="InlineEdit - overview">
      <InlineEdit {...args} inputRef={ref} value={value} onSetValue={setValue}>
        <InlineEdit.Input ref={ref} />
      </InlineEdit>
      <InlineEdit
        {...args}
        inputRef={ref2}
        onSetValue={setValue2}
        value={value2}
      >
        <InlineEdit.Input ref={ref2} />
      </InlineEdit>
      <InlineEdit
        {...args}
        inputRef={ref3}
        onSetValue={setValue3}
        value={value3}
      >
        <InlineEdit.Input ref={ref3} error />
      </InlineEdit>
      <InlineEdit
        {...args}
        inputRef={ref4}
        onSetValue={setValue4}
        value={value4}
      >
        <InlineEdit.Input ref={ref4} errorMessage="Feilmelding" />
      </InlineEdit>
      <InlineEdit
        {...args}
        inputRef={ref5}
        onSetValue={setValue5}
        value={value5}
        emptiable
      >
        <InlineEdit.Input ref={ref5} />
      </InlineEdit>
    </StoryTemplate>
  );
};

export const OverviewInputTypes = (args: InlineEditProps) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const [value2, setValue2] = useState('');
  const ref2 = useRef<HTMLTextAreaElement>(null);

  return (
    <StoryTemplate title="InlineEdit - overview input types">
      <InlineEdit {...args} inputRef={ref} value={value} onSetValue={setValue}>
        <InlineEdit.Input ref={ref} />
      </InlineEdit>
      <InlineEdit
        {...args}
        inputRef={ref2}
        value={value2}
        onSetValue={setValue2}
      >
        <InlineEdit.TextArea ref={ref2} />
      </InlineEdit>
    </StoryTemplate>
  );
};

export const Default = (args: InlineEditProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  return (
    <StoryTemplate title="InlineEdit - default" display="block">
      <InlineEdit {...args} inputRef={ref} value={value} onSetValue={setValue}>
        <InlineEdit.Input ref={ref} />
      </InlineEdit>
    </StoryTemplate>
  );
};

export const InTable = (args: InlineEditProps) => {
  const [value, setValue] = useState();
  const ref = useRef<HTMLInputElement>(null);
  const [value2, setValue2] = useState();
  const ref2 = useRef<HTMLTextAreaElement>(null);
  return (
    <StoryTemplate title="InlineEdit - default" display="block">
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
                <InlineEdit
                  {...args}
                  inputRef={ref}
                  onSetValue={() => setValue(value)}
                >
                  <InlineEdit.Input ref={ref} />
                </InlineEdit>
              </Cell>
              <Cell>innhold</Cell>
              <Cell>innhold</Cell>
            </Row>
            <Row>
              <Cell>
                <InlineEdit
                  {...args}
                  inputRef={ref2}
                  onSetValue={() => setValue2(value2)}
                >
                  <InlineEdit.TextArea ref={ref2} />
                </InlineEdit>
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
