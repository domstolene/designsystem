import { SB_DESIGNSYSTEM_PREFIX, StoryTemplate } from '../../storybook';
import { ToggleBar, ToggleBarProps, ToggleRadio } from '.';
import { GavelIcon } from '../../icons/tsx';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/ToggleBar`,
  component: ToggleBar,
  argTypes: {
    label: { control: { type: 'text' } },
  },
};

export const Default = (args: ToggleBarProps) => (
  <StoryTemplate title="ToggleBar - default">
    <ToggleBar {...args}>
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
    </ToggleBar>
  </StoryTemplate>
);

export const OverviewWithText = (args: ToggleBarProps) => (
  <StoryTemplate
    title="ToggleBar - overview with text"
    display="grid"
    columnsAmount={2}
  >
    <ToggleBar {...args} size="tiny">
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
    </ToggleBar>
    <ToggleBar {...args} size="tiny">
      <ToggleRadio icon={GavelIcon} label="Alt" name="test1" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test1" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test1" />
    </ToggleBar>
    <ToggleBar {...args} size="small">
      <ToggleRadio label="Alt" name="test2" />
      <ToggleRadio label="Alt" name="test2" />
      <ToggleRadio label="Alt" name="test2" />
    </ToggleBar>
    <ToggleBar {...args} size="small">
      <ToggleRadio icon={GavelIcon} label="Alt" name="test3" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test3" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test3" />
    </ToggleBar>
    <ToggleBar {...args} size="medium">
      <ToggleRadio label="Alt" name="test4" />
      <ToggleRadio label="Alt" name="test4" />
      <ToggleRadio label="Alt" name="test4" />
    </ToggleBar>
    <ToggleBar {...args} size="medium">
      <ToggleRadio icon={GavelIcon} label="Alt" name="test5" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test5" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test5" />
    </ToggleBar>
    <ToggleBar {...args} size="large">
      <ToggleRadio label="Alt" name="test6" />
      <ToggleRadio label="Alt" name="test6" />
      <ToggleRadio label="Alt" name="test6" />
    </ToggleBar>
    <ToggleBar {...args} size="large">
      <ToggleRadio icon={GavelIcon} label="Alt" name="test7" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test7" />
      <ToggleRadio icon={GavelIcon} label="Alt" name="test7" />
    </ToggleBar>
  </StoryTemplate>
);

export const OverviewWithIcon = (args: ToggleBarProps) => (
  <StoryTemplate title="ToggleBar - overview with Icon">
    <ToggleBar {...args} size="tiny">
      <ToggleRadio icon={GavelIcon} name="test1" />
      <ToggleRadio icon={GavelIcon} name="test1" />
      <ToggleRadio icon={GavelIcon} name="test1" />
    </ToggleBar>

    <ToggleBar {...args} size="small">
      <ToggleRadio icon={GavelIcon} name="test3" />
      <ToggleRadio icon={GavelIcon} name="test3" />
      <ToggleRadio icon={GavelIcon} name="test3" />
    </ToggleBar>

    <ToggleBar {...args} size="medium">
      <ToggleRadio icon={GavelIcon} name="test5" />
      <ToggleRadio icon={GavelIcon} name="test5" />
      <ToggleRadio icon={GavelIcon} name="test5" />
    </ToggleBar>
    <ToggleBar {...args} size="large">
      <ToggleRadio icon={GavelIcon} name="test7" />
      <ToggleRadio icon={GavelIcon} name="test7" />
      <ToggleRadio icon={GavelIcon} name="test7" />
    </ToggleBar>
  </StoryTemplate>
);

export const OverviewWithLabel = (args: ToggleBarProps) => (
  <StoryTemplate
    title="ToggleBar - overview with label"
    display="grid"
    columnsAmount={2}
  >
    <ToggleBar {...args} label={args.label || 'Label'} size="tiny">
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
      <ToggleRadio label="Alt" name="test" />
    </ToggleBar>
    <ToggleBar {...args} label={args.label || 'Label'} size="small">
      <ToggleRadio label="Alt" name="test2" />
      <ToggleRadio label="Alt" name="test2" />
      <ToggleRadio label="Alt" name="test2" />
    </ToggleBar>
    <ToggleBar {...args} label={args.label || 'Label'} size="medium">
      <ToggleRadio label="Alt" name="test4" />
      <ToggleRadio label="Alt" name="test4" />
      <ToggleRadio label="Alt" name="test4" />
    </ToggleBar>
    <ToggleBar {...args} label={args.label || 'Label'} size="large">
      <ToggleRadio label="Alt" name="test6" />
      <ToggleRadio label="Alt" name="test6" />
      <ToggleRadio label="Alt" name="test6" />
    </ToggleBar>
  </StoryTemplate>
);
