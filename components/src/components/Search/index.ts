import { Search as BaseSearch, SearchProps, SearchSize } from './Search';
import {
  SearchAutocompleteWrapper,
  SearchAutocompleteWrapperProps,
  SearchData,
  WeightedSearchData,
} from './SearchAutocompleteWrapper';

import { SearchSuggestions, SearchSuggestionsProps } from './SearchSuggestions';

type SearchCompoundProps = typeof BaseSearch & {
  AutocompleteWrapper: typeof SearchAutocompleteWrapper;
  Suggestions: typeof SearchSuggestions;
};

const Search = BaseSearch as SearchCompoundProps;

Search.AutocompleteWrapper = SearchAutocompleteWrapper;
Search.Suggestions = SearchSuggestions;

export { Search };

export type {
  SearchProps,
  SearchSize,
  SearchData,
  WeightedSearchData,
  SearchAutocompleteWrapperProps,
  SearchSuggestionsProps,
};
