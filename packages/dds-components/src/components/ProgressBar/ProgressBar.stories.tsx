import { type Meta, type StoryObj } from '@storybook/react-vite';

import { PROGRESS_BAR_SIZES } from './ProgressBar';
import {
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { StoryVStack } from '../layout/Stack/utils';

import { ProgressBar } from '.';

export default {
  title: 'dds-components/Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    width: responsivePropsArgTypes.width,
  },
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Preview: Story = {
  args: {
    label: 'Label',
    value: 3,
    max: 5,
  },
};

export const Overview: Story = {
  args: {
    label: 'Label',
  },
  render: args => (
    <StoryVStack>
      <ProgressBar {...args} max={10} value={8} />
      <ProgressBar {...args} />
      <ProgressBar {...args} max={10} value={8} tip="Dette er en hjelpetekst" />
      <ProgressBar {...args} errorMessage="Dette er en feilmedling" />
      <ProgressBar {...args} max={10} value={10} />
    </StoryVStack>
  ),
};
export const Sizes: Story = {
  args: {
    label: 'Label',
    value: 3,
    max: 5,
  },
  render: args => (
    <StoryVStack>
      {PROGRESS_BAR_SIZES.map(size => (
        <ProgressBar {...args} key={size} size={size} label={labelText(size)} />
      ))}
    </StoryVStack>
  ),
};

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    value: 3,
    max: 5,
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
