import React, {
  ButtonHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button } from '../Button';
import { searchTokens as tokens } from './Search.tokens';
import { inputFieldStylingBase } from '../../helpers/Input/inputFieldStylingBase';
import { InputMessage } from '../../helpers/InputMessage/InputMessage';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';

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

let nextUniqueId = 0;

export type SearchSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type SearchProps = {
  /**Størrelsen på komponenten. */
  componentSize?: SearchSize;
  /**Hjelpetekst. */
  tip?: string;
  /**Props for søkeknappen. */
  buttonProps?: ButtonProps;
} & InputHTMLAttributes<HTMLInputElement>;

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      componentSize = 'medium',
      buttonProps,
      name,
      tip,
      id,
      className,
      style,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `searchInput-${nextUniqueId++}`);
    const hasTip = !!tip;
    const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);

    const containerProps = {
      className,
      style
    };

    const inputProps = {
      ...rest,
      componentSize,
      name,
      type: 'search',
      id: uniqueId,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tipId,
        ariaDescribedby
      ])
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
          {hasTip && (
            <InputMessage messageId={tipId} messageType="tip" message={tip} />
          )}
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
