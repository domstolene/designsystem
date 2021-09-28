import React from 'react';
import styled, { css } from 'styled-components';
import { Divider } from '../components/Divider';
import { Typography } from '../components/Typography';
import { StoryContainer } from './StoryContainer';

const Container = styled.div<{ gap?: string; noFlex?: boolean }>`
  ${({ noFlex }) =>
    !noFlex &&
    css`
      display: flex;
      flex-direction: column;
    `}
  & > * {
    margin-top: ${({ gap }) => (gap ? gap : '20px')};
  }
`;

export const storyHTMLTemplate = (
  title: string,
  children: React.ReactNode,
  gap?: string,
  noFlex?: boolean
) => {
  return (
    <StoryContainer className="component-container">
      <Typography as="h1" typographyType="headingSans03">
        {title}
      </Typography>
      <Divider color="primaryLighter" />

      <Container gap={gap} noFlex={noFlex}>
        {children}
      </Container>
    </StoryContainer>
  );
};
