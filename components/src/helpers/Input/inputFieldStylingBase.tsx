import { css, CSSObject } from 'styled-components';
import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { typographyTokens } from '../../components/Typography/Typography.tokens';

const { textInput: TextInput } = ddsReferenceTokens;

const { border: Border } = ddsBaseTokens;

const stylingBase: CSSObject = {
  color: TextInput.input.textColor,
  borderRadius: TextInput.input.borderRadius,
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  borderColor: TextInput.input.borderColor,
  ...TextInput.input.font
};

const focusBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: ` 0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`,
  outline: 'none'
};

const hoverBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
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
    &[type='text'],
    &[type='password'],
    &[type='number'],
    &[type='tel'],
    &[type='date'],
    &[type='url'],
    &[type='email'],
    &[type='search'],
    &[type='datetime-local'] {
      -webkit-appearance: none;
    }
    &::selection {
      ${typographyTokens.selection.base}
    }
    ${stylingBase}

    &:focus:enabled:read-write, &:focus-visible:enabled:read-write, &:active:enabled:read-write {
      ${focusBase}
    }
    &:focus {
      outline: none;
    }

    &:hover:enabled:read-write {
      ${hoverBase}
    }
  `;
};
