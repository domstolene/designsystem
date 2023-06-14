import { Chip, ChipGroup, ChipGroupProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/Chip/ChipGroup',
  component: ChipGroup,
};

export const Default = (args: ChipGroupProps) => (
  <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>
);
