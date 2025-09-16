import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  commonArgTypes,
  htmlArgType,
  htmlEventArgType,
  labelText,
} from '../../storybook/helpers';
import { Button } from '../Button';
import { TOGGLE_SIZES } from './Toggle';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Toggle } from '.';

export default {
  title: 'dds-components/Components/Toggle',
  component: Toggle,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean', table: categoryHtml },
    checked: htmlArgType,
    defaultChecked: htmlArgType,
    value: htmlArgType,
    defaultValue: htmlArgType,
    name: htmlArgType,
    'aria-describedby': htmlArgType,
    onBlur: htmlEventArgType,
    ...commonArgTypes,
  },
  args: { onChange: fn(), onBlur: fn() },
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Preview: Story = {
  args: { children: 'Ledetekst' },
};

export const States: Story = {
  args: { children: 'Ledetekst' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Toggle {...args} />
        <Toggle {...args} disabled children="disabled" />
        <Toggle {...args} readOnly children="readOnly" />
        <Toggle {...args} isLoading children="isLoading" />
      </StoryVStack>
      <StoryVStack>
        <Toggle {...args} checked />
        <Toggle {...args} checked disabled children="disabled checked" />
        <Toggle {...args} checked readOnly children="readOnly checked" />
        <Toggle {...args} checked isLoading children="isLoading checked" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      {TOGGLE_SIZES.map(size => (
        <Toggle {...args} key={size} size={size}>
          {labelText(size)}
        </Toggle>
      ))}
    </StoryVStack>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false);
    return (
      <StoryVStack>
        <Toggle
          {...args}
          checked={checked}
          onChange={setChecked}
          children="Ledetekst"
        />
        <Button onClick={() => setChecked(true)} size="small">
          Slå på toggle
        </Button>
      </StoryVStack>
    );
  },
};
