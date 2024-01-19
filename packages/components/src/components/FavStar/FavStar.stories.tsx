import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta } from '@storybook/react';
import { useRef } from 'react';

import { FavStar, type FavStarProps } from './FavStar';
import { Button } from '../Button';

const meta: Meta<typeof FavStar> = {
  title: 'dds-components/FavStar',
  component: FavStar,
  argTypes: {},
};

export default meta;

export const Default = (args: Partial<FavStarProps>) => {
  return (
    <StoryTemplate title="FavStar - default">
      <FavStar {...args} />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<FavStarProps>) => {
  return (
    <StoryTemplate title="FavStar - default">
      <FavStar {...args} />
    </StoryTemplate>
  );
};

export const RefFocus = (args: Partial<FavStarProps>) => {
  const favstarRef = useRef<HTMLInputElement>(null);
  return (
    <StoryTemplate title="FavStar - default">
      <FavStar {...args} ref={favstarRef} />
      <Button onClick={() => favstarRef.current?.focus()}>Focus</Button>
    </StoryTemplate>
  );
};
