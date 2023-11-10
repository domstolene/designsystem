import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
  useCombinedRef,
} from '@norges-domstoler/dds-core';
import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from '@norges-domstoler/dds-form';
import {
  CloseSmallIcon,
  Icon,
  IconSize,
  SearchIcon,
} from '@norges-domstoler/dds-icons';
import { getFontStyling, Label } from '@norges-domstoler/dds-typography';
import {
  ButtonHTMLAttributes,
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useId,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { renderInputMessage } from '../../utils/renderInputMessage';
import { Button } from '../Button';
import { VisuallyHidden } from '../VisuallyHidden';
import { useAutocompleteSearch } from './AutocompleteSearch.context';
import { searchTokens as tokens, typographyTypes } from './Search.tokens';
import { createEmptyChangeEvent } from './Search.utils';
import { SearchSuggestions } from './SearchSuggestions';

const { input, outerContainer, horisontalContainer, searchIcon, clearButton } =
  tokens;

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

interface InputProps {
  componentSize: SearchSize;
}

const Input = styled(BaseInput)<InputProps>`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  padding-right: ${input.base.paddingRight};

  ${({ componentSize }) => css`
    padding-top: ${input.sizes[componentSize].paddingTop};
    padding-bottom: ${input.sizes[componentSize].paddingBottom};
    padding-left: ${input.sizes[componentSize].paddingLeft};
    ${getFontStyling(typographyTypes[componentSize])}
  `}
`;

interface StyledSearchIconProps {
  size: SearchSize;
}

const StyledSearchIcon = styled(Icon)<StyledSearchIconProps>`
  position: absolute;
  left: ${searchIcon.base.left};
  color: ${searchIcon.base.color};
  ${({ size }) => css`
    top: ${tokens.searchIcon[size].top};
  `}
  z-index: 1;
`;

const StyledClearButton = styled(Button)`
  position: absolute;
  right: ${clearButton.right};
  color: ${clearButton.color};
  top: ${clearButton.top};
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${outerContainer.gap};
`;

interface HorisontalContainerProps {
  hasSearchButton: boolean;
}

const HorisontalContainer = styled.div<HorisontalContainerProps>`
  ${props =>
    props.hasSearchButton &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${horisontalContainer.gap};
    `}
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

export type SearchSize = 'small' | 'medium' | 'large';
type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  purpose?: 'primary' | 'secondary';
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
    ref,
  ) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-searchInput`;
    const hasLabel = !!label;
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const suggestionsId = derivativeIdGenerator(uniqueId, 'suggestions');
    const suggestionsDescriptionId = derivativeIdGenerator(
      uniqueId,
      'suggestions-description',
    );

    const [hasValue, setHasValue] = useState(!!value);

    const context = useAutocompleteSearch();

    const combinedRef = context.inputRef
      ? useCombinedRef(context.inputRef, ref)
      : ref;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value !== '');

      context.onValueChange && context.onValueChange(e);
      onChange && onChange(e);
    };

    const clearInput = () => {
      const emptyChangeEvent = createEmptyChangeEvent(uniqueId);
      handleChange(emptyChangeEvent);
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
      value: context.inputValue ?? value,
      onChange: handleChange,
      autoComplete: 'off',
    };

    const {
      label: buttonLabel,
      onClick,
      ...otherButtonProps
    } = buttonProps ?? {};

    const hasSuggestions = !!context.suggestions;
    const showSearchButton = !!buttonProps && !!onClick;

    return (
      <OuterContainer>
        {hasLabel && <Label htmlFor={uniqueId}>{label}</Label>}
        <div>
          <HorisontalContainer
            hasSearchButton={showSearchButton}
            {...containerProps}
          >
            <InputContainer>
              <StyledSearchIcon
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
              {hasValue && (
                <StyledClearButton
                  icon={CloseSmallIcon}
                  size="tiny"
                  purpose="secondary"
                  appearance="borderless"
                  aria-label="Tøm"
                  onClick={clearInput}
                />
              )}
            </InputContainer>
            {showSearchButton && (
              <Button
                size={componentSize}
                onClick={onClick}
                {...otherButtonProps}
              >
                {buttonLabel ?? 'Søk'}
              </Button>
            )}
          </HorisontalContainer>
          {renderInputMessage(tip, tipId)}
        </div>
      </OuterContainer>
    );
  },
);

Search.displayName = 'Search';
