import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps } from '.';

export default {
  title: 'dds-components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export const Default = (args: ToggleButtonGroupProps) => (
  <StoryTemplate title="ToggleButtonGroup - default">
    <ToggleButtonGroup {...args}>
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />{' '}
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />{' '}
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />
    </ToggleButtonGroup>
  </StoryTemplate>
);

export const WithLabel = (args: ToggleButtonGroupProps) => (
  <StoryTemplate title="ToggleButtonGroup - with label">
    <ToggleButtonGroup {...args} label="Label">
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />{' '}
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />{' '}
      <ToggleButton label="Tekst" /> <ToggleButton label="Tekst" />
    </ToggleButtonGroup>
  </StoryTemplate>
);
