import preview from '#.storybook/preview';

import { INPUT_SIZES } from '../../../packages/dds-components/src/components/helpers/Input';
import { StoryHStack } from '../../../packages/dds-components/src/components/layout/Stack/storybook-utils';
import { Select } from '../../../packages/dds-components/src/index';
import { ddsProviderDecorator } from '../../../packages/dds-components/src/storybook';

const meta = preview.meta({
  title: 'Playground/Testing',
  decorators: [ddsProviderDecorator],
});

export const SelectDropdown = meta.story(() => {
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
});
