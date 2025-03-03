import {
  type ChangeEvent,
  type ComponentPropsWithRef,
  useId,
  useState,
} from 'react';

import { useAutocompleteSearch } from './AutocompleteSearch.context';
import styles from './Search.module.css';
import { type SearchButtonProps, type SearchSize } from './Search.types';
import { createEmptyChangeEvent, typographyTypes } from './Search.utils';
import { SearchSuggestions } from './SearchSuggestions';
import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { Input, type InputProps } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon, type IconSize } from '../Icon';
import { CloseSmallIcon, SearchIcon } from '../Icon/icons';
import { renderInputMessage } from '../InputMessage';
import { Label, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

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

export type SearchProps = Pick<InputProps, 'tip' | 'label'> & {
  /**Størrelsen på komponenten. */
  componentSize?: SearchSize;
  /**Props for søkeknappen. */
  buttonProps?: SearchButtonProps;
} & ComponentPropsWithRef<'input'>;

export const Search = ({
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
  ref,
  ...rest
}: SearchProps) => {
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

  const {
    label: buttonLabel,
    onClick,
    ...otherButtonProps
  } = buttonProps ?? {};

  const hasSuggestions = !!context.suggestions;
  const showSearchButton = !!buttonProps && !!onClick;

  return (
    <div className={styles.container}>
      {hasLabel && <Label htmlFor={uniqueId}>{label}</Label>}
      <div>
        <div
          className={cn(
            className,
            showSearchButton && styles['with-button-container'],
          )}
          style={style}
        >
          <div className={styles['input-group']}>
            <Icon
              icon={SearchIcon}
              iconSize={getIconSize(componentSize)}
              className={cn(
                inputStyles['input-group__absolute-element'],
                styles['search-icon'],
              )}
            />
            <Input
              {...rest}
              ref={combinedRef}
              name={name}
              type="search"
              id={uniqueId}
              aria-describedby={spaceSeparatedIdListGenerator([
                tip ? tipId : undefined,
                context.suggestions ? suggestionsDescriptionId : undefined,
                ariaDescribedby,
              ])}
              value={context.inputValue ?? value}
              onChange={handleChange}
              autoComplete="off"
              aria-autocomplete={hasSuggestions ? 'list' : undefined}
              aria-controls={hasSuggestions ? suggestionsId : undefined}
              aria-expanded={context.showSuggestions}
              role={hasSuggestions ? 'combobox' : undefined}
              className={cn(
                styles.input,
                styles[`input--${componentSize}`],
                typographyStyles[
                  getTypographyCn(typographyTypes[componentSize])
                ],
              )}
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
              <Button
                icon={CloseSmallIcon}
                size={componentSize === 'large' ? 'medium' : 'small'}
                purpose="tertiary"
                aria-label="Tøm"
                onClick={clearInput}
                className={styles['clear-button']}
              />
            )}
          </div>
          {showSearchButton && (
            <Button
              size={componentSize}
              onClick={onClick}
              {...otherButtonProps}
            >
              {buttonLabel ?? 'Søk'}
            </Button>
          )}
        </div>
        {renderInputMessage(tip, tipId)}
      </div>
    </div>
  );
};

Search.displayName = 'Search';
