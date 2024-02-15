import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { useState } from 'react';

import { type ToggleBarProps } from './ToggleBar.types';
import { PlusCircledIcon } from '../Icon/icons';

import { ToggleBar, ToggleRadio } from '.';

export default {
  title: 'dds-components/ToggleBar',
  component: ToggleBar,
  argTypes: {
    label: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
  },
};

export const Default = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate title="ToggleBar - default" display="block">
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
      $columnsAmount={2}
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
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
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
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
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
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
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
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
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
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
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
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
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
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
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
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
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
    <StoryTemplate title="ToggleBar - overview with label">
      <ToggleBar
        {...args}
        label={args.label ?? 'Label'}
        size="tiny"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
        name="test"
      >
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label ?? 'Label'}
        size="small"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
        name="test1"
      >
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label ?? 'Label'}
        size="medium"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
        name="test2"
      >
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar
        {...args}
        label={args.label ?? 'Label'}
        size="large"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
        name="test3"
      >
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
    </StoryTemplate>
  );
};

export const WithDefaultValue = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>('alt1');
  return (
    <StoryTemplate title="ToggleBar - with default value" display="block">
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

export const WithLongWords = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate title="ToggleBar - with long words" display="block">
      <ToggleBar
        {...args}
        name="test"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <ToggleRadio value="alt1" label="Partsopplysninger" />
        <ToggleRadio value="alt2" label="Slutning" />
        <ToggleRadio value="alt3" label="Vedlegg" />
      </ToggleBar>
    </StoryTemplate>
  );
};

export const WithWidth = (args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <StoryTemplate title="ToggleBar - with width" display="block">
      <ToggleBar
        {...args}
        name="test"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
        width="320px"
      >
        <ToggleRadio value="alt1" label="Alt" />
        <ToggleRadio value="alt2" label="Alt" />
        <ToggleRadio value="alt3" label="Alt" />
      </ToggleBar>
    </StoryTemplate>
  );
};
