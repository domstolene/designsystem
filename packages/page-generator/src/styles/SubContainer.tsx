import {
  ScreenSize,
  getLiteralScreenSize,
} from '@norges-domstoler/dds-components';
import styled, { css } from 'styled-components';
import { PageGeneratorTokens } from '../tokens';

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
          gap: ${PageGeneratorTokens.columnGaps[screenSize]};
        `}

  ${({ screenSize, length, breakpoint = ScreenSize.XSmall }) =>
    length === 2
      ? screenSize > breakpoint
        ? css`
            grid-auto-flow: column;
            grid-template-columns: min-content auto;
            column-gap: ${PageGeneratorTokens.columnGaps[screenSize]};
          `
        : css`
            grid-auto-flow: row;
            row-gap: ${PageGeneratorTokens.rowGaps[
              getLiteralScreenSize(screenSize)
            ]};
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
