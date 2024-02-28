import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import { type TextAreaProps } from './TextArea.types';

export default {
  title: 'dds-components/TextArea',
  component: TextArea,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof TextArea>;

export const Overview = (args: TextAreaProps) => {
  return (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <TextArea {...args} label={args.label ?? 'Label'} />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        required
        value="Påkrevd"
      />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        disabled
        value="Disabled"
      />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        value="Readonly"
      />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextArea
        {...args}
        label={args.label ?? 'Label'}
        tip={args.tip ?? 'Dette er en hjelpetekst'}
      />
      <TextArea {...args} />
    </StoryTemplate>
  );
};

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
