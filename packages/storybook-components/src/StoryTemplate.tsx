import { CSSProperties, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import 'focus-visible';
import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { fontPackages } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const StoryContainer = styled.div`
  padding: 1.5rem;
`;

const H1 = styled.h1`
  color: ${textDefault.textColor};
  font: ${fontPackages.heading_sans_03.base};
`;

interface ContainerProps {
  $gap?: string;
  $display?: StoryDisplay;
  $columnsAmount?: number;
}

const Container = styled.div<ContainerProps>`
  padding-top: ${ddsBaseTokens.spacing.SizesDdsSpacingX1};
  ${({ $display: display, $gap: gap, $columnsAmount }) =>
    gap &&
    display &&
    $columnsAmount &&
    (display === 'flex-column'
      ? css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: ${gap};
        `
      : display === 'grid'
        ? css`
            display: grid;
            gap: ${gap};
            grid-template-columns: ${`repeat(
            ${$columnsAmount},
            fit-content(100%) )`};
          `
        : display === 'flex-centered'
          ? css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: ${gap};
            `
          : display === 'block'
            ? css`
                margin-top: ${gap};
              `
            : '')}
`;

export type StoryDisplay = 'block' | 'flex-column' | 'grid' | 'flex-centered';

type StoryTemplateProps = {
  title: string;
  gap?: string;
  $columnsAmount?: number;
  display?: StoryDisplay;
  containerStyle?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const StoryTemplate = ({
  title,
  gap = '20px',
  $columnsAmount = 3,
  display = 'flex-column',
  children,
  containerStyle,
  ...rest
}: StoryTemplateProps) => {
  return (
    <StoryContainer {...rest} className="component-container">
      <H1>{title}</H1>
      <hr />
      <Container
        $gap={gap}
        $display={display}
        style={containerStyle}
        $columnsAmount={$columnsAmount}
      >
        {children}
      </Container>
    </StoryContainer>
  );
};
