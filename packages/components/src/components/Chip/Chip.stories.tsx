import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Chip, type ChipProps } from '.';

export default {
  title: 'dds-components/Chip/Chip',
  component: Chip,
  argTypes: {
    text: { control: { type: 'text' } },
  },
};

export const Default = (args: ChipProps) => (
  <StoryTemplate title="Chip - default">
    <Chip {...args} text={args.text ?? 'Chip'} />
  </StoryTemplate>
);
