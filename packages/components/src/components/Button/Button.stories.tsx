import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { ArrowLeftIcon, HStack, VStack } from '../..';

import { Button } from '.';

export default {
  title: 'dds-components/Button',
  component: Button,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
    loadingTooltip: { control: 'text' },
    htmlProps: { control: false },
    target: { control: false },
    icon: { control: false },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Tekst' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const OverviewWithText: Story = {
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <HStack gap="x1">
      <VStack gap="x1" align="start">
        <Button
          {...args}
          purpose="primary"
          onClick={() => console.log('click')}
        >
          Primary
        </Button>
        <Button {...args} purpose="secondary">
          Secondary
        </Button>
        <Button {...args} purpose="tertiary">
          Tertiary
        </Button>
        <Button {...args} purpose="danger">
          Danger
        </Button>
      </VStack>
      <VStack gap="x1" align="start">
        <Button
          {...args}
          purpose="primary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
        <Button
          {...args}
          purpose="secondary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Secondary
        </Button>
        <Button
          {...args}
          purpose="tertiary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Tertiary
        </Button>
        <Button
          {...args}
          purpose="danger"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Danger
        </Button>
      </VStack>
    </HStack>
  ),
};

export const OverviewJustIcon: Story = {
  args: { icon: ArrowLeftIcon },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" />
      <Button {...args} purpose="secondary" />
      <Button {...args} purpose="tertiary" />
      <Button {...args} purpose="danger" />
    </>
  ),
};

export const OverviewSizes: Story = {
  args: { purpose: 'primary' },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} size="tiny">
        Primary
      </Button>
      <Button {...args} size="small">
        Primary
      </Button>
      <Button {...args} size="medium">
        Primary
      </Button>
      <Button {...args} size="large">
        Primary
      </Button>
      <Button
        {...args}
        size="tiny"
        iconPosition={args.iconPosition ?? 'left'}
        icon={ArrowLeftIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        size="small"
        iconPosition={args.iconPosition ?? 'left'}
        icon={ArrowLeftIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        size="medium"
        iconPosition={args.iconPosition ?? 'left'}
        icon={ArrowLeftIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        size="large"
        iconPosition={args.iconPosition ?? 'left'}
        icon={ArrowLeftIcon}
      >
        Primary
      </Button>
      <Button {...args} size="tiny" icon={ArrowLeftIcon} />
      <Button {...args} size="small" icon={ArrowLeftIcon} />
      <Button {...args} size="medium" icon={ArrowLeftIcon} />
      <Button {...args} size="large" icon={ArrowLeftIcon} />
    </>
  ),
};

export const OverviewLoading: Story = {
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" size="tiny" loading />
      <Button {...args} purpose="primary" size="small" loading />
      <Button {...args} purpose="primary" size="medium" loading />
      <Button {...args} purpose="primary" size="large" loading />
      <Button {...args} purpose="secondary" size="tiny" loading />
      <Button {...args} purpose="secondary" size="small" loading />
      <Button {...args} purpose="secondary" size="medium" loading />
      <Button {...args} purpose="secondary" size="large" loading />
      <Button {...args} purpose="danger" size="tiny" loading />
      <Button {...args} purpose="danger" size="small" loading />
      <Button {...args} purpose="danger" size="medium" loading />
      <Button {...args} purpose="danger" size="large" loading />
    </>
  ),
};

export const OverviewFullWidth: Story = {
  args: { fullWidth: true },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" size="medium">
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        size="medium"
        iconPosition="left"
        icon={ArrowLeftIcon}
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        size="medium"
        iconPosition="right"
        icon={ArrowLeftIcon}
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button {...args} purpose="primary" size="medium" icon={ArrowLeftIcon} />
      <Button {...args} purpose="primary" size="medium" loading>
        label
      </Button>
    </>
  ),
};

export const TextWithIcon: Story = {
  args: {
    children: 'Tekst',
    icon: ArrowLeftIcon,
    iconPosition: 'left',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Icon: Story = {
  args: { icon: ArrowLeftIcon },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Secondary: Story = {
  args: { purpose: 'secondary' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </>
  ),
};

export const Tertiary: Story = {
  args: { purpose: 'tertiary' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </>
  ),
};

export const Danger: Story = {
  args: { purpose: 'danger' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </>
  ),
};
