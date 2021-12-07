import { CSSProperties, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Divider } from '../components/Divider';
import { Typography } from '../components/Typography';
import { StoryContainer } from './StoryContainer';
import 'focus-visible';

const Container = styled.div<{
  gap?: string;
  display?: StoryDisplay;
  columnsAmount?: number;
}>`
  ${({ display, gap, columnsAmount }) =>
    gap &&
    display &&
    columnsAmount &&
    (display === 'flex'
      ? css`
          display: flex;
          flex-direction: column;
          & > * {
            margin-top: ${gap};
          }
        `
      : display === 'grid'
      ? css`
          display: grid;
          gap: ${gap};
          grid-template-columns: ${`repeat(
            ${columnsAmount},
            fit-content(100%)`}
          );
          `
      : '')}
`;

export type StoryDisplay = 'block' | 'flex' | 'grid';

type StoryTemplateProps = {
  title: string;
  gap?: string;
  columnsAmount?: number;
  display?: StoryDisplay;
  containerStyle?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const StoryTemplate = ({
  title,
  gap = '20px',
  columnsAmount = 3,
  display = 'flex',
  children,
  ...rest
}: StoryTemplateProps) => {
  return (
    <StoryContainer {...rest} className="component-container">
      <Typography as="h1" typographyType="headingSans03">
        {title}
      </Typography>
      <Divider color="primaryLighter" />
      <Container gap={gap} display={display} columnsAmount={columnsAmount}>
        {children}
      </Container>
    </StoryContainer>
  );
};
