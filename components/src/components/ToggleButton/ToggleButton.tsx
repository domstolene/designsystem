import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { CSSObject } from 'styled-components';
import { IconWrapper } from '../IconWrapper';
import { focusVisibleTransitionValue, hideInput } from '../../helpers/styling';
import { buttonTokens } from '../Button/Button.tokens';
import { typographyTokens } from '../Typography/Typography.tokens';
import { toggleButtonTokens as tokens } from './ToggleButton.tokens';

const Input = styled.input`
  ${hideInput as CSSObject}
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
  }
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

export type ToggleButtonProps = {
  /**Ledetekst for inputelementet. */
  label?: string;
  /** Ikon. */
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & InputHTMLAttributes<HTMLInputElement>;

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ id, label, Icon, ...rest }, ref) => {
    const [uniqueId] = useState<string>(id ?? `toggleButton-${nextUniqueId++}`);

    const inputProps = {
      ref,
      id: uniqueId,
      type: 'checkbox',
      ...rest
    };

    const containerProps = {
      htmlFor: uniqueId
    };

    return (
      <Container {...containerProps}>
        <Input {...inputProps} />
        <Content>
          {Icon && <IconWrapper Icon={Icon} iconSize="inline" />} {label}
        </Content>
      </Container>
    );
  }
);
