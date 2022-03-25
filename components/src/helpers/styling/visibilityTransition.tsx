import { css } from 'styled-components';

export const visibilityTransition = (open: boolean) => {
  return css`
    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? 1 : 0};
    transition: visibility 0.2s, opacity 0.2s;
  `;
};
