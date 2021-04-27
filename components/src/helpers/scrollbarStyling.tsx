import { css } from "styled-components";
import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';

const scrollbarStyling = css`
    /* width */
&::-webkit-scrollbar {
  width: 16px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 100px;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: ${tokens.colors.DdsColorPrimaryDarkest.slice(0,-2)+"0.35)"};
  border-radius: 100px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: ${tokens.colors.DdsColorPrimaryDarkest.slice(0,-2)+"0.5)"};
}
`;

export default scrollbarStyling;