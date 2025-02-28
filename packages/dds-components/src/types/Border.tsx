export type BorderColor = 'default' | 'subtle' | 'onInverse';
export type BorderColorCn = 'default' | 'subtle' | 'on-inverse';

export const getBorderCn = (color: BorderColor): BorderColorCn =>
  color === 'onInverse' ? 'on-inverse' : color;
