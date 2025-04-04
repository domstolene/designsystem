import { type Meta, type StoryObj } from '@storybook/react';

import { categoryHtml, htmlPropsArgType } from '../../storybook/helpers';
import { Button } from '../Button/Button';
import { StoryVStack } from '../layout/Stack/utils';

import { ButtonGroup } from '.';

export default {
  title: 'dds-components/Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    role: { control: 'text', table: categoryHtml },
    'aria-label': { table: categoryHtml },
    'aria-labelledby': { table: categoryHtml },
    htmlProps: htmlPropsArgType,
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
