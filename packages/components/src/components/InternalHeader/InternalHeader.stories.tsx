import { type Meta, type StoryObj } from '@storybook/react';

import { EditIcon } from '../Icon/icons';
import { StoryVStack } from '../Stack/utils';

import { InternalHeader } from '.';

export default {
  title: 'dds-components/InternalHeader',
  component: InternalHeader,
  argTypes: {
    applicationName: { control: 'text' },
    applicationDesc: { control: 'text' },
    currentPageHref: { control: 'text' },
    applicationHref: { control: 'text' },
    smallScreen: { control: 'boolean' },
    navigationElements: { control: false },
    contextMenuElements: { control: false },
    userProps: { control: false },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true, height: '550px' },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof InternalHeader>;

const navigationLink = {
  href: '#',
  title: 'navlenke',
};

const uniqueNavigationLink = {
  href: '#/',
  title: 'unik navlenke',
};

const longNavigationLink = {
  href: '#',
  title: 'Veldig veldig veldig velidg lang lenke her',
};

const navigationLinks = [navigationLink, navigationLink];
const navigationLinksWithLong = [...navigationLinks, longNavigationLink];

const user = {
  name: 'Navn Navnesen',
};

const userWithHref = {
  ...user,
  href: '#',
};

const menuElementWithIcon = {
  title: 'handling',
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
};

export const Overview: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
  },
  render: args => (
    <StoryVStack align="stretch">
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
    </StoryVStack>
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
};

export const SmallScreenWithNavigation: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: navigationLinks,
    smallScreen: true,
  },
};

export const SmallScreenWithContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuElements: menuElements,
    smallScreen: true,
  },
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
};

export const WithNavigationLongLink: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navigationElements: navigationLinksWithLong,
  },
};

export const NonInteractiveUserOnly: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    userProps: user,
  },
};

export const WithHomeLink: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    applicationHref: '#',
  },
};
