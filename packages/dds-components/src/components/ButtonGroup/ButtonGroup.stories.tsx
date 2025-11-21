import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
} from '../../storybook';
import { Button } from '../Button/Button';
import { BUTTON_SIZES } from '../Button/Button.types';
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
  decorators: [ddsProviderDecorator],
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
      {BUTTON_SIZES.map(size => (
        <ButtonGroup key={size} {...args} buttonSize={size}>
          <Button>{labelText(size)}</Button>
          <Button>{labelText(size)}</Button>
          <Button>{labelText(size)}</Button>
        </ButtonGroup>
      ))}
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
