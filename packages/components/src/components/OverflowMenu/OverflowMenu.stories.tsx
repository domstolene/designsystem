import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { MenuIcon, PlusCircledIcon } from '../Icon/icons';
import { VStack } from '../Stack';

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
      story: { height: '350px', inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof OverflowMenu>;

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
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};

export const WithStaticUser: Story = {
  args: {
    items,
    userProps: { name: 'Brukernavn' },
  },
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};

export const WithInteractiveUser: Story = {
  args: {
    items,
    userProps: { name: 'Brukernavn', onClick: () => null },
  },
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};

export const WithNavigation: Story = {
  args: {
    items,
    navItems,
  },
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};

export const WithNavigationAndInteractiveUser: Story = {
  args: {
    items,
    navItems,
    userProps: { name: 'Brukernavn', onClick: () => null },
  },
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};
