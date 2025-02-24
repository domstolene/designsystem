import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InlineEditInput } from './InlineEditInput';
import { InlineEditTextArea } from './InlineEditTextArea';
import { htmlEventArgType } from '../../storybook/helpers';
import { StoryVStack } from '../Stack/utils';

export default {
  title: 'dds-components/InlineEdit',
  component: InlineEditInput,
  argTypes: {
    width: { control: { type: 'text' } },
    onFocus: htmlEventArgType,
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'onSetValue', 'inputRef', 'children'],
    },
  },
} satisfies Meta<typeof InlineEditInput>;

type Story = StoryObj<typeof InlineEditInput>;

export const OverviewInputTypes: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <StoryVStack>
        <InlineEditInput value={value} onSetValue={setValue} />
        <InlineEditTextArea value={value2} onSetValue={setValue2} />
      </StoryVStack>
    );
  },
};
