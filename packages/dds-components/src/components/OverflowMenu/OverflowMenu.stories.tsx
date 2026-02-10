import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { EditIcon, MenuIcon, PersonIcon, TrashIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { OverflowMenuToggle } from './components/OverflowMenuToggle';

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

const { className, htmlProps, ref, children, style } =
  commonArgTypesWithNodeChildren;

export default {
  title: 'dds-components/Components/OverflowMenu',
  component: OverflowMenu,
  argTypes: {
    className,
    htmlProps,
    ref,
    children,
    style,
  },
  parameters: {
    docs: {
      story: { height: '350px' },
    },
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof OverflowMenu>;

type Story = StoryObj<typeof OverflowMenu>;

export const Preview: Story = {
  parameters: { docs: { story: { height: '540px' } } },
  render: args => {
    return (
      <VStack>
        <OverflowMenuGroup isInitiallyOpen>
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
                  //kun for showcase
                }}
              >
                Knapp
              </OverflowMenuButton>
              <OverflowMenuToggle>Toggle</OverflowMenuToggle>
            </OverflowMenuList>
            <OverflowMenuDivider />
            <OverflowMenuListHeader>Varianter</OverflowMenuListHeader>
            <OverflowMenuList>
              <OverflowMenuButton
                loading
                onClick={() => {
                  //kun for showcase
                }}
              >
                Loading knapp
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  //kun for showcase
                }}
                icon={EditIcon}
              >
                Med ikon
              </OverflowMenuButton>
              <OverflowMenuButton
                onClick={() => {
                  //kun for showcase
                }}
                icon={TrashIcon}
                purpose="danger"
              >
                Danger
              </OverflowMenuButton>
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithOnOpenAndOnClose: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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

export const WithAsyncClick: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [text, setText] = useState('Klikk på "Handling" i menyen');
    const click = async () => {
      setText('Jobber...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      setText('Ferdig!');
    };
    return (
      <VStack>
        <span>{text}</span>
        <OverflowMenuGroup>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
              <OverflowMenuButton onClickAsync={click}>
                Handling
              </OverflowMenuButton>
            </OverflowMenuList>
            <OverflowMenuDivider />
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};
