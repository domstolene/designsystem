import { css } from 'styled-components';

export const visibilityTransition = (open: boolean) => {
  return css`
    transition: visibility 0.4s, opacity 0.2s;
    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? 1 : 0};
  `;
};
