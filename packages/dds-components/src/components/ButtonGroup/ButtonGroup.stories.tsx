import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { StoryVStack } from '../Stack/utils';

import { ButtonGroup } from '.';

export default {
  title: 'dds-components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    role: { control: 'text' },
    'aria-label': { control: 'text' },
    'aria-labelledby': { control: 'text' },
    htmlProps: { control: false },
  },
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      <ButtonGroup {...args} buttonSize="large">
        <Button>Første</Button>
        <Button>Andre</Button>
        <Button>Tredje</Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button>Første</Button>
        <Button>Andre</Button>
        <Button>Tredje</Button>
      </ButtonGroup>
      <ButtonGroup {...args} buttonSize="small">
        <Button>Første</Button>
        <Button>Andre</Button>
        <Button>Tredje</Button>
      </ButtonGroup>
      <ButtonGroup {...args} buttonSize="xsmall">
        <Button>Første</Button>
        <Button>Andre</Button>
        <Button>Tredje</Button>
      </ButtonGroup>
    </StoryVStack>
  ),
};

export const Vertical: Story = {
  render: args => (
    <ButtonGroup {...args} direction="column">
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
};
