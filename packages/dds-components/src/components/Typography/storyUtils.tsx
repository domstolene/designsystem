import { type ArgTypes } from '@storybook/react';

import { categoryHtml } from '../../storybook/helpers';

export const storyTypographyHtmlAttrs: ArgTypes = {
  id: { table: categoryHtml },
  className: { table: categoryHtml },
  color: { control: { type: 'text' } },
};
