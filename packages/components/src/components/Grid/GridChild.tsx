import styled from 'styled-components';
import { ScreenSize } from '@norges-domstoler/dds-core';
import { gridTokens as tokens } from './Grid.tokens';
import { Property } from 'csstype';
import { useGridContext } from './Grid.context';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { HTMLAttributes } from 'react';
import {
  BreakpointBasedProps,
  getLiteralScreenSize,
} from '@norges-domstoler/dds-core';

interface StyledGridChildProps {
  screenSize: ScreenSize;
  columnsOccupied?: ColumnsOccupied;
  justifySelf?: Property.JustifySelf;
  gridRow?: Property.GridRow;
}

export const isRelativeGridColumn = (
  type: ColumnsOccupied | undefined,
): type is RelativeColumnsOccupied => {
  return type === 'all' || type === 'firstHalf' || type === 'secondHalf';
};

export const isGridColumn = (
  type: ColumnsOccupied | undefined,
): type is GridColumnPerScreenSize => {
  return (
    (type as GridColumnPerScreenSize).xs !== undefined ||
    (type as GridColumnPerScreenSize).sm !== undefined ||
    (type as GridColumnPerScreenSize).md !== undefined ||
    (type as GridColumnPerScreenSize).lg !== undefined ||
    (type as GridColumnPerScreenSize).xl !== undefined
  );
};

const StyledGridChild = styled.div<StyledGridChildProps>`
  grid-column: ${({ screenSize, columnsOccupied }) =>
    columnsOccupied === 'all'
      ? '1 / -1'
      : isGridColumn(columnsOccupied)
      ? columnsOccupied[getLiteralScreenSize(screenSize)]
      : isRelativeGridColumn(columnsOccupied)
      ? tokens[screenSize].columns[columnsOccupied].gridColumn
      : ''};

  justify-self: ${({ justifySelf }) => justifySelf && justifySelf};
  grid-row: ${({ gridRow }) => gridRow && gridRow};
`;

type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';
type GridColumnPerScreenSize = BreakpointBasedProps<'gridColumn'>;

export type ColumnsOccupied = RelativeColumnsOccupied | GridColumnPerScreenSize;
export type GridChildProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**hvilke kolonner innholdet skal okkupere. Tar inn enten en string med relativ definisjon eller et objekt med egentilpassede `grid-column` CSS verdi definert for hver brekkepunkt. */
    columnsOccupied?: ColumnsOccupied;
    /**Plassering av innholdet på x-aksen. */
    justifySelf?: Property.JustifySelf;
    /**Hvilke rader innholdet skal okkupere. */
    gridRow?: Property.GridRow;
  }
> &
  Pick<HTMLAttributes<HTMLElement>, 'style'>;

export const GridChild = (props: GridChildProps) => {
  const { id, className, htmlProps, children, ...rest } = props;
  const { screenSize } = useGridContext();

  return (
    <StyledGridChild
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      screenSize={screenSize}
    >
      {children}
    </StyledGridChild>
  );
};

GridChild.displayName = 'GridChild';
