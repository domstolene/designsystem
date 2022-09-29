import styled, { css } from 'styled-components';
import { ScreenSize, useScreenSize } from '../../hooks';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { gridTokens } from './Grid.tokens';
import { GridContext } from './Grid.context';
import { Property } from 'csstype';
import { getLiteralScreenSize } from './Grid.utils';
import { HTMLAttributes } from 'react';

type StyledGridProps = {
  screenSize: ScreenSize;
  maxWidth?: MaxWidthGrid;
};

const getHooksGridStyling = (
  screenSize: ScreenSize,
  maxWidth?: MaxWidthGrid
) => {
  const tokens = gridTokens[screenSize].grid;
  return {
    gridTemplateColumns: `repeat(${tokens.columns}, minmax(0, 1fr))`,
    gap: tokens.gap,
    marginLeft: tokens.marginLeft,
    marginRight: tokens.marginRight,
    maxWidth: maxWidth && maxWidth[getLiteralScreenSize(screenSize)],
  };
};

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  ${({ maxWidth }) =>
    css`
      max-width: ${maxWidth};
    `}
  ${({ screenSize, maxWidth }) => getHooksGridStyling(screenSize, maxWidth)}
`;

type MaxWidthGrid = {
  xs?: Property.MaxWidth;
  sm?: Property.MaxWidth;
  md?: Property.MaxWidth;
  lg?: Property.MaxWidth;
  xl?: Property.MaxWidth;
};

type BaseGridProps = {
  /**Maksimal bredde. Gjøres per brekkepunkt.  */
  maxWidth?: MaxWidthGrid;
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
