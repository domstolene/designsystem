import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: ${({ gap }) => (gap ? gap : '20px')};
  }
`;

export const storyHTMLTemplate = (
  title: string,
  children: React.ReactNode,
  gap?: string
) => {
  return (
    <div className="component-container">
      <h2> {title} </h2>
      <hr />
      <Container gap={gap}>{children}</Container>
    </div>
  );
};
