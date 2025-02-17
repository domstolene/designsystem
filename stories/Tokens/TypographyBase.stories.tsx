import {
  FontFamilyGenerator,
  FontLetterSpacingGenerator,
  FontLineheightGenerator,
  FontParagraphSpacingGenerator,
  FontSizeGenerator,
  FontStyleGenerator,
  FontWeightGenerator,
  wrapperStyle,
} from './utils';

export default {
  title: 'dds-design-tokens/Tokens/Typography base',
};

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
