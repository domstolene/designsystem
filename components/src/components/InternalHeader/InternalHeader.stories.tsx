import { StoryTemplate } from '../../storybook/StoryTemplate';
import { InternalHeader } from '.';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export default {
  title: 'design system/InternalHeader',
  component: InternalHeader
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

const menuElementWithIcon = {
  title: 'action',
  Icon: CreateOutlinedIcon
};
const menuElement = {
  title: 'menypunkt',
  href: '#'
};

const menuElements = [menuElement, menuElementWithIcon, menuElement];

export const Overview = () => (
  <StoryTemplate title="InternalHeader - overview" gap="40px">
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
      contextMenuElements={menuElements}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);

export const Default = () => (
  <StoryTemplate title="InternalHeader">
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={navigationLinks}
      userProps={user}
    />
  </StoryTemplate>
);

export const WithCurrentPage = () => {
  return (
    <StoryTemplate title="InternalHeader">
      <InternalHeader
        applicationName="Navn på applikasjon"
        navigationElements={[navigationLink, uniqueNavigationLink]}
        contextMenuElements={navigationLinks}
        userProps={user}
        currentPageHref="#"
      />
    </StoryTemplate>
  );
};

export const NoStoryHeading = () => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={navigationLinks}
    contextMenuElements={navigationLinks}
    userProps={user}
  />
);

export const NoStoryHeadingSmallScreen = () => (
  <InternalHeader
    applicationName="Navn på applikasjon"
    navigationElements={navigationLinks}
    contextMenuElements={navigationLinks}
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
  <StoryTemplate title="InternalHeader">
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={navigationLinks}
      userProps={user}
      smallScreen
    />
  </StoryTemplate>
);
