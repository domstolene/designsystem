import preview from '#.storybook/preview';

import { PROGRESS_BAR_SIZES } from './ProgressBar';
import {
  categoryHtml,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { StoryVStack } from '../layout/Stack/utils';

import { ProgressBar } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    max: { table: categoryHtml },
    value: { table: categoryHtml },
    width: responsivePropsArgTypes.width,
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    label: 'Label',
    value: 3,
    max: 5,
  },
});

export const Overview = meta.story({
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
});
export const Sizes = meta.story({
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
});

export const ResponsiveWidth = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
});
