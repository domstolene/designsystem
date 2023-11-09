import { ddsStyles } from '../build/js/fontObject';

type Font = (typeof ddsStyles)['$dds-font']['body']['sans-01'];

export const fontPackageFormatter = (font: Font) => {
  return {
    base: {
      lineHeight: font.lineHeight.value,
      fontSize: `${font.fontSize.value}px`,
      letterSpacing: font.letterSpacing.value,
      fontFamily: font.fontFamily.value,
      fontWeight: font.fontWeight.value,
      fontStyle: font.fontStyle.value,
    },
    numbers: {
      lineHeightNumber: font.lineHeight.original.value,
      fontSizeNumber: font.fontSize.value,
      letterSpacingNumber: font.letterSpacing.original.value,
      paragraphSpacingNumber: font.paragraphSpacing.value,
    },
    paragraph: {
      paragraphSpacing: `${font.paragraphSpacing.value}px`,
    },
  };
};
