import React, {
  ButtonHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent
} from 'react';
import styled, { css } from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Button } from '../Button';
import { searchTokens as tokens } from './Search.tokens';
import { inputFieldStylingBase } from '../../helpers/Input/inputFieldStylingBase';
import InputMessage from '../../helpers/InputMessage/InputMessage';

type InputProps = Pick<SearchProps, 'componentSize'>;

const Input = styled.input<InputProps>`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  ${inputFieldStylingBase}
  ${tokens.input.base}

    ${({ componentSize }) =>
    componentSize &&
    css`
      ${tokens.input[componentSize].base}
    `}

    padding-left: ${tokens.input.spaceLeft};
`;

const IconWrapper = styled.span`
  ${tokens.iconWrapper.base}
  position: absolute;
  top: ${tokens.icon.spaceTop};
  left: ${tokens.icon.spaceLeft};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  margin-left: ${tokens.buttonWrapper.spaceLeft};
`;

export type SearchSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type SearchProps = {
  tip?: string;
  buttonProps?: ButtonProps;
  componentSize?: SearchSize;
  className?: string;
  style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      componentSize = 'medium',
      buttonProps,
      name,
      tip,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const containerProps = {
      className,
      style
    };

    const inputProps = {
      componentSize,
      name,
      type: 'search',
      ...rest
    };

    const { label, onClick, ...otherButtonProps } = buttonProps || {};

    return (
      <Container {...containerProps}>
        <InputContainer>
          <InputWrapper>
            <IconWrapper>
              <SearchOutlinedIcon />
            </IconWrapper>
            <Input ref={ref} {...inputProps} />
          </InputWrapper>
          {tip && <InputMessage messageType="tip" message={tip} />}
        </InputContainer>
        {buttonProps && onClick && (
          <ButtonWrapper>
            <Button
              size={componentSize}
              label={label || 'Søk'}
              onClick={onClick}
              {...otherButtonProps}
            />
          </ButtonWrapper>
        )}
      </Container>
    );
  }
);
