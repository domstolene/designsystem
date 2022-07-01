import { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { CSSObject } from 'styled-components';
import { Icon, IconName } from '../Icon';
import { focusVisibleTransitionValue, hideInput } from '../../helpers/styling';
import { buttonTokens } from '../Button/Button.tokens';
import { typographyTokens } from '../Typography/Typography.tokens';
import { toggleButtonTokens as tokens } from './ToggleButton.tokens';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

const Input = styled.input`
  ${hideInput as CSSObject}
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
    ${focusVisibleTransitionValue};
  cursor: pointer;
  ${buttonTokens.base}
  width: fit-content;
  ${buttonTokens.appearance.rounded.base}
  ${buttonTokens.sizes.small.text.base}
  ${tokens.base}
  &::selection, *::selection {
    ${typographyTokens.selection.base}
  }
  &:hover {
    ${tokens.hover.base}
  }
`;

const Container = styled.label`
  width: fit-content;
  ${Input}:checked + ${Content} {
    ${tokens.checked.base}
  }
  ${Input}:checked + ${Content}:hover {
    ${tokens.checked.hover.base}
  }
  ${Input}:focus-visible + ${Content} {
    ${tokens.focus.base}
  }
`;

let nextUniqueId = 0;

export type ToggleButtonProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for inputelementet. */
    label?: string;
    /** Ikon. */
    icon?: IconName;
  },
  InputHTMLAttributes<HTMLInputElement>
>;

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ id, label, icon, htmlProps, ...rest }, ref) => {
    const [uniqueId] = useState<string>(id ?? `toggleButton-${nextUniqueId++}`);

    const inputProps = {
      ...getBaseHTMLProps(id, htmlProps, rest),
      ref,
      id: uniqueId,
      type: 'checkbox'
    };

    const containerProps = {
      htmlFor: uniqueId
    };

    return (
      <Container {...containerProps}>
        <Input {...inputProps} />
        <Content>
          {icon && <Icon iconName={icon} iconSize="inherit" />} {label}
        </Content>
      </Container>
    );
  }
);
