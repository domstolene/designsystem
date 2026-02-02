import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  StoryLabel,
  commonArgTypes,
  ddsProviderDecorator,
  windowWidthDecorator,
} from '../../storybook';
import { EditIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { StoryVStack } from '../layout/Stack/utils';

import { InternalHeader } from '.';

const meta: Meta<typeof InternalHeader> = {
  title: 'dds-components/Components/InternalHeader',
  component: InternalHeader,
  argTypes: {
    navItems: { control: false },
    contextMenuItems: { control: false },
    user: { control: false },
    ...commonArgTypes,
  },
  args: { onCurrentPageChange: fn() },
  parameters: {
    docs: {
      story: { height: '320px' },
    },
  },
  decorators: [ddsProviderDecorator],
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

const navigationLinks = [navigationLink, navigationLink];

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

export const Variants: Story = {
  args: {
    applicationName: 'Lovisa',
    applicationDesc: 'Produktnavn',
  },
  render: args => (
    <StoryVStack alignItems="stretch">
      <VStack>
        <StoryLabel>Med navigasjon og kontekstmeny</StoryLabel>
        <InternalHeader
          {...args}
          navItems={navigationLinks}
          contextMenuItems={menuElements}
          user={user}
        />
      </VStack>
      <VStack>
        <StoryLabel>Med aktiv side</StoryLabel>
        <InternalHeader
          {...args}
          navItems={[navigationLink, uniqueNavigationLink]}
          contextMenuItems={menuElements}
          user={user}
          currentPageHref="#"
        />
      </VStack>
      <VStack>
        <StoryLabel>Med lenke til bruker i kontekstmeny</StoryLabel>
        <InternalHeader
          {...args}
          navItems={navigationLinks}
          user={userWithHref}
        />
      </VStack>
      <VStack>
        <StoryLabel>Med statisk brukernavn i kontekstmeny</StoryLabel>
        <InternalHeader {...args} contextMenuItems={menuElements} user={user} />
      </VStack>
      <VStack>
        <StoryLabel>Med lenke til hjemmesiden</StoryLabel>
        <InternalHeader {...args} applicationHref="#" />
      </VStack>
      <VStack gap="x0.5">
        <StoryLabel>
          Med navigasjon og kontekstmeny - versjon for liten skjerm
        </StoryLabel>
        <InternalHeader
          {...args}
          navItems={navigationLinks}
          contextMenuItems={menuElements}
          user={user}
          smallScreenBreakpoint="xl"
        />
      </VStack>
    </StoryVStack>
  ),
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
