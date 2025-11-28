import { type MouseEvent } from 'react';

import styles from './Search.module.css';
import { SearchSuggestionItem } from './SearchSuggestionItem';
import { useRoveFocus } from '../../hooks';
import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn, derivativeIdGenerator } from '../../utils';
import { StylelessList } from '../helpers';
import { DropdownHeader } from '../helpers/Dropdown/DropdownHeader';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Paper } from '../layout';

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
  const [focus] = useRoveFocus(suggestions?.length, showSuggestions);

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
            <li key={index} role="option">
              <SearchSuggestionItem
                index={index}
                focus={focus === index && showSuggestions}
                aria-label={t(texts.search(suggestion))}
                onClick={onSuggestionClick}
                aria-setsize={suggestionsToRender.length}
                aria-posinset={index}
              >
                {suggestion}
              </SearchSuggestionItem>
            </li>
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
    se: 'Ozanfálaldagat',
  },
});
