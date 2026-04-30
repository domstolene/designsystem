import preview from '#.storybook/preview';

import {
  categoryHtml,
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  labelText,
} from '../../storybook';
import { Button } from '../Button/Button';
import { BUTTON_SIZES } from '../Button/Button.types';
import { StoryVStack } from '../layout/Stack/utils';

import { ButtonGroup } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    role: { control: 'text', table: categoryHtml },
    'aria-label': { table: categoryHtml },
    'aria-labelledby': { table: categoryHtml },
    ...commonArgTypesWithNodeChildren,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  render: args => (
    <ButtonGroup {...args}>
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
});

export const Sizes = meta.story({
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
});

export const Vertical = meta.story({
  render: args => (
    <ButtonGroup {...args} direction="column">
      <Button>Første</Button>
      <Button>Andre</Button>
      <Button>Tredje</Button>
    </ButtonGroup>
  ),
});
