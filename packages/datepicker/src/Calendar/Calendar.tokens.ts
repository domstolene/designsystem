import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSProperties } from 'react';

export type CellVariant = 'default' | 'selected' | 'unavailable';
type CellStyle = {
  bg: CSSProperties['background'];
  borderColor?: CSSProperties['backgroundColor'];
  color: CSSProperties['color'];
  fontWeight?: CSSProperties['fontWeight'];
  textDecoration?: CSSProperties['textDecoration'];
  cursor?: CSSProperties['cursor'];
  hover?: Pick<CellStyle, 'bg' | 'color' | 'borderColor'>;
  today?: Pick<CellStyle, 'textDecoration' | 'borderColor'>;
};

const cellVariantStyles: Record<CellVariant, CellStyle> = {
  default: {
    bg: 'transparent',
    color: ddsBaseTokens.colors.DdsColorNeutralsGray9,
    hover: {
      bg: ddsBaseTokens.colors.DdsColorInteractiveLightest,
      borderColor: ddsBaseTokens.colors.DdsColorInteractiveBase,
      color: ddsBaseTokens.colors.DdsColorNeutralsGray9,
    },
    today: {
      textDecoration: 'underline',
    },
  },
  selected: {
    bg: ddsBaseTokens.colors.DdsColorInteractiveBase,
    borderColor: ddsBaseTokens.colors.DdsColorInteractiveBase,
    color: ddsBaseTokens.colors.DdsColorNeutralsWhite,
    fontWeight: 600,
    today: {
      textDecoration: 'underline',
    },
  },
  unavailable: {
    bg: ddsBaseTokens.colors.DdsColorNeutralsGray1,
    borderColor: ddsBaseTokens.colors.DdsColorNeutralsGray1,
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
    textDecoration: 'line-through',
    cursor: 'not-allowed',
    today: {
      borderColor: ddsBaseTokens.colors.DdsColorNeutralsGray5,
      textDecoration: 'underline line-through',
    },
  },
};

const cell = {
  width: '40px',
  height: '40px',
  font: ddsBaseTokens.fontPackages.body_sans_01.base,
  borderWidth: ddsBaseTokens.border.BordersDdsBorderStyleDarkStrokeWeight,
  borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,
  variants: cellVariantStyles,
  today: {
    borderColor: ddsBaseTokens.colors.DdsColorNeutralsGray5,
    textDecoration: 'underline',
  },
};

const grid = {
  headers: {
    ...ddsBaseTokens.fontPackages.supportingStyle_tiny_02.base,
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
  },
  weekNumbers: {
    ...ddsBaseTokens.fontPackages.supportingStyle_tiny_02.base,
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
  },
  gap: '2px',
};

export const calendarTokens = { grid, cell };
