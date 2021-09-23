import React from 'react';
import styled from 'styled-components';
import { Divider } from '../components/Divider';
import { Typography } from '../components/Typography';

const GridContainer = styled.div<{ gap?: string; columnsCount?: number }>`
  display: grid;
  gap: ${({ gap }) => (gap ? gap : '20px')};
  grid-template-columns: repeat(
    ${({ columnsCount }) => (columnsCount ? columnsCount : 3)},
    fit-content(100%)
  );
`;

export const storyHTMLGridTemplate = (
  title: string,
  children: React.ReactNode,
  gap?: string,
  columnsCount?: number
) => {
  return (
    <div className="component-container">
      <Typography as="h1" typographyType="headingSans03">
        {title}
      </Typography>
      <Divider color="primaryLighter" />
      <GridContainer gap={gap} columnsCount={columnsCount}>
        {children}
      </GridContainer>
    </div>
  );
};
