import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { useState } from 'react';

import { InlineEditInput } from './InlineEditInput';
import { InlineEditTextArea } from './InlineEditTextArea';

export default {
  title: 'dds-components/InlineEdit',
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

export const OverviewInputTypes = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <StoryTemplate>
      <InlineEditInput value={value} onSetValue={setValue} />
      <InlineEditTextArea value={value2} onSetValue={setValue2} />
    </StoryTemplate>
  );
};
