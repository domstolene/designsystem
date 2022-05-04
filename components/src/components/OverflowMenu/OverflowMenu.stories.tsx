import { OverflowMenu, OverflowMenuProps, OverflowMenuGroup } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Button } from '../Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default {
  title: 'design system/OverflowMenu',
  component: OverflowMenu
};

const items = [
  {
    title: 'Handling',
    onClick: () => {}
  },
  {
    title: 'Handling 2',
    onClick: () => {},
    Icon: AddCircleOutlineOutlinedIcon
  },
  {
    title: 'Lenke 1',
    href: '#'
  }
];

const navItems = [
  {
    title: 'Navigasjon',
    href: '#'
  },
  {
    title: 'Navigasjon 2',
    href: '#'
  }
];

export const Default = (args: OverflowMenuProps) => {
  return (
    <StoryTemplate title="OverflowMenu - default" display="flex-centered">
      <OverflowMenuGroup>
        <Button Icon={MenuOutlinedIcon} />
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
        <Button Icon={MenuOutlinedIcon} />
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
        <Button Icon={MenuOutlinedIcon} />
        <OverflowMenu
          {...args}
          items={items}
          userProps={{ name: 'Brukernavn', onClick: () => {} }}
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
      ¨
      <OverflowMenuGroup>
        <Button Icon={MenuOutlinedIcon} />
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
        <Button Icon={MenuOutlinedIcon} />
        <OverflowMenu
          {...args}
          items={items}
          navItems={navItems}
          userProps={{ name: 'Brukernavn', onClick: () => {} }}
        ></OverflowMenu>
      </OverflowMenuGroup>
    </StoryTemplate>
  );
};
