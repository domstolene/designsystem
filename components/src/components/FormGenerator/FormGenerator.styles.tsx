import styled, { css } from 'styled-components';
import { ScreenSize } from '../../hooks/useScreenSize';
import { getLiteralScreenSize } from '../Grid/Grid.utils';
import { formGeneratorTokens as tokens } from './FormGenerator.tokens';

export const FormGeneratorFlexContainer = styled.div<{
  screenSize: ScreenSize;
}>`
  ${({ screenSize }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${tokens.columnGaps[screenSize]};
  `}
`;

export const SubContainer = styled.div<{
  screenSize: ScreenSize;
  length: number;
  breakpoint?: ScreenSize;
}>`
  ${({ screenSize, length }) =>
    length === 2
      ? css`
          display: grid;
        `
      : css`
          display: flex;
          flex-wrap: wrap;
          gap: ${tokens.columnGaps[screenSize]};
        `}

  ${({ screenSize, length, breakpoint = ScreenSize.XSmall }) =>
    length === 2
      ? screenSize > breakpoint
        ? css`
            grid-auto-flow: column;
            grid-template-columns: min-content auto;
            column-gap: ${tokens.columnGaps[screenSize]};
          `
        : css`
            grid-auto-flow: row;
            row-gap: ${tokens.rowGaps[getLiteralScreenSize(screenSize)]};
          `
      : ``}

      ${({ screenSize, length, breakpoint }) =>
    length === 3
      ? breakpoint !== undefined && screenSize >= breakpoint
        ? css`
            flex-direction: row;
          `
        : css`
            flex-direction: column;
          `
      : ``}
`;
