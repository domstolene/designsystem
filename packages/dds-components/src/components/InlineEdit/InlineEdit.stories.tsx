import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { InlineEditInput } from './InlineEditInput/InlineEditInput';
import { InlineEditSelect } from './InlineEditSelect';
import { InlineEditTextArea } from './InlineEditTextArea/InlineEditTextArea';
import { ddsProviderDecorator, htmlEventArgType } from '../../storybook';
import { StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/InlineEdit',
  component: InlineEditInput,
  argTypes: {
    width: { control: { type: 'text' } },
    onFocus: htmlEventArgType,
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
  },
  args: { onChange: fn(), onBlur: fn(), onFocus: fn(), onSetValue: fn() },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'onSetValue', 'inputRef', 'children'],
    },
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof InlineEditInput>;

type Story = StoryObj<typeof InlineEditInput>;

export const Preview: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const [value, setValue] = useState('Input');
    const [value2, setValue2] = useState('TextArea');
    const [value3, setValue3] = useState('Select');

    return (
      <StoryVStack>
        <InlineEditInput value={value} onSetValue={setValue} />
        <InlineEditTextArea value={value2} onSetValue={setValue2} />
        <InlineEditSelect value={value3} onSetValue={setValue3}>
          <option></option>
          <option>Select</option>
          <option>Alt 2</option>
        </InlineEditSelect>
      </StoryVStack>
    );
  },
};
