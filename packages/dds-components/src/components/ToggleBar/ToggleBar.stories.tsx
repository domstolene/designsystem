import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { TOGGLE_BAR_SIZES } from './ToggleBar.types';
import {
  StoryLabel,
  commonArgTypes,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { PlusCircledIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { ToggleBar, ToggleRadio } from '.';

export default {
  title: 'dds-components/Components/ToggleBar',
  component: ToggleBar,
  argTypes: {
    width: responsivePropsArgTypes.width,
    value: { control: false },
    ...commonArgTypes,
  },
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleBar>;

type Story = StoryObj<typeof ToggleBar>;

const toggleRadios = (label?: boolean, icon?: boolean) => {
  const radios = [];
  for (let i = 1; i <= 3; i++) {
    radios.push(
      <ToggleRadio
        key={i}
        icon={icon ? PlusCircledIcon : undefined}
        label={label ? `Alt${i}` : undefined}
        value={`Alt${i}`}
      />,
    );
  }
  return <>{radios}</>;
};

export const Preview: Story = {
  render: args => (
    <ToggleBar {...args} name="test">
      <ToggleRadio label="Alt1" value="Alt1" />
      <ToggleRadio label="Alt2" value="Alt2" />
      <ToggleRadio label="Alt3" value="Alt3" />
    </ToggleBar>
  ),
};

export const Sizes: Story = {
  render: args => {
    let name = 0;
    return (
      <StoryHStack flexWrap="wrap">
        {TOGGLE_BAR_SIZES.map(size => (
          <VStack key={size} gap="x0.125">
            <StoryLabel>{labelText(size)}</StoryLabel>
            <StoryVStack>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(true)}
              </ToggleBar>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(true, true)}
              </ToggleBar>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(false, true)}
              </ToggleBar>
            </StoryVStack>
          </VStack>
        ))}
      </StoryHStack>
    );
  },
};

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>('Alt2');
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
          {toggleRadios(true)}
        </ToggleBar>
      </>
    );
  },
};

export const WithLongWords: Story = {
  render: args => {
    return (
      <>
        <ToggleBar {...args} name="test">
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
    return (
      <ToggleBar {...args} name="test" width="320px">
        {toggleRadios(true)}
      </ToggleBar>
    );
  },
};

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '30%',
      lg: '500px',
      xl: '1000px',
    },
  },
  render: args => {
    return (
      <ToggleBar {...args} name="test">
        {toggleRadios(true)}
      </ToggleBar>
    );
  },
};
