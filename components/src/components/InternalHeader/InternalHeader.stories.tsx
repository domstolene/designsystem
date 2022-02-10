import { StoryTemplate } from '../../storybook/StoryTemplate';
import { InternalHeader, InternalHeaderProps } from '.';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export default {
  title: 'design system/InternalHeader',
  component: InternalHeader,
  argTypes: {
    applicationName: { control: { type: 'text' } },
    currentPageHref: { control: { type: 'text' } },
    smallScreen: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: [
        'style',
        'contextMenuElements',
        'navigationElements',
        'userProps'
      ]
    }
  }
};

const navigationLink = {
  href: '#',
  title: 'menypunkt'
};

const uniqueNavigationLink = {
  href: '#/',
  title: 'menypunkt'
};

const longNavigationLink = {
  href: '#',
  title: 'Veldig veldig veldig velidg lang tittel her'
};

const navigationLinks = [
  navigationLink,
  navigationLink,
  navigationLink,
  longNavigationLink
];

const user = {
  name: 'Navn Navnesen'
};

const userWithHref = {
  ...user,
  href: '#'
};

const menuElementWithIcon = {
  title: 'action',
  Icon: CreateOutlinedIcon,
  onClick: () => {}
};
const menuElement = {
  title: 'menypunkt',
  href: '#'
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
  <StoryTemplate title="InternalHeader - default">
    <InternalHeader applicationName="Navn på applikasjon" {...args} />
  </StoryTemplate>
);

export const WithNavigationAndContextMenu = (args: InternalHeaderProps) => (
  <StoryTemplate title="InternalHeader - default">
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
    <StoryTemplate title="InternalHeader - with current page">
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

export const NoStoryHeading = (args: InternalHeaderProps) => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={navigationLinks}
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

export const SmallScreen = () => (
  <StoryTemplate title="InternalHeader - small screen">
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={menuElements}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);
