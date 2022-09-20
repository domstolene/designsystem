import styled, { css } from 'styled-components';
import { ScreenSize } from '../../hooks';
import { gridTokens as tokens } from '../../storybook/examples/Grid.tokens';
import { Property } from 'csstype';
import { useGridContext } from './Grid.context';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type ScreenSizeLiteral = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const getScreenSize = (screenSize: ScreenSize): ScreenSizeLiteral => {
  switch (screenSize) {
    case ScreenSize.XLarge:
      return 'xl';
    case ScreenSize.Large:
      return 'lg';
    case ScreenSize.Medium:
      return 'md';
    case ScreenSize.Small:
      return 'sm';
    case ScreenSize.XSmall:
      return 'xs';
  }
};

type StyledGridChildProps = {
  screenSize: ScreenSize;
  columnsOccupied: ColumnsOccupied;
  columnsOccupiedCustom?: ColumnsOccupiedCustom;
  justifySelf?: Property.JustifySelf;
};

const StyledGridChild = styled.div<StyledGridChildProps>`
  grid-column: ${({ screenSize, columnsOccupied }) =>
    columnsOccupied === 'all'
      ? '1 / -1'
      : tokens[screenSize][columnsOccupied].gridColumn};

  ${({ screenSize, columnsOccupiedCustom }) =>
    columnsOccupiedCustom &&
    css`
      grid-column: ${columnsOccupiedCustom[getScreenSize(screenSize)]};
    `}
  justify-self: ${({ justifySelf }) => justifySelf && justifySelf};
`;

type ColumnsOccupiedCustom = {
  xs?: Property.GridColumn;
  sm?: Property.GridColumn;
  md?: Property.GridColumn;
  lg?: Property.GridColumn;
  xl?: Property.GridColumn;
};

export type ColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';

export type GridChildProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    columnsOccupied?: ColumnsOccupied;
    justifySelf?: Property.JustifySelf;
    columnsOccupiedCustom?: ColumnsOccupiedCustom;
  }
>;

export const GridChild = (props: GridChildProps) => {
  const {
    id,
    className,
    htmlProps,
    columnsOccupied = 'all',
    children,
    ...rest
  } = props;
  const { screenSize } = useGridContext();

  return (
    <StyledGridChild
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      screenSize={screenSize}
      columnsOccupied={columnsOccupied}
    >
      {children}
    </StyledGridChild>
  );
};
