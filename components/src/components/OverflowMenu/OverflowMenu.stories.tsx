import { useRef, useState } from 'react';
import { OverflowMenu, OverflowMenuProps } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Button } from '../Button';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

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
    onClick: () => {}
  },
  {
    title: 'Handling 3',
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
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="OverflowMenu - default" display="flex-centered">
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const WithStaticUser = (args: OverflowMenuProps) => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate
      title="OverflowMenu - with static user"
      display="flex-centered"
    >
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
        userProps={{ name: 'Brukernavn' }}
      />
    </StoryTemplate>
  );
};

export const WithInteractiveUser = (args: OverflowMenuProps) => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate
      title="OverflowMenu - with interactive user"
      display="flex-centered"
    >
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
      />
    </StoryTemplate>
  );
};

export const WithNavigation = (args: OverflowMenuProps) => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate
      title="OverflowMenu - with navigation"
      display="flex-centered"
    >
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
        navItems={navItems}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const WithNavigationAndInteractiveUser = (args: OverflowMenuProps) => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate
      title="OverflowMenu - with navigation and interactive user"
      display="flex-centered"
    >
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
        navItems={navItems}
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const Long = (args: OverflowMenuProps) => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="OverflowMenu - long" display="flex-centered">
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        {...args}
        isOpen={!isClosed}
        onClose={close}
        anchorRef={buttonRef}
        items={items}
        navItems={[
          ...navItems,
          {
            title: 'Navigasjon 4',
            href: '#'
          }
        ]}
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
      ></OverflowMenu>
    </StoryTemplate>
  );
};
