import { type ArgTypes } from '@storybook/react-vite';

import { categoryHtml } from '../../storybook/helpers';

export const storyTypographyHtmlAttrs: ArgTypes = {
  id: { table: categoryHtml },
  className: { table: categoryHtml },
  color: { control: { type: 'text' } },
};
