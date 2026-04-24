import preview from '#.storybook/preview';

import { ddsProviderDecorator, labelText } from '../../storybook';
import { BUTTON_SIZES } from '../Button/Button.types';
import { PlusCircledIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { SplitButton } from '.';

const items = [
  {
    children: 'Sekundær handling',
    onClick: () => null,
  },
  {
    children: 'Sekundær handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
];

const meta = preview.meta({
  title: 'dds-components/Components/SplitButton',
  component: SplitButton,
  parameters: {
    docs: {
      story: { height: '200px' },
    },
  },
  argTypes: {
    secondaryActions: { control: false },
    primaryAction: { control: false },
  },
  args: {
    primaryAction: { children: 'Tekst' },
    secondaryActions: items,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({});

export const Purposes = meta.story({
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <SplitButton
          {...args}
          primaryAction={{ children: 'Primary' }}
          secondaryActions={items}
          purpose="primary"
        />
        <SplitButton
          {...args}
          primaryAction={{ children: 'Secondary' }}
          secondaryActions={items}
          purpose="secondary"
        />
      </StoryVStack>
    </StoryHStack>
  ),
});

export const Sizes = meta.story({
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <SplitButton
            {...args}
            key={size}
            primaryAction={{ children: labelText(size) }}
            size={size}
          />
        ))}
      </StoryVStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <SplitButton
            {...args}
            primaryAction={{
              children: labelText(size),
              icon: PlusCircledIcon,
            }}
            size={size}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
});

export const FullWidth = meta.story({
  args: {
    primaryAction: { children: 'Tekst', fullWidth: true },
  },
});
