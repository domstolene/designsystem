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
  wrapperStyle,
} from './utils';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens/Base',
  parameters: {
    disableGlobalDecorator: true,
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

export const FontFamily = () => {
  return <div style={wrapperStyle}>{FontFamilyGenerator()}</div>;
};

export const FontSize = () => {
  return <div style={wrapperStyle}> {FontSizeGenerator()}</div>;
};

export const FontWeight = () => {
  return <div style={wrapperStyle}> {FontWeightGenerator()} </div>;
};

export const FontStyle = () => {
  return <div style={wrapperStyle}>{FontStyleGenerator()}</div>;
};

export const LineHeight = () => {
  return <div style={wrapperStyle}> {FontLineheightGenerator()}</div>;
};

export const LetterSpacing = () => {
  return <div style={wrapperStyle}> {FontLetterSpacingGenerator()}</div>;
};

export const ParagraphSpacing = () => {
  return <div style={wrapperStyle}> {FontParagraphSpacingGenerator()}</div>;
};

export const DataVisualisation = () => {
  return <div style={wrapperStyle}>{DataColorsBaseGenerator()}</div>;
};
