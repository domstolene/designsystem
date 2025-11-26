import { type ComponentPropsWithRef, useEffect, useRef } from 'react';

import { useCombinedRef } from '../../hooks';
import { StylelessButton } from '../helpers';
import { DropdownItem } from '../helpers/Dropdown/DropdownItem';

export type SearchSuggestionItemProps = {
  focus?: boolean;
  index?: number;
} & ComponentPropsWithRef<'button'>;

export const SearchSuggestionItem = ({
  focus,
  ref,
  ...rest
}: SearchSuggestionItemProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  useEffect(() => {
    if (focus) {
      itemRef.current?.focus();
    }
  }, [focus]);

  return (
    <DropdownItem
      as={StylelessButton}
      ref={combinedRef}
      {...rest}
      tabIndex={focus ? 0 : -1}
    />
  );
};

SearchSuggestionItem.displayName = 'SearchSuggestionItem';
