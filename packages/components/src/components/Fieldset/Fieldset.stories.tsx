import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Fieldset } from './Fieldset';
import { TextInput } from '../TextInput';
import { Legend } from '../Typography';

export default {
  title: 'dds-components/Fieldset',
  component: Fieldset,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
} satisfies Meta<typeof Fieldset>;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Fieldset {...args}>
      <Legend withMargins>Telefon og epost</Legend>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <TextInput label="Telefon" />
        <TextInput label="Epost" />
      </div>
    </Fieldset>
  ),
};
