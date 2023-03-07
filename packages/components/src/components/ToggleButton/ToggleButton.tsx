import { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import {
  focusVisible,
  focusVisibleTransitionValue,
  selection,
} from '../../helpers/styling';
import {
  toggleButtonTokens as tokens,
  typographyType,
} from './ToggleButton.tokens';
import { getBaseHTMLProps } from '../../types';
import { HiddenInput } from '../../helpers';
import { ToggleButtonProps } from './ToggleButton.types';
import { getFontStyling } from '../Typography/Typography.utils';

const { toggleButton } = tokens;

type ContentProps = {
  hasIcon?: boolean;
};

const Content = styled.span<ContentProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  border: ${toggleButton.border};
  background-color: ${toggleButton.backgroundColor};
  color: ${toggleButton.color};
  border-radius: ${toggleButton.borderRadius};
  padding: ${toggleButton.padding};
  ${getFontStyling(typographyType)}
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      ${focusVisibleTransitionValue};
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      gap: ${toggleButton.gap};
    `}

  &::selection,
  *::selection {
    ${selection}
  }
  &:hover {
    background-color: ${toggleButton.hover.backgroundColor};
    box-shadow: ${toggleButton.hover.boxShadow};
    border-color: ${toggleButton.hover.borderColor};
  }
`;

const Container = styled.label`
  width: fit-content;
  ${HiddenInput}:checked + ${Content} {
    background-color: ${toggleButton.checked.backgroundColor};
    border-color: ${toggleButton.checked.borderColor};
    color: ${toggleButton.checked.color};
  }
  ${HiddenInput}:checked + ${Content}:hover {
    background-color: ${toggleButton.checked.hover.backgroundColor};
    border-color: ${toggleButton.checked.hover.borderColor};
    box-shadow: ${toggleButton.checked.hover.boxShadow};
  }
  ${HiddenInput}:focus-visible + ${Content} {
    ${focusVisible}
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
        <Content hasIcon={!!icon}>
          {icon && <Icon icon={icon} iconSize="inherit" />} {label}
        </Content>
      </Container>
    );
  }
);