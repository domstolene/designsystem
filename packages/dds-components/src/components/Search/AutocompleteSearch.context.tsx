import {
  type ChangeEvent,
  type MouseEvent,
  type RefObject,
  createContext,
  useContext,
} from 'react';

export interface AutocompleteSearchContextType {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSugggestionClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  suggestions?: Array<string>;
  showSuggestions?: boolean;
  inputValue?: string;
  inputRef?: RefObject<HTMLInputElement | null> | null;
  suggestionsRef?: RefObject<HTMLDivElement | null> | null;
}

export const AutocompleteSearchContext =
  createContext<AutocompleteSearchContextType>({});

export const useAutocompleteSearch = () => {
  return useContext(AutocompleteSearchContext);
};
