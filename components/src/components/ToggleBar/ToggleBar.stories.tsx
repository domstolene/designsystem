import { SB_DESIGNSYSTEM_PREFIX, StoryTemplate } from '../../storybook';
import { ToggleBar, ToggleBarProps, ToggleRadio } from '.';
import { PlusCircledIcon } from '../../icons/tsx';
import { useState } from 'react';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/ToggleBar`,
  component: ToggleBar,
  argTypes: {
    label: { control: { type: 'text' } },
  },
};

export const Default = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate title="ToggleBar - default">
      <ToggleBar
        {...args}
        name="test"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio value="alt1" label="Alt" />
        <ToggleRadio value="alt2" label="Alt" />
        <ToggleRadio value="alt3" label="Alt" />
      </ToggleBar>
    </StoryTemplate>
  );
};

export const OverviewWithText = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate
      title="ToggleBar - overview with text"
      display="grid"
      columnsAmount={2}
    >
      <ToggleBar
        {...args}
        name="test"
        size="tiny"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="Alt1" />
        <ToggleRadio label="Alt" value="Alt2" />
        <ToggleRadio label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test1"
        size="tiny"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test2"
        size="small"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="Alt1" />
        <ToggleRadio label="Alt" value="Alt2" />
        <ToggleRadio label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test3"
        size="small"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test4"
        size="medium"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="Alt1" />
        <ToggleRadio label="Alt" value="Alt2" />
        <ToggleRadio label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test5"
        size="medium"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test6"
        size="large"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="Alt1" />
        <ToggleRadio label="Alt" value="Alt2" />
        <ToggleRadio label="Alt" value="Alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        name="test7"
        size="large"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt" value="Alt3" />
      </ToggleBar>
    </StoryTemplate>
  );
};

export const OverviewWithIcon = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate title="ToggleBar - overview with Icon">
      <ToggleBar
        {...args}
        name="test"
        size="tiny"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>

      <ToggleBar {...args} name="test1" size="small">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>

      <ToggleBar {...args} name="test2" size="medium">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test3" size="large">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>
    </StoryTemplate>
  );
};

export const OverviewWithLabel = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate
      title="ToggleBar - overview with label"
      display="grid"
      columnsAmount={2}
    >
      <ToggleBar
        {...args}
        label={args.label || 'Label'}
        size="tiny"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="alt1" name="test" />
        <ToggleRadio label="Alt" value="alt2" name="test" />
        <ToggleRadio label="Alt" value="alt3" name="test" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label || 'Label'}
        size="small"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="alt1" name="test2" />
        <ToggleRadio label="Alt" value="alt2" name="test2" />
        <ToggleRadio label="Alt" value="alt3" name="test2" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label || 'Label'}
        size="medium"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="alt1" name="test4" />
        <ToggleRadio label="Alt" value="alt2" name="test4" />
        <ToggleRadio label="Alt" value="alt3" name="test4" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label || 'Label'}
        size="large"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio label="Alt" value="alt1" name="test6" />
        <ToggleRadio label="Alt" value="alt2" name="test6" />
        <ToggleRadio label="Alt" value="alt3" name="test6" />
      </ToggleBar>
    </StoryTemplate>
  );
};
