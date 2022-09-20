import styled, { css } from 'styled-components';
import { ScreenSize, useScreenSize } from '../../hooks';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { gridTokens } from '../../storybook/examples/Grid.tokens';
import { GridContext } from './Grid.context';
import { Property } from 'csstype';

type StyledGridProps = {
  screenSize: ScreenSize;
  maxWidth?: Property.MaxWidth;
};

const getHooksGridStyling = (screenSize: ScreenSize) => {
  const tokens = gridTokens[screenSize].grid;
  return {
    gridTemplateColumns: `repeat(${tokens.columns}, minmax(0, 1fr))`,
    gap: tokens.gap,
    marginLeft: tokens.marginLeft,
    marginRight: tokens.marginRight,
  };
};

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  ${({ maxWidth }) =>
    css`
      max-width: ${maxWidth};
    `}
  ${({ screenSize }) => getHooksGridStyling(screenSize)}
`;

type GridDivProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**HTML tag som returneres. */
    as: 'div';
  }
>;
type GridFormProps = BaseComponentPropsWithChildren<
  HTMLFormElement,
  { as: 'form' }
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
