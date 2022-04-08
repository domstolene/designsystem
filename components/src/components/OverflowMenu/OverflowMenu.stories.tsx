import { useRef, useState } from 'react';
import { OverflowMenu } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Button } from '../Button';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default {
  title: 'design system/OverflowMenu',
  component: OverflowMenu
};

export const Default = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    },
    {
      text: 'Handling 3',
      onClick: () => {},
      Icon: AddCircleOutlineOutlinedIcon
    }
  ];
  return (
    <StoryTemplate title="OverflowMenu - default" display="flex-centered">
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const WithStaticUser = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    }
  ];
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
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
        userProps={{ text: 'Brukernavn' }}
      />
    </StoryTemplate>
  );
};

export const WithInteractiveUser = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    }
  ];
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
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
        userProps={{ text: 'Brukernavn', onClick: () => {} }}
      />
    </StoryTemplate>
  );
};

export const WithNavigation = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      text: 'Link',
      href: '#'
    },
    {
      text: 'Link 2',
      href: '#'
    }
  ];
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
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
        navItems={navItems}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const WithNavigationAndInteractiveUser = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      text: 'Link',
      href: '#'
    },
    {
      text: 'Link 2',
      href: '#'
    }
  ];
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
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
        navItems={navItems}
        userProps={{ text: 'Brukernavn', onClick: () => {} }}
      ></OverflowMenu>
    </StoryTemplate>
  );
};

export const Long = () => {
  const [isClosed, setClosed] = useState(true);
  const toggle = () => setClosed(!isClosed);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      text: 'Handling',
      onClick: () => {}
    },
    {
      text: 'Handling 2',
      onClick: () => {}
    },
    {
      text: 'Handling 3',
      onClick: () => {}
    },
    {
      text: 'Handling 4',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      text: 'Link',
      href: '#'
    },
    {
      text: 'Link 2',
      href: '#'
    },
    {
      text: 'Link 3',
      href: '#'
    },
    {
      text: 'Link 4',
      href: '#'
    }
  ];
  return (
    <StoryTemplate title="OverflowMenu - long" display="flex-centered">
      <Button
        Icon={MenuOutlinedIcon}
        onClick={toggle}
        ref={buttonRef}
        aria-haspopup="menu"
      />
      <OverflowMenu
        isOpen={!isClosed}
        onClose={close}
        triggerRef={buttonRef}
        items={items}
        navItems={navItems}
        userProps={{ text: 'Brukernavn', onClick: () => {} }}
      ></OverflowMenu>
    </StoryTemplate>
  );
};
