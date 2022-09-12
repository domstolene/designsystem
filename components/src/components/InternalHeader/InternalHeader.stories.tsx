import { StoryTemplate } from '../../storybook';
import { InternalHeader, InternalHeaderProps } from '.';
import { EditIcon } from '../../icons/tsx';

export default {
  title: 'design system/InternalHeader',
  component: InternalHeader,
  argTypes: {
    applicationName: { control: { type: 'text' } },
    applicationDesc: { control: { type: 'text' } },
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
  <StoryTemplate
    title="InternalHeader - overview"
    gap="40px"
    containerStyle={{ alignItems: 'stretch' }}
  >
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={[navigationLink, uniqueNavigationLink]}
      contextMenuElements={menuElements}
      userProps={user}
      currentPageHref="#"
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      userProps={userWithHref}
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={userWithHref}
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      contextMenuElements={menuElements}
      userProps={user}
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
      smallScreen
    />
    <InternalHeader
      applicationDesc="Beskrivelse/tittel på underside"
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);

export const Default = (args: InternalHeaderProps) => (
  <StoryTemplate title="InternalHeader - default" display="block">
    <InternalHeader
      applicationName="Navn på applikasjon"
      applicationDesc="Beskrivelse/tittel på underside"
      {...args}
    />
  </StoryTemplate>
);

export const WithNavigationAndContextMenu = (args: InternalHeaderProps) => (
  <StoryTemplate
    title="InternalHeader - with nav and context menu"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      applicationDesc="Beskrivelse/tittel på underside"
      {...args}
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
    />
  </StoryTemplate>
);

export const WithCurrentPage = (args: InternalHeaderProps) => {
  return (
    <StoryTemplate title="InternalHeader - with current page" display="block">
      <InternalHeader
        applicationName="Navn på applikasjon"
        applicationDesc="Beskrivelse/tittel på underside"
        {...args}
        navigationElements={[navigationLink, uniqueNavigationLink]}
        contextMenuElements={menuElements}
        userProps={user}
        currentPageHref="#"
      />
    </StoryTemplate>
  );
};

export const SmallScreenWithNavigation = (args: InternalHeaderProps) => (
  <StoryTemplate
    title="InternalHeader - small screen with navigation"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      applicationDesc="Beskrivelse/tittel på underside"
      {...args}
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
        applicationDesc="Beskrivelse/tittel på underside"
        {...args}
        contextMenuElements={menuElements}
        userProps={user}
      />
    </StoryTemplate>
  );
};

export const SmallScreenWithNavigationAndContextMenu = (
  args: InternalHeaderProps
) => (
  <StoryTemplate
    title="InternalHeader - small screen with navigation and context menu"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      applicationDesc="Beskrivelse/tittel på underside"
      {...args}
      userProps={user}
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      smallScreen
    />
  </StoryTemplate>
);

export const NoStoryHeading = (args: InternalHeaderProps) => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    applicationDesc="Beskrivelse/tittel på underside"
    {...args}
    userProps={user}
    navigationElements={shortNavigationLinks}
    contextMenuElements={menuElements}
  />
);

export const NoStoryHeadingSmallScreen = (args: InternalHeaderProps) => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    applicationDesc="Beskrivelse/tittel på underside"
    {...args}
    navigationElements={navigationLinks}
    contextMenuElements={menuElements}
    userProps={user}
    smallScreen
  />
);

export const NoStoryHeadingSmallScreenLong = (args: InternalHeaderProps) => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    applicationDesc="Beskrivelse/tittel på underside"
    {...args}
    navigationElements={[...navigationLinks, ...navigationLinks]}
    contextMenuElements={[...navigationLinks, ...navigationLinks]}
    userProps={user}
    smallScreen
  />
);

export const NonInteractiveUserOnly = (args: InternalHeaderProps) => (
  <StoryTemplate
    title="InternalHeader - non-interactive user only"
    display="block"
  >
    <InternalHeader
      applicationName="Navn på applikasjon"
      applicationDesc="Beskrivelse/tittel på underside"
      {...args}
      userProps={user}
    />
  </StoryTemplate>
);
