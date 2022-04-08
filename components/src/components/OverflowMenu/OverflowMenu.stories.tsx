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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
      onClick: () => {}
    },
    {
      name: 'Handling 3',
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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
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
        staticUsername="Brukernavn"
        userProps={{ name: 'Brukernavn' }}
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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
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
        staticUsername="Brukernavn"
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      name: 'Link',
      href: '#'
    },
    {
      name: 'Link 2',
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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      name: 'Link',
      href: '#'
    },
    {
      name: 'Link 2',
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
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
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
      name: 'Handling',
      onClick: () => {}
    },
    {
      name: 'Handling 2',
      onClick: () => {}
    },
    {
      name: 'Handling 3',
      onClick: () => {}
    },
    {
      name: 'Handling 4',
      onClick: () => {}
    }
  ];

  const navItems = [
    {
      name: 'Link',
      href: '#'
    },
    {
      name: 'Link 2',
      href: '#'
    },
    {
      name: 'Link 3',
      href: '#'
    },
    {
      name: 'Link 4',
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
        userProps={{ name: 'Brukernavn', onClick: () => {} }}
      ></OverflowMenu>
    </StoryTemplate>
  );
};
