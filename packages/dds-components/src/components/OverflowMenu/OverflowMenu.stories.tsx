import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { EditIcon, MenuIcon, PersonIcon, TrashIcon } from '../Icon/icons';
import { VStack } from '../Stack';

import {
  OverflowMenu,
  OverflowMenuButton,
  OverflowMenuDivider,
  OverflowMenuGroup,
  OverflowMenuLink,
  OverflowMenuList,
  OverflowMenuListHeader,
  OverflowMenuSpan,
} from '.';

export default {
  title: 'dds-components/OverflowMenu',
  component: OverflowMenu,
  argTypes: {
    offset: { control: 'number' },
    anchorRef: { control: false },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { height: '350px', inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof OverflowMenu>;

type Story = StoryObj<typeof OverflowMenu>;

export const Default: Story = {
  parameters: { docs: { story: { height: '480px' } } },
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
                purpose="danger"
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
                purpose="danger"
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
  parameters: { docs: { story: { height: '250px' } } },
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
                <OverflowMenuLink href="/" purpose="danger">
                  Link
                </OverflowMenuLink>
              </OverflowMenuList>
            </nav>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithStaticUserOnly: Story = {
  parameters: { docs: { story: { height: '160px' } } },
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
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};
