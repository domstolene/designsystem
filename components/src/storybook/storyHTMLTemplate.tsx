import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ gap?: string }>`
  ${({ gap }) =>
    gap &&
    css`
      & > * {
        margin-top: ${gap};
      }
    `}
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
      <Container className="flex-components" gap={gap}>
        {children}
      </Container>
    </div>
  );
};
