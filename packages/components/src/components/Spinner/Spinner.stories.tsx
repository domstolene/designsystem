import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Spinner } from '.';

export default {
  title: 'dds-components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    tooltip: { control: 'text', defaultValue: 'Innlasting pågår' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: ddsBaseTokens.iconSizes.DdsIconsizeMedium,
    color: 'interactive',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4} gap="30px">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Spinner {...args} />
      <Spinner {...args} color="gray4" />
      <Spinner {...args} color="success" />
      <Spinner {...args} size="60px" />
    </>
  ),
};

export const CustomTooltip: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4} gap="30px">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Spinner {...args} size="60px" tooltip="Egendefinert melding" />
    </>
  ),
};
