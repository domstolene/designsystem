import { type MouseEvent } from 'react';

import { type SearchProps } from './Search';
import styles from './Search.module.css';
import { typographyTypes } from './Search.utils';
import { SearchSuggestionItem } from './SearchSuggestionItem';
import { useRoveFocus } from '../../hooks';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn, derivativeIdGenerator } from '../../utils';
import { Paper, StylelessList } from '../helpers';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type SearchSuggestionsProps = BaseComponentProps<
  HTMLDivElement,
  Pick<SearchProps, 'componentSize'> & {
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
  componentSize = 'medium',
  onSuggestionClick,
  maxSuggestions,
  ...rest
}: SearchSuggestionsProps) => {
  const suggestionsHeaderId = derivativeIdGenerator(
    searchId,
    'suggestions-header',
  );

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
      border="default"
    >
      <span
        id={suggestionsHeaderId}
        className={cn(
          styles.suggestions__header,
          typographyStyles['body-xsmall'],
        )}
      >
        Søkeforslag
      </span>
      <StylelessList role="listbox" aria-labelledby={suggestionsHeaderId}>
        {suggestionsToRender.map((suggestion, index) => {
          return (
            <li key={index} role="option">
              <SearchSuggestionItem
                index={index}
                focus={focus === index && showSuggestions}
                aria-label={`søk på ${suggestion}`}
                onClick={onSuggestionClick}
                aria-setsize={suggestionsToRender.length}
                aria-posinset={index}
                className={
                  typographyStyles[
                    getTypographyCn(typographyTypes[componentSize])
                  ]
                }
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
