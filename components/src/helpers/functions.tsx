export const calculateHeightWithLineHeight = (
  lineHeight: number,
  fontSize: number
) => {
  return lineHeight * 0.01 * fontSize;
};

export const firstLetterToUpperCase = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
