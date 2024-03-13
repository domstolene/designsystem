import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { PlusCircledIcon } from '../Icon/icons';

import { SplitButton, type SplitButtonProps, type SplitButtonPurpose } from '.';

export default {
  title: 'dds-components/SplitButton',
  component: SplitButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: { control: false },
    secondaryActions: { control: false },
    primaryAction: { control: false },
  },
};

const items = [
  {
    title: 'Sekundær handling',
    onClick: () => null,
  },
  {
    title: 'Sekundær handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
];

type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    primaryAction: { label: 'Tekst', fullWidth: true },
    secondaryActions: items,
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
    <StoryTemplate display="grid">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <SplitButtonVariants args={args} purpose="primary" />
      <SplitButtonVariants args={args} purpose="secondary" />
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    primaryAction: { label: 'Tekst', fullWidth: true },
    secondaryActions: items,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

interface SplitButtonVariantsProps {
  args: SplitButtonProps;
  purpose: SplitButtonPurpose;
}

const SplitButtonVariants = ({ args, purpose }: SplitButtonVariantsProps) => (
  <>
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
  </>
);
