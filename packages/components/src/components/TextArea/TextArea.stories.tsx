import { type Meta, type StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import { StoryHStack, StoryVStack } from '../Stack/utils';

export default {
  title: 'dds-components/TextArea',
  component: TextArea,
  argTypes: {
    label: { control: 'text' },
    tip: { control: 'text' },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
    maxLength: { control: 'number' },
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
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TextArea {...args} />
        <TextArea {...args} disabled value="Disabled" />
        <TextArea
          {...args}
          errorMessage={
            args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
          }
        />
        <TextArea
          {...args}
          maxLength={200}
          tip={'Dette er en hjelpetekst med tegnteller'}
        />
      </StoryVStack>
      <StoryVStack>
        <TextArea {...args} required value="Påkrevd" />
        <TextArea {...args} readOnly value="Readonly" />
        <TextArea {...args} tip={'Dette er en hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const WithCharacterCount: Story = {
  args: { label: 'Label', maxLength: 200 },
};
