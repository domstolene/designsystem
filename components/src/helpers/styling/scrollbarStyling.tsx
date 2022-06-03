import { css } from 'styled-components';
import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';

export const scrollbarStyling = css`
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${tokens.colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.35)'};
    border-radius: 100px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${tokens.colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.5)'};
  }

  /* Firefox */
  scrollbar-color: ${tokens.colors.DdsColorPrimaryDarkest.slice(0, -2) +
    '0.35)'}
    transparent;
  scrollbar-width: thin;
`;
