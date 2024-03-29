import { type MouseEvent, forwardRef } from 'react';
import styled from 'styled-components';

import { type SearchProps, type SearchSize } from './Search';
import { searchTokens as tokens, typographyTypes } from './Search.tokens';
import { useRoveFocus } from '../../hooks';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { derivativeIdGenerator } from '../../utils';
import { Paper, removeListStyling, visibilityTransition } from '../helpers';
import {
  OverflowMenuItem,
  type OverflowMenuItemProps,
} from '../OverflowMenu/OverflowMenuItem';
import { scrollbarStyling } from '../ScrollableContainer';
import { Typography, getFontStyling } from '../Typography';

const { suggestionsContainer, suggestionsHeader } = tokens;

const SuggestionsContainer = styled(Paper)<{
  $isHidden?: boolean;
}>`
  ${({ $isHidden }) => visibilityTransition(!$isHidden)};
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 300px;
  margin-top: ${suggestionsContainer.marginTop};
  border: ${suggestionsContainer.border};
  box-shadow: ${suggestionsContainer.boxShadow};
  z-index: 80;
  overflow-y: scroll;
  ${scrollbarStyling.firefox}
  ${scrollbarStyling.webkit}
`;

const MenuItem = styled(OverflowMenuItem)<
  OverflowMenuItemProps & {
    $size?: SearchSize;
  }
>`
  ${({ $size }) => $size && getFontStyling(typographyTypes[$size])}
`;

const SuggestionsList = styled.ul`
  ${removeListStyling}
`;

const SuggestionsHeader = styled(Typography)`
  padding-left: ${suggestionsHeader.paddingLeft};
`;

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

export const SearchSuggestions = forwardRef<
  HTMLDivElement,
  SearchSuggestionsProps
>((props, ref) => {
  const {
    id,
    searchId,
    className,
    htmlProps,
    suggestions = [],
    showSuggestions,
    componentSize,
    onSuggestionClick,
    maxSuggestions,
    ...rest
  } = props;

  const suggestionsHeaderId = derivativeIdGenerator(
    searchId,
    'suggestions-header',
  );

  const [focus] = useRoveFocus(suggestions?.length, showSuggestions);

  const suggestionsToRender = maxSuggestions
    ? suggestions?.slice(maxSuggestions)
    : suggestions;

  const renderedSuggestions = (
    <SuggestionsList role="listbox" aria-labelledby={suggestionsHeaderId}>
      {suggestionsToRender.map((suggestion, index) => {
        return (
          <li key={index} role="option">
            <MenuItem
              index={index}
              focus={focus === index && showSuggestions}
              aria-label={`søk på ${suggestion}`}
              onClick={onSuggestionClick}
              title={suggestion}
              aria-setsize={suggestionsToRender.length}
              aria-posinset={index}
              $size={componentSize}
            ></MenuItem>
          </li>
        );
      })}
    </SuggestionsList>
  );

  const isHidden = !showSuggestions;

  return (
    <SuggestionsContainer
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      $isHidden={isHidden}
      aria-hidden={isHidden}
    >
      <SuggestionsHeader
        typographyType="supportingStyleTiny01"
        forwardedAs="span"
        id={suggestionsHeaderId}
      >
        Søkeforslag
      </SuggestionsHeader>
      {renderedSuggestions}
    </SuggestionsContainer>
  );
});

SearchSuggestions.displayName = 'SearchSuggestions';
