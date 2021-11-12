import { StoryTemplate } from '../../storybook/StoryTemplate';
import { InternalHeader } from '.';

export default {
  title: 'design system/InternalHeader',
  component: InternalHeader
};

const navigationLink = {
  href: '#',
  title: 'menypunkt'
};

const navigationLinks = [navigationLink, navigationLink, navigationLink];

const user = {
  name: 'Navn Navnesen',
  href: '#'
};

export const Overview = () => (
  <StoryTemplate title="InternalHeader - overview" gap="40px">
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={navigationLinks}
      userProps={user}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      contextMenuElements={navigationLinks}
      userProps={user}
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      navigationElements={navigationLinks}
      contextMenuElements={navigationLinks}
      userProps={user}
      smallScreen
    />
    <InternalHeader
      applicationName="Navn på applikasjon"
      contextMenuElements={navigationLinks}
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
