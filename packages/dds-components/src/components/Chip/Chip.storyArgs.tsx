import { type ArgTypes } from '@storybook/react-vite';

import { commonArgTypesWithStringChildren } from '../../storybook';

export const commonChipArgTypes: Partial<ArgTypes> = {
  ...commonArgTypesWithStringChildren,
  icon: { control: { disable: true } },
};
