import { type Meta } from '@storybook/react-vite';

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

const meta: Meta = {
  title: 'dds-design-tokens/Tokens/Base',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
};

export default meta;

export const FontFamily = () => {
  return <Wrapper>{FontFamilyGenerator()}</Wrapper>;
};

export const FontSize = () => {
  return <Wrapper> {FontSizeGenerator()}</Wrapper>;
};

export const FontWeight = () => {
  return <Wrapper> {FontWeightGenerator()} </Wrapper>;
};

export const FontStyle = () => {
  return <Wrapper>{FontStyleGenerator()}</Wrapper>;
};

export const LineHeight = () => {
  return <Wrapper> {FontLineheightGenerator()}</Wrapper>;
};

export const LetterSpacing = () => {
  return <Wrapper> {FontLetterSpacingGenerator()}</Wrapper>;
};

export const ParagraphSpacing = () => {
  return <Wrapper> {FontParagraphSpacingGenerator()}</Wrapper>;
};

export const DataVisualisation = () => {
  return <Wrapper>{DataColorsBaseGenerator()}</Wrapper>;
};
