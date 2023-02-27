import styled, { css } from 'styled-components';
import { ScreenSize } from '@norges-domstoler/dds-components';
import { PageGeneratorTokens } from '../tokens';

export const PageGeneratorFlexContainer = styled.div<{
  screenSize: ScreenSize;
}>`
  ${({ screenSize }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${PageGeneratorTokens.columnGaps[screenSize]};
  `}
`;
