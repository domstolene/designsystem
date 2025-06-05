import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Skeleton } from './Skeleton';
import { categoryCss, windowWidthDecorator } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/Skeleton',
  component: Skeleton,
  argTypes: {
    width: { control: 'text', table: categoryCss },
    height: { control: 'text', table: categoryCss },
    borderRadius: { control: 'text' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '320px',
    height: 'var(--dds-spacing-x2)',
  },
};

export const Overview: Story = {
  args: {
    width: 'var(--dds-spacing-x2)',
    height: 'var(--dds-spacing-x2)',
  },
  render: args => (
    <StoryVStack>
      <Skeleton {...args} borderRadius="var(--dds-border-radius-rounded)" />
      <Skeleton {...args} width="320px" />
    </StoryVStack>
  ),
};

export const Example: Story = {
  render: args => (
    <StoryVStack>
      <Skeleton
        {...args}
        borderRadius="var(--dds-border-radius-rounded)"
        width="var(--dds-spacing-x4)"
        height="var(--dds-spacing-x4)"
      />
      <Skeleton {...args} width="320px" height="var(--dds-spacing-x2)" />
      <Skeleton {...args} width="220px" height="var(--dds-spacing-x1)" />
      <Skeleton {...args} width="220px" height="var(--dds-spacing-x1)" />
      <Skeleton
        {...args}
        width="60px"
        height="var(--dds-spacing-x2-5)"
        borderRadius="var(--dds-border-radius-button)"
        style={{ marginTop: 'var(--dds-spacing-x1)' }}
      />
    </StoryVStack>
  ),
};

export const Responsive: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
    height: {
      xs: '20px',
      sm: '20px',
      md: '30px',
      lg: '50px',
      xl: '50px',
    },
  },
};
