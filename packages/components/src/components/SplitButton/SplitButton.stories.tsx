import { type Meta, type StoryObj } from '@storybook/react';

import { PlusCircledIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../Stack/utils';

import {
  SplitButton,
  type SplitButtonPrimaryActionProps,
  type SplitButtonProps,
} from '.';

export default {
  title: 'dds-components/SplitButton',
  component: SplitButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    secondaryActions: { control: false },
    primaryAction: { control: false },
  },
} satisfies Meta<typeof SplitButton>;

const items = [
  {
    title: 'Sekundær handling',
    onClick: () => null,
  },
  {
    title: 'Sekundær handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
];

type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    primaryAction: { children: 'Tekst', fullWidth: true },
    secondaryActions: items,
  },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <SplitButtonVariants args={args} children="Tekst" />
      </StoryVStack>
      <StoryVStack>
        <SplitButtonVariants
          args={args}
          children="Tekst"
          icon={PlusCircledIcon}
        />
      </StoryVStack>
      <StoryVStack>
        <SplitButtonVariants args={args} loading />
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

interface SplitButtonVariantsProps {
  args: SplitButtonProps;
  children?: SplitButtonPrimaryActionProps['children'];
  icon?: SplitButtonPrimaryActionProps['icon'];
  loading?: SplitButtonPrimaryActionProps['loading'];
}

const SplitButtonVariants = ({ args, ...rest }: SplitButtonVariantsProps) => (
  <>
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="large"
      purpose="primary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="medium"
      purpose="primary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="small"
      purpose="primary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="tiny"
      purpose="primary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="large"
      purpose="secondary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="medium"
      purpose="secondary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="small"
      purpose="secondary"
    />
    <SplitButton
      {...args}
      primaryAction={{ ...rest }}
      secondaryActions={items}
      size="tiny"
      purpose="secondary"
    />
  </>
);
