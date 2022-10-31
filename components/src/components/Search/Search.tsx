import {
  ButtonHTMLAttributes,
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useId,
} from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { searchTokens as tokens, typographyTypes } from './Search.tokens';
import {
  Input as BaseInput,
  InputProps as BaseInputProps,
  renderInputMessage,
} from '../../helpers';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Icon, IconSize } from '../Icon';
import { SearchIcon } from '../../icons/tsx';
import { Label } from '../Typography';
import { getFontStyling } from '../Typography/Typography.utils';
import { useCombinedRef } from '../../hooks';
import { SearchSuggestions } from './SearchSuggestions';
import { useAutocompleteSearch } from './AutocompleteSearch.context';
import { VisuallyHidden } from '../VisuallyHidden';

const { input, outerContainer, horisontalContainer, icon } = tokens;

const getIconSize = (size: SearchSize): IconSize => {
  switch (size) {
    case 'large':
      return 'medium';
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
  }
};

type InputProps = { componentSize: SearchSize };

const Input = styled(BaseInput)<InputProps>`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  padding-right: ${input.base.paddingRight};

  ${({ componentSize }) =>
    css`
      padding-top: ${input.sizes[componentSize].paddingTop};
      padding-bottom: ${input.sizes[componentSize].paddingBottom};
      padding-left: ${input.sizes[componentSize].paddingLeft};
      ${getFontStyling(typographyTypes[componentSize])}
    `}
`;

type StyledIconProps = {
  size: SearchSize;
};

const StyledIcon = styled(Icon)<StyledIconProps>`
  position: absolute;
  left: ${icon.base.left};
  color: ${icon.base.color};
  ${({ size }) => css`
    top: ${tokens.icon[size].top};
  `}
  z-index: 1;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${outerContainer.gap};
`;

const HorisontalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${horisontalContainer.gap};
`;

const InputContainer = styled.div`
  position: relative;
`;

export type SearchSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type SearchProps = Pick<BaseInputProps, 'tip' | 'label'> & {
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
      label,
      tip,
      id,
      value,
      onChange,
      className,
      style,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-searchInput`;
    const hasLabel = !!label;
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const suggestionsId = derivativeIdGenerator(uniqueId, 'suggestions');
    const suggestionsDescriptionId = derivativeIdGenerator(
      uniqueId,
      'suggestions-description'
    );

    const context = useAutocompleteSearch();

    const combinedRef = context.inputRef
      ? useCombinedRef(context.inputRef, ref)
      : ref;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      context.onValueChange && context.onValueChange(e);
      onChange && onChange(e);
    };

    const containerProps = {
      className,
      style,
    };

    const inputProps = {
      ...rest,
      ref: combinedRef,
      componentSize,
      name,
      type: 'search',
      id: uniqueId,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tip ? tipId : undefined,
        context.suggestions ? suggestionsDescriptionId : undefined,
        ariaDescribedby,
      ]),
      value:
        context.inputValue !== undefined
          ? context.inputValue
          : value
          ? value
          : undefined,
      onChange: handleChange,
      autoComplete: 'off',
    };

    const {
      label: buttonLabel,
      onClick,
      ...otherButtonProps
    } = buttonProps || {};

    const hasSuggestions = !!context.suggestions;

    return (
      <OuterContainer>
        {hasLabel && <Label htmlFor={uniqueId}>{label}</Label>}
        <div>
          <HorisontalContainer {...containerProps}>
            <InputContainer>
              <StyledIcon
                icon={SearchIcon}
                size={componentSize}
                iconSize={getIconSize(componentSize)}
              />
              <Input
                {...inputProps}
                aria-autocomplete={hasSuggestions ? 'list' : undefined}
                aria-controls={hasSuggestions ? suggestionsId : undefined}
                aria-expanded={context.showSuggestions}
                role={hasSuggestions ? 'combobox' : undefined}
              />
              {hasSuggestions && (
                <>
                  <SearchSuggestions
                    id={suggestionsId}
                    ref={context.suggestionsRef}
                    searchId={uniqueId}
                    onSuggestionClick={context.onSugggestionClick}
                    suggestions={context.suggestions}
                    showSuggestions={context.showSuggestions}
                    componentSize={componentSize}
                  />
                  <VisuallyHidden id={suggestionsDescriptionId} as="span">
                    Bla i søkeforslag med piltaster når listen er utvidet.
                  </VisuallyHidden>
                </>
              )}
            </InputContainer>
            {buttonProps && onClick && (
              <Button
                size={componentSize}
                label={buttonLabel || 'Søk'}
                onClick={onClick}
                {...otherButtonProps}
              />
            )}
          </HorisontalContainer>
          {renderInputMessage(tip, tipId)}
        </div>
      </OuterContainer>
    );
  }
);
