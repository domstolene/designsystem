import {
  Search as BaseSearch,
  type SearchProps,
  type SearchSize,
} from './Search';
import {
  SearchAutocompleteWrapper,
  type SearchAutocompleteWrapperProps,
  type SearchData,
  type WeightedSearchData,
} from './SearchAutocompleteWrapper';
import {
  SearchSuggestions,
  type SearchSuggestionsProps,
} from './SearchSuggestions';

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
