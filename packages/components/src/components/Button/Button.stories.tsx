import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { icons } from '../..';

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
    label: { table: { disable: true } },
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
    <StoryTemplate display="grid">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="filled">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="filled">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="filled">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="ghost">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="ghost">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="ghost">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="borderless">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="borderless">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="borderless">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="rounded">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="rounded">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="rounded">
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
    </>
  ),
};

export const OverviewJustIcon: Story = {
  args: { icon: icons.CloseIcon },
  decorators: Story => (
    <StoryTemplate display="grid">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="filled" />
      <Button {...args} purpose="secondary" appearance="filled" />
      <Button {...args} purpose="danger" appearance="filled" />
      <Button {...args} purpose="primary" appearance="ghost" />
      <Button {...args} purpose="secondary" appearance="ghost" />
      <Button {...args} purpose="danger" appearance="ghost" />
      <Button {...args} purpose="primary" appearance="borderless" />
      <Button {...args} purpose="secondary" appearance="borderless" />
      <Button {...args} purpose="danger" appearance="borderless" />
      <Button {...args} purpose="primary" appearance="rounded" />
      <Button {...args} purpose="secondary" appearance="rounded" />
      <Button {...args} purpose="danger" appearance="rounded" />
    </>
  ),
};

export const OverviewSizes: Story = {
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="filled" size="tiny">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="small">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="medium">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="large">
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        icon={icons.CloseIcon}
      />
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
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="large"
        loading
      />
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
      <Button {...args} purpose="primary" appearance="filled" size="medium">
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="left"
        icon={icons.PlusCircledIcon}
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        icon={icons.PlusCircledIcon}
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
      >
        label
      </Button>
    </>
  ),
};

export const TextWithIcon: Story = {
  args: {
    children: 'Tekst',
    icon: icons.PlusCircledIcon,
    iconPosition: 'left',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Icon: Story = {
  args: { icon: icons.CloseIcon },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Ghost: Story = {
  args: { children: 'Tekst' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="secondary" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="danger" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
    </>
  ),
};

export const Borderless: Story = {
  args: { children: 'Tekst' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="borderless" />
      <Button {...args} purpose="secondary" appearance="borderless" />
      <Button {...args} purpose="danger" appearance="borderless" />
    </>
  ),
};

export const Rounded: Story = {
  args: { children: 'Tekst' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Button {...args} purpose="primary" appearance="rounded" />
      <Button {...args} purpose="secondary" appearance="rounded" />
      <Button {...args} purpose="danger" appearance="rounded" />
    </>
  ),
};
