import { type Meta } from '@storybook/react-vite';

import { INPUT_SIZES } from '../../../packages/dds-components/src/components/helpers/Input';
import { StoryHStack } from '../../../packages/dds-components/src/components/layout/Stack/utils';
import { StoryThemeProvider } from '../../../packages/dds-components/src/components/ThemeProvider/utils/StoryThemeProvider';
import { Select } from '../../../packages/dds-components/src/index';

const meta: Meta = {
  title: 'Playground/Testing',
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
};
export default meta;

export const SelectDropdown = () => {
  return (
    <StoryHStack>
      {INPUT_SIZES.map(size => (
        <Select
          options={[
            { label: 'Alternativ 1', value: 'Alternativ 1' },
            { label: 'Alternativ 2', value: 'Alternativ 2' },
          ]}
          value={[{ label: 'Alternativ 1', value: 'Alternativ 1' }]}
          key={size}
          componentSize={size}
          menuIsOpen
        />
      ))}
    </StoryHStack>
  );
};
