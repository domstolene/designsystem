import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ErrorSummary } from './ErrorSummary';
import { ErrorSummaryItem } from './ErrorSummaryItem';
import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';

export default {
  title: 'dds-components/Components/ErrorSummary',
  component: ErrorSummary,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    heading: { control: 'text' },
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof ErrorSummary>;

type Story = StoryObj<typeof ErrorSummary>;

export const Preview: Story = {
  render: args => (
    <ErrorSummary {...args}>
      <ErrorSummaryItem>Epost må fylles ut</ErrorSummaryItem>
      <ErrorSummaryItem>Fødselsnummer må ha 11 sifre</ErrorSummaryItem>
    </ErrorSummary>
  ),
};
