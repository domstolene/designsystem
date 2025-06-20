import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  htmlEventArgType,
  htmlPropsArgType,
} from '../../storybook/helpers';
import { Button } from '../Button';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Toggle } from '.';

export default {
  title: 'dds-components/Components/Toggle',
  component: Toggle,
  argTypes: {
    children: { control: 'text' },
    disabled: { table: categoryHtml },
    checked: { table: categoryHtml },
    defaultChecked: { table: categoryHtml },
    value: { control: 'boolean', table: categoryHtml },
    defaultValue: { control: 'boolean', table: categoryHtml },
    name: { table: categoryHtml },
    'aria-describedby': { table: categoryHtml },
    onBlur: htmlEventArgType,
    htmlProps: htmlPropsArgType,
  },
  args: { onChange: fn(), onBlur: fn() },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Preview: Story = {
  args: { children: 'Ledetekst' },
};

export const Overview: Story = {
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
        <Toggle {...args} checked disabled children="disabled" />
        <Toggle {...args} checked readOnly children="readOnly" />
        <Toggle {...args} checked isLoading children="isLoading" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      <Toggle {...args} size="medium" children="Medium" />
      <Toggle {...args} size="large" children="Large" />
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
