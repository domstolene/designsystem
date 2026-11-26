import preview from '#.storybook/preview';

import { categoryHtml, commonArgTypes, htmlArgType } from '../../storybook';
import { Logo } from './Logo';
import * as logos from './logos';

const logoOptions = logos;

const meta = preview.meta({
  title: 'dds-components/Components/Logo',
  component: Logo,
  argTypes: {
    ...commonArgTypes,
    logo: {
      options: Object.keys(logoOptions),
      mapping: logoOptions,
      control: { type: 'select' },
    },
    height: {
      control: { type: 'number' },
      table: categoryHtml,
    },
    width: {
      control: { type: 'number' },
      table: categoryHtml,
    },
    loading: htmlArgType,
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    logo: logos.courtsOfNorwayLogoi18n,
  },
});

export const WithCoat = meta.story({
  args: {
    logo: logos.courtsOfNorwayLogoi18nCoat,
  },
});
