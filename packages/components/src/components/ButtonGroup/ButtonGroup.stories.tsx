import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';

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
    htmlProps: { control: false },
  },
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <ButtonGroup {...args}>
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
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
      <ButtonGroup {...args} buttonSize="tiny">
        <Button>Første</Button>
        <Button>Andre</Button>
        <Button>Tredje</Button>
      </ButtonGroup>
    </>
  ),
};

export const Vertical: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <ButtonGroup {...args} direction="column">
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
};
