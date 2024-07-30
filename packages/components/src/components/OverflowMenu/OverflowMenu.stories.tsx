import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import {
  EditIcon,
  MenuIcon,
  PersonIcon,
  PlusCircledIcon,
  TrashIcon,
} from '../Icon/icons';
import { VStack } from '../Stack';

import {
  OverflowMenuButton,
  OverflowMenuDivider,
  OverflowMenuLink,
  OverflowMenuList,
  OverflowMenuListHeader,
  OverflowMenuSpan,
} from '.';
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
  parameters: { docs: { story: { height: '450px' } } },
  render: args => {
    return (
      <VStack>
        <OverflowMenuGroup>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
              <OverflowMenuSpan icon={PersonIcon}>
                Navn Navnesen
              </OverflowMenuSpan>
            </OverflowMenuList>
            <OverflowMenuListHeader>Header</OverflowMenuListHeader>
            <OverflowMenuList>
              <OverflowMenuLink href="/">Link</OverflowMenuLink>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
              >
                Handling
              </OverflowMenuButton>
            </OverflowMenuList>
            <OverflowMenuDivider />
            <OverflowMenuListHeader>Header</OverflowMenuListHeader>
            <OverflowMenuList>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
              >
                Handling
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
                icon={EditIcon}
              >
                Rediger
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
                icon={TrashIcon}
              >
                Slett
              </OverflowMenuButton>
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithButtons: Story = {
  render: args => {
    return (
      <VStack>
        <OverflowMenuGroup>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
              >
                Handling
              </OverflowMenuButton>
            </OverflowMenuList>
            <OverflowMenuDivider />
            <OverflowMenuListHeader>Header</OverflowMenuListHeader>
            <OverflowMenuList>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
              >
                Handling
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
                icon={EditIcon}
              >
                Rediger
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  null;
                }}
                icon={TrashIcon}
              >
                Slett
              </OverflowMenuButton>
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithNavigation: Story = {
  render: args => {
    return (
      <VStack>
        <OverflowMenuGroup>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <nav>
              <OverflowMenuList>
                <OverflowMenuLink href="/">Link</OverflowMenuLink>
                <OverflowMenuLink href="/">Link</OverflowMenuLink>
                <OverflowMenuLink href="/">Link</OverflowMenuLink>
              </OverflowMenuList>
            </nav>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithItemsProp: Story = {
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

export const WithStaticUserProp: Story = {
  args: {
    userProps: { name: 'Brukernavn' },
  },
  parameters: { docs: { story: { height: '100px' } } },
  render: args => (
    <VStack>
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} />
      </OverflowMenuGroup>
    </VStack>
  ),
};

export const WithInteractiveUserProp: Story = {
  parameters: { docs: { story: { height: '100px' } } },
  args: {
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

export const WithNavItemsProp: Story = {
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
