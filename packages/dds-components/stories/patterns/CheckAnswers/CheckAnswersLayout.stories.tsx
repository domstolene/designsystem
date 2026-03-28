import { type Meta } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../../src/storybook';

export {
  WithFlex,
  WithGrid,
} from '../../../src/components/FormSummary/FormSummary.stories';

const meta: Meta = {
  title: 'Patterns/Check Answers',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;
