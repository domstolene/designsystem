import { type ArgTypes } from '@storybook/react-vite';

import { commonArgTypes, htmlArgType } from '../../storybook';

export const storyTypographyHtmlAttrs: ArgTypes = {
  ...commonArgTypes,
  style: htmlArgType,
  color: { control: { type: 'text' } },
};
