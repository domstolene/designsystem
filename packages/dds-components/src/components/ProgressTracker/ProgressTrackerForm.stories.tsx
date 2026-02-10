import { type Meta } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../storybook';

export {
  FormWithSteps,
  FormWithStepsCustomGrid,
} from '../../../stories/patterns/Form/Form.stories';

const meta: Meta = {
  title: 'dds-components/Components/ProgressTracker',
  parameters: {
    chromatic: { disableSnapshot: true },
    layout: 'fullscreen',
    docs: { canvas: { inline: false } },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;
