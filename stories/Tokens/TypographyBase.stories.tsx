import preview from '#.storybook/preview';

import {
  DataColorsBaseGenerator,
  FontFamilyGenerator,
  FontLetterSpacingGenerator,
  FontLineheightGenerator,
  FontParagraphSpacingGenerator,
  FontSizeGenerator,
  FontStyleGenerator,
  FontWeightGenerator,
  Wrapper,
} from './utils';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta = preview.meta({
  title: 'dds-design-tokens/Tokens/Base',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
});

export const FontFamily = meta.story(() => {
  return <Wrapper>{FontFamilyGenerator()}</Wrapper>;
});

export const FontSize = meta.story(() => {
  return <Wrapper> {FontSizeGenerator()}</Wrapper>;
});

export const FontWeight = meta.story(() => {
  return <Wrapper> {FontWeightGenerator()} </Wrapper>;
});

export const FontStyle = meta.story(() => {
  return <Wrapper>{FontStyleGenerator()}</Wrapper>;
});

export const LineHeight = meta.story(() => {
  return <Wrapper> {FontLineheightGenerator()}</Wrapper>;
});

export const LetterSpacing = meta.story(() => {
  return <Wrapper> {FontLetterSpacingGenerator()}</Wrapper>;
});

export const ParagraphSpacing = meta.story(() => {
  return <Wrapper> {FontParagraphSpacingGenerator()}</Wrapper>;
});

export const DataVisualisation = meta.story(() => {
  return <Wrapper>{DataColorsBaseGenerator()}</Wrapper>;
});
