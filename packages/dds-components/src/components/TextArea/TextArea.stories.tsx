import { type Meta, type StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import { categoryHtml } from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/TextArea',
  component: TextArea,
  argTypes: {
    width: { control: 'text' },
    maxLength: { control: 'number', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean', table: categoryHtml },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
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
