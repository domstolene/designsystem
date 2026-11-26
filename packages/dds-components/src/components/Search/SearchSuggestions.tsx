import { type KeyboardEvent, type MouseEvent } from 'react';

import { useRoveFocus } from '../../hooks';
import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn, derivativeIdGenerator } from '../../utils';
import { StylelessList } from '../helpers';
import { DropdownHeader } from '../helpers/Dropdown/DropdownHeader';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Paper } from '../layout';
import { useAutocompleteSearch } from './AutocompleteSearch.context';
import styles from './Search.module.css';
import { SearchSuggestionItem } from './SearchSuggestionItem';

export type SearchSuggestionsProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Forslag som vises i listen. */
    suggestions?: Array<string>;
    /** Om listen skal vises. */
    showSuggestions?: boolean;
    /**Callback når et forslag blir valgt, inkludert søkefunksjon. */
    onSuggestionClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    /** Maks antall forslag vist i listen. */
    maxSuggestions?: number;
    /**Id til `<Search>`. */
    searchId: string;
  }
>;

export const SearchSuggestions = ({
  id,
  searchId,
  className,
  style,
  htmlProps,
  suggestions = [],
  showSuggestions,
  onSuggestionClick,
  maxSuggestions,
  ...rest
}: SearchSuggestionsProps) => {
  const suggestionsHeaderId = derivativeIdGenerator(
    searchId,
    'suggestions-header',
  );
  const { t } = useTranslation();
  const [focus, setFocus] = useRoveFocus(suggestions?.length, showSuggestions);
  const { inputRef } = useAutocompleteSearch();

  const handleReturnFocus = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
      setFocus(-1);
      inputRef?.current?.focus();
    } else if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      setFocus(-1);
      inputRef?.current?.focus();
    }
  };

  const suggestionsToRender = maxSuggestions
    ? suggestions?.slice(maxSuggestions)
    : suggestions;

  return (
    <Paper
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.suggestions,
          utilStyles.scrollbar,
          utilStyles['visibility-transition'],
          showSuggestions
            ? utilStyles['visibility-transition--open']
            : utilStyles['visibility-transition--closed'],
        ),
        style,
        htmlProps,
        rest,
      )}
      aria-hidden={!showSuggestions}
      border="border-default"
      position="absolute"
      top="100%"
      width="100%"
      maxHeight="300px"
      overflowY="scroll"
      marginBlock="x0.25 0"
    >
      <DropdownHeader id={suggestionsHeaderId}>
        {t(texts.searchSuggestions)}
      </DropdownHeader>
      <StylelessList role="listbox" aria-labelledby={suggestionsHeaderId}>
        {suggestionsToRender.map((suggestion, index) => {
          return (
            <SearchSuggestionItem
              key={index}
              index={index}
              focus={focus === index && showSuggestions}
              aria-label={t(texts.search(suggestion))}
              onClick={onSuggestionClick}
              aria-setsize={suggestionsToRender.length}
              aria-posinset={index + 1}
              onKeyDown={handleReturnFocus}
            >
              {suggestion}
            </SearchSuggestionItem>
          );
        })}
      </StylelessList>
    </Paper>
  );
};

SearchSuggestions.displayName = 'SearchSuggestions';

const texts = createTexts({
  search: suggestion => ({
    no: `${suggestion} søk`,
    nb: `${suggestion} søk`,
    nn: `${suggestion} søk`,
    en: `${suggestion} search`,
    se: `${suggestion} ohcan`,
  }),
  searchSuggestions: {
    no: 'Søkeforslag',
    nb: 'Søkeforslag',
    nn: 'Søkeforslag',
    en: 'Search suggestions',
    se: 'Ohcan evttohus',
  },
});
