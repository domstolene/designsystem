import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PlusCircledIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../Stack/utils';

import { ToggleBar, ToggleRadio } from '.';

export default {
  title: 'dds-components/ToggleBar',
  component: ToggleBar,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    width: { control: 'text' },
    value: { control: false },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof ToggleBar>;

type Story = StoryObj<typeof ToggleBar>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <>
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
      </>
    );
  },
};

export const Overview: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <StoryHStack>
        <StoryVStack>
          <ToggleBar
            {...args}
            name="test"
            size="xsmall"
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
        </StoryVStack>
        <StoryVStack>
          <ToggleBar
            {...args}
            name="test1"
            size="xsmall"
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
        </StoryVStack>
        <StoryVStack>
          <ToggleBar
            {...args}
            name="icon_test"
            size="xsmall"
            value={value}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <ToggleRadio icon={PlusCircledIcon} value="alt1" />
            <ToggleRadio icon={PlusCircledIcon} value="alt2" />
            <ToggleRadio icon={PlusCircledIcon} value="alt3" />
          </ToggleBar>

          <ToggleBar {...args} name="icon_test1" size="small">
            <ToggleRadio icon={PlusCircledIcon} value="alt1" />
            <ToggleRadio icon={PlusCircledIcon} value="alt2" />
            <ToggleRadio icon={PlusCircledIcon} value="alt3" />
          </ToggleBar>
          <ToggleBar {...args} name="icon_test2" size="medium">
            <ToggleRadio icon={PlusCircledIcon} value="alt1" />
            <ToggleRadio icon={PlusCircledIcon} value="alt2" />
            <ToggleRadio icon={PlusCircledIcon} value="alt3" />
          </ToggleBar>

          <ToggleBar {...args} name="icon_test3" size="large">
            <ToggleRadio icon={PlusCircledIcon} value="alt1" />
            <ToggleRadio icon={PlusCircledIcon} value="alt2" />
            <ToggleRadio icon={PlusCircledIcon} value="alt3" />
          </ToggleBar>
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithDefaultValue: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>('alt1');
    return (
      <>
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
      </>
    );
  },
};

export const WithLongWords: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <>
        <ToggleBar
          {...args}
          name="test"
          value={value}
          onChange={(_event, value) => {
            setValue(value);
          }}
        >
          <ToggleRadio value="alt1" label="Parter" />
          <ToggleRadio value="alt2" label="Slutning" />
          <ToggleRadio value="alt3" label="Vedlegg" />
        </ToggleBar>
      </>
    );
  },
};

export const WithWidth: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <>
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
      </>
    );
  },
};
