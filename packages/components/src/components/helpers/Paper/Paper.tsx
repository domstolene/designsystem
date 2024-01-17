import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import styled, { css } from 'styled-components';

import { paperTokens as tokens } from './Paper.tokens';
import { selection } from '../styling';
const { outerShadow, border } = ddsBaseTokens;

type Elevation = 1 | 2 | 3 | 4;

const getElevation = (elevation: Elevation) => {
  switch (elevation) {
    case 1:
      return outerShadow.DdsShadow1Onlight;
    case 2:
      return outerShadow.DdsShadow2Onlight;
    case 3:
      return outerShadow.DdsShadow3Onlight;
    case 4:
      return outerShadow.DdsShadow4Onlight;
  }
};

type Border = 'light' | 'dark';

const getBorder = (borderStyle: Border) => {
  switch (borderStyle) {
    case 'light':
      return `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${border.BordersDdsBorderStyleLightStroke}`;
    case 'dark':
      return `${border.BordersDdsBorderStyleDarkStrokeWeight} solid ${border.BordersDdsBorderStyleDarkStroke}`;
  }
};

export interface PaperProps {
  elevation?: Elevation;
  border?: Border;
}

export const Paper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'elevation' && prop !== 'border',
})<PaperProps>`
  box-sizing: border-box;
  margin: 0;
  background-color: ${tokens.paper.backgroundColor};
  font-family: ${tokens.paper.fontFamily};
  border-radius: ${tokens.paper.borderRadius};
  &::selection,
  *::selection {
    ${selection}
  }
  ${({ elevation }) =>
    elevation &&
    css`
      box-shadow: ${getElevation(elevation)};
    `}
  border: ${({ border }) => (border ? getBorder(border) : 'none')}
`;
