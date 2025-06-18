import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { LanguageProvider } from '../../i18n';
import {
  htmlPropsArgType,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { EditIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';

import { InternalHeader } from '.';

const meta: Meta<typeof InternalHeader> = {
  title: 'dds-components/Components/InternalHeader',
  component: InternalHeader,
  argTypes: {
    navItems: { control: false },
    contextMenuItems: { control: false },
    user: { control: false },
    htmlProps: htmlPropsArgType,
  },
  args: { onCurrentPageChange: fn() },
  parameters: {
    docs: {
      story: { inline: true, height: '320px' },
      canvas: { sourceState: 'hidden' },
    },
  },
  decorators: [
    Story => (
      <LanguageProvider language="nb">
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;
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
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved xs brekkpunkt.',
      ),
  ],
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
    <StoryVStack alignItems="stretch">
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
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
};

export const ResponsiveWithContextMenu: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
    contextMenuItems: menuElements,
    smallScreenBreakpoint: 'sm',
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
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
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
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
