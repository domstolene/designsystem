import { type ArgTypes } from '@storybook/react';

export const categories = {
  html: 'HTML attributes',
};

export const categoryHtml = { category: categories.html };

export const htmlPropsArgType: Partial<ArgTypes> = {
  control: { disable: true },
  table: categoryHtml,
};

export const htmlEventArgType: Partial<ArgTypes> = {
  control: { disable: true },
  table: categoryHtml,
};
