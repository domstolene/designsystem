import { type Meta, type StoryObj } from '@storybook/react-vite';

import { labelText } from '../../storybook';
import { BUTTON_SIZES } from '../Button/Button.types';
import { PlusCircledIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { SplitButton } from '.';

export default {
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
} satisfies Meta<typeof SplitButton>;

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

type Story = StoryObj<typeof SplitButton>;

export const Preview: Story = {
  args: {
    primaryAction: { children: 'Tekst' },
    secondaryActions: items,
  },
};

export const Purposes: Story = {
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
};

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <SplitButton
            {...args}
            key={size}
            primaryAction={{ children: labelText(size) }}
            secondaryActions={items}
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
            secondaryActions={items}
            size={size}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
};

export const FullWidth: Story = {
  args: {
    primaryAction: { children: 'Tekst', fullWidth: true },
    secondaryActions: items,
  },
};
