import { CSSProperties, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Divider } from '../components/Divider';
import { Typography } from '../components/Typography';
import 'focus-visible';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const StoryContainer = styled.div`
  padding: 1.5rem;
`;

type ContainerProps = {
  gap?: string;
  display?: StoryDisplay;
  columnsAmount?: number;
};

const Container = styled.div<ContainerProps>`
  padding-top: ${ddsBaseTokens.spacing.SizesDdsSpacingLayoutX1};
  ${({ display, gap, columnsAmount }) =>
    gap &&
    display &&
    columnsAmount &&
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
            ${columnsAmount},
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
  columnsAmount?: number;
  display?: StoryDisplay;
  containerStyle?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const StoryTemplate = ({
  title,
  gap = '20px',
  columnsAmount = 3,
  display = 'flex-column',
  children,
  containerStyle,
  ...rest
}: StoryTemplateProps) => {
  return (
    <StoryContainer {...rest} className="component-container">
      <Typography as="h1" typographyType="headingSans03">
        {title}
      </Typography>
      <Divider color="primaryLighter" />
      <Container
        gap={gap}
        display={display}
        style={containerStyle}
        columnsAmount={columnsAmount}
      >
        {children}
      </Container>
    </StoryContainer>
  );
};
