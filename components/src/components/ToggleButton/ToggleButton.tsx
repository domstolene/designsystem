import { forwardRef, useId } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { focusVisibleTransitionValue, selection } from '../../helpers/styling';
import { buttonTokens } from '../Button/Button.tokens';
import { toggleButtonTokens as tokens } from './ToggleButton.tokens';
import { getBaseHTMLProps } from '../../types';
import { HiddenInput } from '../../helpers';
import { ToggleButtonProps } from './ToggleButton.types';

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
    ${selection}
  }
  &:hover {
    ${tokens.hover.base}
  }
`;

const Container = styled.label`
  width: fit-content;
  ${HiddenInput}:checked + ${Content} {
    ${tokens.checked.base}
  }
  ${HiddenInput}:checked + ${Content}:hover {
    ${tokens.checked.hover.base}
  }
  ${HiddenInput}:focus-visible + ${Content} {
    ${tokens.focus.base}
  }
`;

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ id, label, icon, className, htmlProps, ...rest }, ref) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-toggleButton`;

    const inputProps = {
      ...getBaseHTMLProps(uniqueId, className, htmlProps, rest),
      ref,
      type: 'checkbox',
    };

    const containerProps = {
      htmlFor: uniqueId,
    };

    return (
      <Container {...containerProps}>
        <HiddenInput {...inputProps} />
        <Content>
          {icon && <Icon icon={icon} iconSize="inherit" />} {label}
        </Content>
      </Container>
    );
  }
);
