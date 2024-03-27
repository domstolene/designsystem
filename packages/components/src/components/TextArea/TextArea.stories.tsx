import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

export default {
  title: 'dds-components/TextArea',
  component: TextArea,
  argTypes: {
    label: { control: 'text' },
    tip: { control: 'text' },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <TextArea {...args} />
      <TextArea {...args} required value="Påkrevd" />
      <TextArea {...args} disabled value="Disabled" />
      <TextArea {...args} readOnly value="Readonly" />
      <TextArea
        {...args}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextArea {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
      <TextArea {...args} />
    </>
  ),
};
