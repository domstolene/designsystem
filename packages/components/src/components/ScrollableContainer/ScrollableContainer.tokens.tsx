import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

export const scrollbarWidthNumberPx = 10;
const scrollbarWidth = `${scrollbarWidthNumberPx}px`;

const track = {
  backgroundColor: 'transparent',
  borderRadius: '100px',
  width: scrollbarWidth,
};

const thumb = {
  base: {
    backgroundColor: ddsTokens.DdsColorSurfaceScrollbar,
    borderRadius: '100px',
    width: scrollbarWidth,
  },
  hover: {
    backgroundColor: ddsTokens.DdsColorSurfaceScrollbar,
  },
};

export const scrollbarTokens = {
  minThumbHeightPx: 15,
  track,
  thumb,
};
