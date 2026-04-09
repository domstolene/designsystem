import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';
import { Button } from '../Button';
import {
  EditIcon,
  MenuIcon,
  MoreVerticalIcon,
  PersonIcon,
  TrashIcon,
} from '../Icon/icons';
import { VStack } from '../layout';
import { Table } from '../Table';
import { Paragraph } from '../Typography';
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

const meta: Meta<typeof OverflowMenu> = {
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
};

export default meta;

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
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithNoMenuCloseOnAsyncClick: Story = {
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
              <OverflowMenuButton
                onClickAsync={click}
                closeMenuOnClickAsync={false}
              >
                Handling
              </OverflowMenuButton>
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const CustomCloseOnAsyncClick: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [text, setText] = useState('Klikk på "Handling" i menyen.');

    return (
      <VStack>
        <Paragraph>
          Lukking av menyen er forsinket i forhold til når async-kall fullfører.
        </Paragraph>
        <Paragraph>{text}</Paragraph>
        <OverflowMenuGroup>
          <Button icon={MenuIcon} aria-label="Åpne meny" />
          <OverflowMenu {...args}>
            <OverflowMenuList>
              <OverflowMenuButton
                onClickAsync={async () => {
                  setText('Jobber...');
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  setText('Ferdig!');
                }}
                closeMenuOnClickAsync={async close => {
                  await new Promise(r => setTimeout(r, 1000)); // det som skal fullføre
                  close();
                }}
              >
                Handling
              </OverflowMenuButton>
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </VStack>
    );
  },
};

export const WithinTable: Story = {
  parameters: {
    docs: { story: { height: '540px' } },
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    return (
      <VStack>
        <Table size="small">
          <Table.Head>
            <Table.Row>
              <Table.Cell>Navn</Table.Cell>
              <Table.Cell layout="right">Handlinger</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{'Navn Navnesen'}</Table.Cell>
              <Table.Cell layout="right">
                <OverflowMenuGroup>
                  <Button
                    purpose="tertiary"
                    size="xsmall"
                    icon={MoreVerticalIcon}
                  />
                  <OverflowMenu {...args}>
                    <OverflowMenuList>
                      <OverflowMenuLink icon={EditIcon}>
                        {'Dette er en lenke'}
                      </OverflowMenuLink>
                      <OverflowMenuButton icon={EditIcon}>
                        {'Dette er en knapp'}
                      </OverflowMenuButton>
                    </OverflowMenuList>
                  </OverflowMenu>
                </OverflowMenuGroup>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </VStack>
    );
  },
};
