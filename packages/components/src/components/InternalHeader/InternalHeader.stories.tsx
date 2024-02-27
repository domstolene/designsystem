import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { EditIcon } from '../Icon/icons';

import { InternalHeader } from '.';

export default {
  title: 'dds-components/InternalHeader',
  component: InternalHeader,
  argTypes: {
    applicationName: { control: { type: 'text' } },
    applicationDesc: { control: { type: 'text' } },
    currentPageHref: { control: { type: 'text' } },
    smallScreen: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

const navigationLink = {
  href: '#',
  title: 'navigasjonspunkt',
};

const uniqueNavigationLink = {
  href: '#/',
  title: 'unik navigasjonspunkt',
};

const longNavigationLink = {
  href: '#',
  title: 'Veldig veldig veldig velidg lang tittel her',
};

const navigationLinks = [navigationLink, navigationLink, navigationLink];
const navigationLinksWithLong = [...navigationLinks, longNavigationLink];

const user = {
  name: 'Navn Navnesen',
};

const userWithHref = {
  ...user,
  href: '#',
};

const menuElementWithIcon = {
  title: 'action',
  icon: EditIcon,
  onClick: () => null,
};
const menuElement = {
  title: 'kontekstmenypunkt',
  href: '#',
};

const menuElements = [menuElement, menuElementWithIcon, menuElement];

type Story = StoryObj<typeof InternalHeader>;

export const Default: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
  },
  decorators: Story => (
    <StoryTemplate gap="40px" containerStyle={{ alignItems: 'stretch' }}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <InternalHeader {...args} />
      <InternalHeader
        {...args}
        navigationElements={navigationLinks}
        contextMenuElements={menuElements}
        userProps={user}
      />
      <InternalHeader
        {...args}
        navigationElements={[navigationLink, uniqueNavigationLink]}
        contextMenuElements={menuElements}
        userProps={user}
        currentPageHref="#"
      />
      <InternalHeader
        {...args}
        navigationElements={navigationLinks}
        userProps={userWithHref}
      />
      <InternalHeader
        {...args}
        navigationElements={navigationLinks}
        contextMenuElements={menuElements}
        userProps={userWithHref}
      />
      <InternalHeader
        {...args}
        contextMenuElements={menuElements}
        userProps={user}
      />
      <InternalHeader
        {...args}
        navigationElements={navigationLinks}
        contextMenuElements={menuElements}
        userProps={user}
        smallScreen
      />
      <InternalHeader
        {...args}
        navigationElements={navigationLinks}
        userProps={user}
        smallScreen
      />
    </>
  ),
};

export const WithNavigationAndContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: navigationLinks,
    contextMenuElements: menuElements,
    userProps: user,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const WithCurrentPage: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: [navigationLink, uniqueNavigationLink],
    contextMenuElements: menuElements,
    userProps: user,
    currentPageHref: '#',
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const SmallScreenWithNavigation: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: navigationLinks,
    smallScreen: true,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const SmallScreenWithContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuElements: menuElements,
    smallScreen: true,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const SmallScreenWithNavigationAndContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuElements: menuElements,
    navigationElements: navigationLinks,
    userProps: user,
    smallScreen: true,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};
export const WithNavigationLongLink: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: navigationLinksWithLong,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const NonInteractiveUserOnly: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    userProps: user,
  },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};
