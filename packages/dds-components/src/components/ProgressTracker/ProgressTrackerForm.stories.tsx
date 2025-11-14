import { type Meta } from '@storybook/react-vite';

import { themeProviderDecorator } from '../../storybook';

export {
  FormWithSteps,
  FormWithStepsCustomGrid,
} from '../../../stories/patterns/Form/Form.stories';

const meta: Meta = {
  title: 'dds-components/Components/ProgressTracker',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { inline: false } },
  },
  decorators: [Story => themeProviderDecorator(<Story />)],
};

export default meta;
