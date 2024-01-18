import { type HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { GridContext } from './Grid.context';
import { gridTokens } from './Grid.tokens';
import { type ScreenSize, useScreenSize } from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { type BreakpointBasedProps, getLiteralScreenSize } from '../helpers';

interface StyledGridProps {
  screenSize: ScreenSize;
  maxWidth?: MaxWidthGrid;
  rowGap?: RowGapGrid;
}

const getHooksGridStyling = (
  screenSize: ScreenSize,
  maxWidth?: MaxWidthGrid,
  rowGap?: RowGapGrid,
) => {
  const tokens = gridTokens[screenSize].grid;
  return {
    gridTemplateColumns: `repeat(${tokens.columns}, minmax(0, 1fr))`,
    columnGap: tokens.columnGap,
    marginLeft: tokens.marginLeft,
    marginRight: tokens.marginRight,
    rowGap:
      rowGap && rowGap[getLiteralScreenSize(screenSize)]
        ? rowGap[getLiteralScreenSize(screenSize)]
        : tokens.columnGap,
    maxWidth:
      maxWidth &&
      maxWidth[getLiteralScreenSize(screenSize)] &&
      maxWidth[getLiteralScreenSize(screenSize)],
  };
};

const StyledGrid = styled.div.withConfig({
  shouldForwardProp: prop => {
    const styleOnlyProps: Array<keyof StyledGridProps> = [
      'maxWidth',
      'rowGap',
      'screenSize',
    ];

    return !styleOnlyProps.some(styleProp => styleProp === prop);
  },
})<StyledGridProps>`
  display: grid;
  ${({ maxWidth }) => css`
    max-width: ${maxWidth};
  `}
  ${({ screenSize, maxWidth, rowGap }) =>
    getHooksGridStyling(screenSize, maxWidth, rowGap)}
`;

type RowGapGrid = BreakpointBasedProps<'rowGap'>;
type MaxWidthGrid = BreakpointBasedProps<'maxWidth'>;

type BaseGridProps = {
  /**Maksimal bredde. Gjøres per brekkepunkt.  */
  maxWidth?: MaxWidthGrid;
  /** CSS `row-gap`. Gjøres per brekkepunkt. */
  rowGap?: RowGapGrid;
} & Pick<HTMLAttributes<HTMLElement>, 'style'>;

type GridDivProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**HTML tag som returneres. */
    as: 'div';
  } & BaseGridProps
>;
type GridFormProps = BaseComponentPropsWithChildren<
  HTMLFormElement,
  { as: 'form' } & BaseGridProps
>;

export type GridProps = GridDivProps | GridFormProps;

export const Grid = (props: GridProps) => {
  const { id, className, children, htmlProps, as, ...rest } = props;
  const screenSize = useScreenSize();
  return (
    <GridContext.Provider value={{ screenSize: screenSize }}>
      {as === 'div' ? (
        <StyledGrid
          {...getBaseHTMLProps(id, className, htmlProps, rest)}
          screenSize={screenSize}
        >
          {children}
        </StyledGrid>
      ) : (
        <StyledGrid
          {...getBaseHTMLProps(id, className, htmlProps, rest)}
          screenSize={screenSize}
          as={as}
        >
          {children}
        </StyledGrid>
      )}
    </GridContext.Provider>
  );
};

Grid.displayName = 'Grid';
