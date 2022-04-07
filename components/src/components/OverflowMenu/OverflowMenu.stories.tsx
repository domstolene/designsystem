import { useRef, useState } from 'react';
import { OverflowMenu, OverflowMenuItem } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Button } from '../Button';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

export default {
  title: 'design system/OverflowMenu',
  component: OverflowMenu
};

export const Overview = () => {
  const [isClosed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <StoryTemplate title="OverflowMenu - overview">
      <Button Icon={MenuOutlinedIcon} onClick={show} />
      <OverflowMenu isOpen={!isClosed} onClose={close} triggerRef={buttonRef}>
        <OverflowMenuItem name="Action" />
      </OverflowMenu>
    </StoryTemplate>
  );
};

export const Default = () => {
  const [isClosed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="OverflowMenu - default">
      <Button Icon={MenuOutlinedIcon} onClick={show} />
      <OverflowMenu isOpen={!isClosed} onClose={close} triggerRef={buttonRef}>
        <OverflowMenuItem name="Action" onClick={() => {}} />
        <OverflowMenuItem name="Action" onClick={() => {}} />
      </OverflowMenu>
    </StoryTemplate>
  );
};
