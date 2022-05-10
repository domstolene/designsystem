import { StoryTemplate } from '../../storybook/StoryTemplate';
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps } from '.';

export default {
  title: 'Design system/ToggleButton/Group',
  component: ToggleButtonGroup
};

export const Group = (args: ToggleButtonGroupProps) => (
  <StoryTemplate title="ToggleButtonGroup - default">
    <ToggleButtonGroup {...args}>
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />{' '}
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />{' '}
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />
    </ToggleButtonGroup>
  </StoryTemplate>
);

export const WithLabel = (args: ToggleButtonGroupProps) => (
  <StoryTemplate title="ToggleButtonGroup - with label">
    <ToggleButtonGroup {...args} label="Label">
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />{' '}
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />{' '}
      <ToggleButton text="Tekst" /> <ToggleButton text="Tekst" />
    </ToggleButtonGroup>
  </StoryTemplate>
);
