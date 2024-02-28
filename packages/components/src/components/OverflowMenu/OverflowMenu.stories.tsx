import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { MenuIcon, PlusCircledIcon } from '../Icon/icons';

import {
  OverflowMenu,
  type OverflowMenuContextItem,
  OverflowMenuGroup,
  type OverflowMenuNavItem,
} from '.';

export default {
  title: 'dds-components/OverflowMenu',
  component: OverflowMenu,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

const items: Array<OverflowMenuContextItem> = [
  {
    title: 'Handling',
    onClick: () => null,
  },
  {
    title: 'Handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
  {
    title: 'Lenke 1',
    href: '#',
  },
];

const navItems: Array<OverflowMenuNavItem> = [
  {
    title: 'Navigasjon',
    href: '#',
  },
  {
    title: 'Navigasjon 2',
    href: '#',
  },
];

type Story = StoryObj<typeof OverflowMenu>;

export const Default: Story = {
  args: {
    items,
  },
  decorators: Story => (
    <StoryTemplate display="flex-centered">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <OverflowMenuGroup>
      <Button icon={MenuIcon} aria-label="Åpne meny" />
      <OverflowMenu {...args} />
    </OverflowMenuGroup>
  ),
};

export const WithStaticUser: Story = {
  args: {
    items,
    userProps: { name: 'Brukernavn' },
  },
  decorators: Story => (
    <StoryTemplate display="flex-centered">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <OverflowMenuGroup>
      <Button icon={MenuIcon} aria-label="Åpne meny" />
      <OverflowMenu {...args} />
    </OverflowMenuGroup>
  ),
};

export const WithInteractiveUser: Story = {
  args: {
    items,
    userProps: { name: 'Brukernavn', onClick: () => null },
  },
  decorators: Story => (
    <StoryTemplate display="flex-centered">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <OverflowMenuGroup>
      <Button icon={MenuIcon} aria-label="Åpne meny" />
      <OverflowMenu {...args} />
    </OverflowMenuGroup>
  ),
};

export const WithNavigation: Story = {
  args: {
    items,
    navItems,
  },
  decorators: Story => (
    <StoryTemplate display="flex-centered">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <OverflowMenuGroup>
      <Button icon={MenuIcon} aria-label="Åpne meny" />
      <OverflowMenu {...args} />
    </OverflowMenuGroup>
  ),
};

export const WithNavigationAndInteractiveUser: Story = {
  args: {
    items,
    navItems,
    userProps: { name: 'Brukernavn', onClick: () => null },
  },
  decorators: Story => (
    <StoryTemplate display="flex-centered">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <OverflowMenuGroup>
      <Button icon={MenuIcon} aria-label="Åpne meny" />
      <OverflowMenu {...args} />
    </OverflowMenuGroup>
  ),
};
