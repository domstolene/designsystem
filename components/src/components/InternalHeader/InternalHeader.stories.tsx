import { StoryTemplate } from '../../storybook';
import { InternalHeader, InternalHeaderProps } from '.';
import { EditIcon } from '../../icons/tsx';

export default {
  title: 'design system/InternalHeader',
  component: InternalHeader,
  argTypes: {
    applicationName: { control: { type: 'text' } },
    currentPageHref: { control: { type: 'text' } },
    smallScreen: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: [
        'style',
        'contextMenuElements',
        'navigationElements',
        'userProps',
      ],
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

const navigationLinks = [
  navigationLink,
  navigationLink,
  navigationLink,
  longNavigationLink,
];

const shortNavigationLinks = [navigationLink, navigationLink, navigationLink];

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
  onClick: () => {},
};
const menuElement = {
  title: 'kontekstmenypunkt',
  href: '#',
};

const menuElements = [menuElement, menuElementWithIcon, menuElement];

export const Overview = () => (
  <StoryTemplate title="InternalHeader - overview" gap="40px">
    <InternalHeader applicationName="Navn på applikasjon" />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={[navigationLink, uniqueNavigationLink]}
      contextMenuElements={menuElements}
      userProps={user}
      currentPageHref="#"
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      userProps={userWithHref}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={userWithHref}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      contextMenuElements={menuElements}
      userProps={user}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
      smallScreen
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);

export const Default = (args: InternalHeaderProps) => (
  <StoryTemplate title="InternalHeader - default" display="block">
    <InternalHeader applicationName="Navn på applikasjon" {...args} />
  </StoryTemplate>
);

export const WithNavigationAndContextMenu = (args: InternalHeaderProps) => (
  <StoryTemplate
    title="InternalHeader - with nav and context menu"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
      {...args}
    />
  </StoryTemplate>
);

export const WithCurrentPage = (args: InternalHeaderProps) => {
  return (
    <StoryTemplate title="InternalHeader - with current page" display="block">
      <InternalHeader
        applicationName="Navn på applikasjon"
        navigationElements={[navigationLink, uniqueNavigationLink]}
        contextMenuElements={menuElements}
        userProps={user}
        currentPageHref="#"
        {...args}
      />
    </StoryTemplate>
  );
};

export const SmallScreenWithNavigation = () => (
  <StoryTemplate
    title="InternalHeader - small screen with navigation"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      smallScreen
    />
  </StoryTemplate>
);

export const SmallScreenWithContextMenu = (args: InternalHeaderProps) => {
  return (
    <StoryTemplate
      title="InternalHeader - small screen with context menu"
      display="block"
    >
      <InternalHeader
        applicationName="Navn på applikasjon"
        contextMenuElements={menuElements}
        userProps={user}
        {...args}
      />
    </StoryTemplate>
  );
};

export const SmallScreenWithNavigationAndContextMenu = () => (
  <StoryTemplate
    title="InternalHeader - small screen with navigation and context menu"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);

export const NoStoryHeading = (args: InternalHeaderProps) => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={shortNavigationLinks}
    contextMenuElements={menuElements}
    userProps={user}
    {...args}
  />
);

export const NoStoryHeadingSmallScreen = () => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={navigationLinks}
    contextMenuElements={menuElements}
    userProps={user}
    smallScreen
  />
);

export const NoStoryHeadingSmallScreenLong = () => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={[...navigationLinks, ...navigationLinks]}
    contextMenuElements={[...navigationLinks, ...navigationLinks]}
    userProps={user}
    smallScreen
  />
);

export const NonInteractiveUserOnly = () => (
  <StoryTemplate title="InternalHeader - non-interactive user only">
    <InternalHeader applicationName="Navn på applikasjon" userProps={user} />
  </StoryTemplate>
);
