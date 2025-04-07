import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { htmlPropsArgType } from '../../storybook/helpers';
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
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { height: '350px', inline: true },
      canvas: { sourceState: 'shown' },
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
                loading
                onClick={() => {
                  null;
                }}
              >
                Handling 2
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

export const Controlled: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <VStack>
        Menyen er {isOpen ? 'åpen' : 'lukket'}.
        <OverflowMenuGroup isOpen={isOpen} setIsOpen={setIsOpen}>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
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

export const WithOnOpenAndOnClose: Story = {
  render: args => {
    const [text, setText] = useState('aktiver Popover');
    const onOpen = () => setText('onOpen ble kalt');
    const onClose = () => setText('onClose ble kalt');
    return (
      <VStack>
        {text}.
        <OverflowMenuGroup onOpen={onOpen} onClose={onClose}>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
              <OverflowMenuButton icon={EditIcon}>Rediger</OverflowMenuButton>
              <OverflowMenuButton icon={TrashIcon} purpose="danger">
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
                <OverflowMenuLink href="/">Link</OverflowMenuLink>
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
