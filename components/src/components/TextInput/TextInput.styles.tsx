import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';
import { textInputTokens as tokens } from './TextInput.tokens';
import {
  Label as BaseLabel,
  StyledInputProps,
  inputTokens,
  StatefulInput,
} from '../../helpers';
import { scrollbarStyling } from '../../helpers/styling';

export const TextArea = styled(StatefulInput)<StyledInputProps>`
  ${scrollbarStyling}
  ${tokens.multiline.base}
  ${({ hasLabel }) =>
    css`
      ${tokens.multiline[hasLabel].base}
    `}

  &:hover:enabled:read-write ~ label {
    background-color: ${({ hasErrorMessage }) =>
      hasErrorMessage
        ? inputTokens.error.hover.base.backgroundColor
        : inputTokens.general.input.hover.backgroundColor};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type LabelProps = Pick<TextInputProps, 'multiline' | 'disabled' | 'readOnly'>;

export const Label = styled(BaseLabel)<LabelProps>`
  ${({ multiline }) =>
    multiline &&
    css`
      ${tokens.label.multiline.base}
    `}
  ${({ multiline, disabled, readOnly }) =>
    multiline && readOnly
      ? css`
          background-color: ${inputTokens.readOnly.base.backgroundColor};
        `
      : multiline && disabled
      ? css`
          background-color: ${inputTokens.readOnly.base.backgroundColor};
        `
      : ''}
`;
