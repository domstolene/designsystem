import {
  OverflowMenu,
  OverflowMenuProps,
  OverflowMenuGroup,
  OverflowMenuContextItem,
  OverflowMenuNavItem,
} from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Button } from '../Button';
import { PlusCircledIcon, MenuIcon } from '../Icon/icons';

export default {
  title: 'dds-components/OverflowMenu',
  component: OverflowMenu,
};

const items: OverflowMenuContextItem[] = [
  {
    title: 'Handling',
    onClick: () => null,
  },
  {
    title: 'Handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
  {
    title: 'Lenke 1',
    href: '#',
  },
];

const navItems: OverflowMenuNavItem[] = [
  {
    title: 'Navigasjon',
    href: '#',
  },
  {
    title: 'Navigasjon 2',
    href: '#',
  },
];

export const Default = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate title="OverflowMenu - default" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} items={items} />
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};

export const WithStaticUser = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate
      title="OverflowMenu - with static user"
      display="flex-centered"
    >
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu
          {...args}
          items={items}
          userProps={{ name: 'Brukernavn' }}
        />
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};

export const WithInteractiveUser = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate
      title="OverflowMenu - with interactive user"
      display="flex-centered"
    >
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu
          {...args}
          items={items}
          userProps={{ name: 'Brukernavn', onClick: () => null }}
        />
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};

export const WithNavigation = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate
      title="OverflowMenu - with navigation"
      display="flex-centered"
    >
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu {...args} items={items} navItems={navItems} />
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};

export const WithNavigationAndInteractiveUser = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate
      title="OverflowMenu - with navigation and interactive user"
      display="flex-centered"
    >
      <OverflowMenuGroup>
        <Button icon={MenuIcon} aria-label="Åpne meny" />
        <OverflowMenu
          {...args}
          items={items}
          navItems={navItems}
          userProps={{ name: 'Brukernavn', onClick: () => null }}
        ></OverflowMenu>
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};
