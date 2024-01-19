import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta } from '@storybook/react';

import { FavStar, type FavStarProps } from './FavStar';

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
