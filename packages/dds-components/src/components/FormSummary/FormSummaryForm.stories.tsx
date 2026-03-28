import { type Meta } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../storybook';

export { CheckAnswers as CheckAnswersPattern } from '../../../stories/patterns/CheckAnswers/CheckAnswers.stories';

const meta: Meta = {
  title: 'dds-components/Components/FormSummary',
  parameters: {
    chromatic: { disableSnapshot: true },
    layout: 'fullscreen',
    docs: { canvas: { inline: false } },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;
