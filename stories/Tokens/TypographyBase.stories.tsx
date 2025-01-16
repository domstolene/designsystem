import {
  FontFamilyGenerator,
  FontLetterSpacingGenerator,
  FontLineheightGenerator,
  FontSizeGenerator,
  FontStyleGenerator,
  FontWeightGenerator,
} from './utils';

export default {
  title: 'dds-design-tokens/Tokens/Typography base',
};

export const FontFamily = () => {
  return FontFamilyGenerator();
};

export const FontSize = () => {
  return FontSizeGenerator();
};

export const FontWeight = () => {
  return FontWeightGenerator();
};

export const FontStyle = () => {
  return FontStyleGenerator();
};

export const LineHeight = () => {
  return FontLineheightGenerator();
};

export const LetterSpacing = () => {
  return FontLetterSpacingGenerator();
};
