import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import type { CSSProperties, HTMLAttributes } from 'react';
import { css, styled } from 'styled-components';
import 'focus-visible';

const StoryContainer = styled.div``;

const H1 = styled.h1`
  color: ${ddsTokens.DdsColorTextDefault};
`;

interface ContainerProps {
  $gap?: string;
  $display?: StoryDisplay;
  $columnsAmount?: number;
  $hasTitle?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ $hasTitle: hasTitle }) =>
    hasTitle &&
    css`
      padding-top: ${ddsTokens.DdsSpacingX1};
    `}
  ${({ $display: display, $gap: gap, $columnsAmount, $hasTitle: hasTitle }) =>
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
          : display === 'block' && hasTitle
            ? css`
                margin-top: ${gap};
              `
            : '')}
`;

export type StoryDisplay = 'block' | 'flex-column' | 'grid' | 'flex-centered';

type StoryTemplateProps = {
  title?: string;
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
      {title && (
        <>
          <H1>{title}</H1>
          <hr />
        </>
      )}
      <Container
        $hasTitle={!!title}
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
