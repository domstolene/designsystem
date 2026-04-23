import preview from '#.storybook/preview';

import {
  CSSSelectArgType,
  htmlArgType,
  responsivePropsArgTypes,
} from '../../../storybook';

import { Paper } from '.';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/Paper',
  component: Paper,
  argTypes: {
    as: { control: 'text' },
    ...responsivePropsArgTypes,
    elevation: CSSSelectArgType,
    border: CSSSelectArgType,
    borderRadius: CSSSelectArgType,
    background: CSSSelectArgType,
    tabIndex: htmlArgType,
    role: htmlArgType,
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    border: 'border-default',
    padding: 'x1.5',
    maxWidth: '20rem',
    children:
      'Dette er en Paper: layout-komponent med støtte for flate-styling',
  },
});

export const Styled = meta.story({
  args: {
    border: 'border-default',
    background: 'surface-info-default',
    elevation: 'medium',
    padding: 'x1.5',
    maxWidth: '20rem',
    children: 'Dette er en styled Paper',
  },
});

export const Branded = meta.story({
  args: {
    background: 'brand-secondary-subtle',
    elevation: 'medium',
    padding: 'x1.5',
    maxWidth: '20rem',
    children: 'Dette er en branded Paper',
  },
});
