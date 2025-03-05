import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
import { EditIcon } from '../Icon/icons';
import { StoryVStack } from '../Stack/utils';

import { InternalHeader } from '.';

export default {
  title: 'dds-components/InternalHeader',
  component: InternalHeader,
  argTypes: {
    navItems: { control: false },
    contextMenuItems: { control: false },
    user: { control: false },
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true, height: '320px' },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof InternalHeader>;

const navigationLink = {
  href: '#',
  children: 'navlenke',
};

const uniqueNavigationLink = {
  href: '#/',
  children: 'unik navlenke',
};

const longNavigationLink = {
  href: '#',
  children: 'Veldig veldig veldig velidg lang lenke her',
};

const navigationLinks = [navigationLink, navigationLink];
const navigationLinksWithLong = [...navigationLinks, longNavigationLink];

const user = {
  children: 'Navn Navnesen',
};

const userWithHref = {
  ...user,
  href: '#',
};

const menuElementWithIcon = {
  children: 'handling',
  icon: EditIcon,
  onClick: () => null,
};
const menuElement = {
  children: 'kontekstmenypunkt',
  href: '#',
};

const menuElements = [menuElement, menuElementWithIcon, menuElement];

type Story = StoryObj<typeof InternalHeader>;

export const WithNavigationAndContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navItems: navigationLinks,
    contextMenuItems: menuElements,
    user,
  },
};

export const Responsive: Story = {
  parameters: { docs: { story: { height: '520px' } } },
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navItems: navigationLinks,
    contextMenuItems: menuElements,
    user,
    smallScreenBreakpoint: 'xs',
  },
};

export const WithCurrentPage: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navItems: [navigationLink, uniqueNavigationLink],
    contextMenuItems: menuElements,
    user,
    currentPageHref: '#',
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
        navItems={navigationLinks}
        contextMenuItems={menuElements}
        user={user}
      />
      <InternalHeader
        {...args}
        navItems={[navigationLink, uniqueNavigationLink]}
        contextMenuItems={menuElements}
        user={user}
        currentPageHref="#"
      />
      <InternalHeader
        {...args}
        navItems={navigationLinks}
        user={userWithHref}
      />
      <InternalHeader
        {...args}
        navItems={navigationLinks}
        contextMenuItems={menuElements}
        user={userWithHref}
      />
      <InternalHeader {...args} contextMenuItems={menuElements} user={user} />
      <InternalHeader
        {...args}
        navItems={navigationLinks}
        contextMenuItems={menuElements}
        user={user}
        smallScreenBreakpoint="xs"
      />
      <InternalHeader
        {...args}
        navItems={navigationLinks}
        user={user}
        smallScreenBreakpoint="xs"
      />
    </StoryVStack>
  ),
};

export const ResponsiveWithNavigation: Story = {
  parameters: { docs: { story: { height: '220px' } } },
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navItems: navigationLinks,
    smallScreenBreakpoint: 'sm',
  },
};

export const ResponsiveWithContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuItems: menuElements,
    smallScreenBreakpoint: 'sm',
  },
};

export const ResponsiveWithNavigationAndContextMenu: Story = {
  parameters: { docs: { story: { height: '420px' } } },
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuItems: menuElements,
    navItems: navigationLinks,
    user: user,
    smallScreenBreakpoint: 'sm',
  },
};

export const WithNavigationLongLink: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    navItems: navigationLinksWithLong,
  },
};

export const NonInteractiveUserOnly: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    user: user,
  },
};

export const WithHomeLink: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    applicationHref: '#',
  },
};
