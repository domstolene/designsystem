import { type ArgTypes } from '@storybook/react-vite';

import { commonArgTypes, htmlArgType } from '../../storybook/helpers';

export const storyTypographyHtmlAttrs: ArgTypes = {
  ...commonArgTypes,
  style: htmlArgType,
  color: { control: { type: 'text' } },
};
