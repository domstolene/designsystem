import { css, CSSObject } from 'styled-components';
import { ddsReferenceTokens } from '@norges-domstoler/dds-design-tokens';

const { textInput: TextInput } = ddsReferenceTokens;

const stylingBase: CSSObject = {
  color: TextInput.input.textColor,
  borderRadius: TextInput.input.borderRadius,
  border: `${TextInput.input.borderWidth} solid`,
  borderColor: TextInput.input.borderColor,
  ...TextInput.input.font
};

const focusBase: CSSObject = {
  border: `${TextInput.input.borderWidth} solid`,
  borderColor: TextInput.input.focus.borderColor,
  boxShadow: ` 0 0 0 1px ${TextInput.input.focus.borderColor}`,
  outline: 'none'
};

const hoverBase: CSSObject = {
  border: `${TextInput.input.borderWidth} solid`,
  borderColor: TextInput.input.hover.borderColor,
  boxShadow: ` 0 0 0 1px ${TextInput.input.focus.borderColor}`,
  backgroundColor: TextInput.input.hover.backgroundColor
};

export const inputFieldStylingBase = () => {
  return css`
    width: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
    ${stylingBase}

    &:focus:enabled, &:active:enabled {
      ${focusBase}
    }

    &:hover:enabled {
      ${hoverBase}
    }
  `;
};
