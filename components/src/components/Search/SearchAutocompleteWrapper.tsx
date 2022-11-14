import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useOnClickOutside, useOnKeyDown } from '../../hooks';
import { searchFilter } from '../../utils';
import {
  AutocompleteSearchContext,
  AutocompleteSearchContextType,
} from './AutocompleteSearch.context';

type WeightedValue = {
  text: string;
  relevance: number;
};

export type WeightedSearchData = {
  array: WeightedValue[];
  sortFunction?: (a: WeightedValue, b: WeightedValue) => number;
};

export type SearchData = {
  array: string[];
  sortFunction?: (a: string, b: string) => number;
};

export type SearchAutocompleteWrapperProps = {
  /**Array med data som kan søkes på og eventuelt tilhørende sorteringsfunksjon. Array kan bestå av elementer av typen `string`  eller objekter med vekt og tekst.*/
  data?: SearchData | WeightedSearchData;
  /** Ekstra callback ved `onChange` i `<Search>`. */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**Callback når et forslag blir valgt, inkludert søkefunksjon. */
  onSuggestionSelection?: () => void;
  /** Custom filter for forslag. */
  filter?: (sugestion: string, query: string) => boolean;
  /**Minst lengde på query når forslag skal vises. */
  queryLength?: number;
  /** Barnet til komponenten (`<Search />`). */
  children?: ReactNode;
  /**Initielle `value` i `<Search>`. */
  value?: string;
};

export const SearchAutocompleteWrapper = (
  props: SearchAutocompleteWrapperProps
) => {
  const {
    value,
    data,
    filter,
    queryLength = 2,
    onChange,
    onSuggestionSelection,
    children,
  } = props;

  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const closeSuggestions = () =>
    showSuggestions === true && setShowSuggestions(false);

  const openSuggestions = () =>
    showSuggestions === false && setShowSuggestions(true);

  useEffect(() => {
    if (suggestions.length > 0) {
      openSuggestions();
    } else {
      closeSuggestions();
    }
  }, [suggestions]);

  const isWeightedValueData = (
    data: SearchData | WeightedSearchData
  ): data is WeightedSearchData =>
    (data as WeightedSearchData).array[0].relevance !== undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    let finalSuggestions: string[] = [];

    if (query.length >= queryLength) {
      if (data) {
        if (isWeightedValueData(data)) {
          const { sortFunction, array } = data;

          const filteredSuggestions: WeightedValue[] = array.filter(
            suggestion =>
              filter
                ? filter(suggestion.text, query)
                : searchFilter(suggestion.text, query)
          );

          finalSuggestions = filteredSuggestions
            .sort(sortFunction ? (a, b) => sortFunction(a, b) : undefined)
            .map(item => item.text);
        } else {
          const { sortFunction, array } = data;

          const filteredSuggestions: string[] = array.filter(suggestion =>
            filter ? filter(suggestion, query) : searchFilter(suggestion, query)
          );

          finalSuggestions = filteredSuggestions.sort(
            sortFunction ? (a, b) => sortFunction(a, b) : undefined
          );
        }
      }
      setSuggestions(finalSuggestions);
    } else {
      setSuggestions([]);
    }
    onChange && onChange(e);
  };

  const handleSuggestionClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSuggestions([]);
    setInputValue((e.target as HTMLButtonElement).innerText);
    onSuggestionSelection && onSuggestionSelection();
    closeSuggestions();
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([inputRef.current, suggestionsRef.current], () => {
    closeSuggestions();
  });

  useOnKeyDown('Tab', () => closeSuggestions());

  const contextProps: AutocompleteSearchContextType = {
    showSuggestions,
    inputRef,
    suggestionsRef,
    suggestions,
    onValueChange: handleChange,
    inputValue,
    onSugggestionClick: handleSuggestionClick,
  };
  return (
    <AutocompleteSearchContext.Provider value={contextProps}>
      {children}
    </AutocompleteSearchContext.Provider>
  );
};
