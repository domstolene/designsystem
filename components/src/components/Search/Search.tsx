import {
  ButtonHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { searchTokens as tokens } from './Search.tokens';
import {
  Input as BaseInput,
  InputContainer,
  OuterInputContainer,
  InputProps as BaseInputProps
} from '../../helpers';
import { InputMessage } from '../InputMessage';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';
import { Icon, IconSize } from '../Icon';

type InputProps = { componentSize: SearchSize };

const Input = styled(BaseInput)<InputProps>`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  ${tokens.input.base}

  ${({ componentSize }) =>
    css`
      ${tokens.input[componentSize].base}
    `}
`;

type StyledIconProps = {
  size: SearchSize;
};

const IconWrapper = styled(Icon)<StyledIconProps>`
  position: absolute;
  ${tokens.iconWrapper.base}
  left: ${tokens.icon.spaceLeft};
  ${({ size }) => css`
    top: ${tokens.icon[size].spaceTop};
  `}
`;

const Container = styled.div`
  ${tokens.container.base}
`;

const ButtonWrapper = styled.div``;

let nextUniqueId = 0;

export type SearchSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type SearchProps = Pick<BaseInputProps, 'tip'> & {
  /**Størrelsen på komponenten. */
  componentSize?: SearchSize;
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
      ref,
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
        <OuterInputContainer width="100%">
          <InputContainer>
            <IconWrapper
              iconName="search"
              size={componentSize}
              iconSize={tokens.icon[componentSize].size as IconSize}
            />
            <Input {...inputProps} />
          </InputContainer>
          {hasTip && (
            <InputMessage id={tipId} messageType="tip" message={tip} />
          )}
        </OuterInputContainer>
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
