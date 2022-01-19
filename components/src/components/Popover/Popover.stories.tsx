import { Popover, PopoverProps } from '.';
import { Button } from '../Button';

import { StoryTemplate } from '../../storybook/StoryTemplate';
import { useRef, useState, useEffect } from 'react';
import { useOnClickOutside } from '../../hooks';
import { useOnKeyDown } from '../../hooks';
import { Typography } from '../Typography';

export default {
  title: 'design system/Popover',
  component: Popover,
  argTypes: {
    withCloseButton: { control: { type: 'boolean' } },
    placement: { control: { type: 'text' } }
  }
};

export const Overview = () => {
  const [isOpen1, setOpen1] = useState(false);
  const toggleIsOpen1 = () => {
    setOpen1(!isOpen1);
  };
  const close1 = () => setOpen1(false);

  const buttonRef1 = useRef(null);
  const popoverRef1 = useRef(null);

  const [isOpen2, setOpen2] = useState(false);
  const toggleIsOpen2 = () => {
    setOpen2(!isOpen2);
  };

  const buttonRef2 = useRef(null);
  const popoverRef2 = useRef(null);

  useOnClickOutside(
    popoverRef1,
    () => {
      setOpen1(false);
    },
    buttonRef1
  );
  useOnClickOutside(
    popoverRef2,
    () => {
      setOpen2(false);
    },
    buttonRef2
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setOpen1(false);
      setOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  return (
    <StoryTemplate title="Popover - overview">
      <div>
        <Button
          label="Åpne"
          aria-controls="popover1"
          aria-haspopup
          onClick={toggleIsOpen1}
          ref={buttonRef1}
        />
        <Popover
          ref={popoverRef1}
          id="popover1"
          isOpen={isOpen1}
          onCloseButton={close1}
          anchorElement={buttonRef1.current}
        >
          Tekst
        </Popover>
      </div>
      <div>
        <Button
          label="Åpne"
          aria-controls="popover2"
          aria-haspopup
          onClick={toggleIsOpen2}
          ref={buttonRef2}
        />
        <Popover
          ref={popoverRef2}
          id="popover2"
          isOpen={isOpen2}
          withCloseButton={false}
          anchorElement={buttonRef2.current}
          placement="left"
        >
          Tekst
        </Popover>
      </div>
    </StoryTemplate>
  );
};

export const OverviewPlacement = () => {
  const [isOpen1, setOpen1] = useState(false);
  const toggleIsOpen1 = () => {
    setOpen1(!isOpen1);
  };
  const close1 = () => setOpen1(false);
  const buttonRef1 = useRef(null);
  const popoverRef1 = useRef(null);
  useOnClickOutside(
    popoverRef1,
    () => {
      setOpen1(false);
    },
    buttonRef1
  );

  const [isOpen2, setOpen2] = useState(false);
  const toggleIsOpen2 = () => {
    setOpen2(!isOpen2);
  };
  const close2 = () => setOpen2(false);
  const buttonRef2 = useRef(null);
  const popoverRef2 = useRef(null);
  useOnClickOutside(
    popoverRef2,
    () => {
      setOpen2(false);
    },
    buttonRef2
  );

  const [isOpen3, setOpen3] = useState(false);
  const toggleIsOpen3 = () => {
    setOpen3(!isOpen3);
  };
  const close3 = () => setOpen3(false);
  const buttonRef3 = useRef(null);
  const popoverRef3 = useRef(null);
  useOnClickOutside(
    popoverRef3,
    () => {
      setOpen3(false);
    },
    buttonRef3
  );

  const [isOpen4, setOpen4] = useState(false);
  const toggleIsOpen4 = () => {
    setOpen4(!isOpen4);
  };
  const close4 = () => setOpen4(false);
  const buttonRef4 = useRef(null);
  const popoverRef4 = useRef(null);
  useOnClickOutside(
    popoverRef4,
    () => {
      setOpen4(false);
    },
    buttonRef4
  );

  useOnKeyDown(['Esc', 'Escape'], () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  });

  return (
    <StoryTemplate
      title="Popover - overview placement"
      style={{ alignItems: 'center' }}
    >
      <div>
        <Button
          label="Åpne"
          aria-controls="popover1"
          aria-haspopup
          onClick={toggleIsOpen1}
          ref={buttonRef1}
        />
        <Popover
          ref={popoverRef1}
          id="popover1"
          isOpen={isOpen1}
          onCloseButton={close1}
          anchorElement={buttonRef1.current}
          placement="top"
        >
          Tekst
        </Popover>
      </div>
      <div>
        <Button
          label="Åpne"
          aria-controls="popover2"
          aria-haspopup
          onClick={toggleIsOpen2}
          ref={buttonRef2}
        />
        <Popover
          ref={popoverRef2}
          id="popover2"
          isOpen={isOpen2}
          onCloseButton={close2}
          anchorElement={buttonRef2.current}
          placement="left"
        >
          Tekst
        </Popover>
      </div>
      <div>
        <Button
          label="Åpne"
          aria-controls="popover3"
          aria-haspopup
          onClick={toggleIsOpen3}
          ref={buttonRef3}
        />
        <Popover
          ref={popoverRef3}
          id="popover3"
          isOpen={isOpen3}
          withCloseButton={false}
          onCloseButton={close3}
          anchorElement={buttonRef3.current}
          placement="right"
        >
          Tekst
        </Popover>
      </div>
      <div>
        <Button
          label="Åpne"
          aria-controls="popover4"
          aria-haspopup
          onClick={toggleIsOpen4}
          ref={buttonRef4}
        />
        <Popover
          ref={popoverRef4}
          id="popover4"
          isOpen={isOpen4}
          withCloseButton={false}
          onCloseButton={close4}
          anchorElement={buttonRef4.current}
          placement="bottom"
        >
          Tekst
        </Popover>
      </div>
    </StoryTemplate>
  );
};

export const Default = (args: PopoverProps) => {
  const [isOpen, setOpen] = useState(false);
  const toggleIsOpen = () => setOpen(!isOpen);
  const close = () => setOpen(false);

  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  useOnClickOutside(
    popoverRef,
    () => {
      setOpen(false);
    },
    buttonRef
  );

  useOnKeyDown(['Esc', 'Escape'], () => {
    setOpen(false);
  });

  return (
    <StoryTemplate title="Popover - default" display="block">
      <Button
        label="Åpne"
        aria-controls="popover1"
        aria-haspopup
        onClick={toggleIsOpen}
        ref={buttonRef}
      />
      <Popover
        ref={popoverRef}
        id="popover1"
        isOpen={isOpen}
        onCloseButton={close}
        anchorElement={buttonRef.current}
        title="Tittel"
        {...args}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography withMargins>
            Dette er en popover med tekst og knapp
          </Typography>
          <Button label="Tekst" />
        </div>
      </Popover>
    </StoryTemplate>
  );
};
