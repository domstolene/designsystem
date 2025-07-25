import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryHtml, commonArgTypes } from '../../storybook/helpers';
import { Button } from '../Button/Button';
import { StoryVStack } from '../layout/Stack/utils';

import { ButtonGroup } from '.';

export default {
  title: 'dds-components/Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    role: { control: 'text', table: categoryHtml },
    'aria-label': { table: categoryHtml },
    'aria-labelledby': { table: categoryHtml },
    ...commonArgTypes,
  },
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Preview: Story = {
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
