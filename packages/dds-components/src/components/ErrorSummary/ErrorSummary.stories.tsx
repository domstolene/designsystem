import preview from '#.storybook/preview';

import { ErrorSummary } from './ErrorSummary';
import { ErrorSummaryItem } from './ErrorSummaryItem';
import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';

const meta = preview.meta({
  title: 'dds-components/Components/ErrorSummary',
  component: ErrorSummary,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    heading: { control: 'text' },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  render: args => (
    <ErrorSummary {...args}>
      <ErrorSummaryItem>Epost må fylles ut</ErrorSummaryItem>
      <ErrorSummaryItem>Fødselsnummer må ha 11 sifre</ErrorSummaryItem>
    </ErrorSummary>
  ),
});
