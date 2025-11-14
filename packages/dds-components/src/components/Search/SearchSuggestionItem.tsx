import { type ComponentPropsWithRef, useEffect, useRef } from 'react';

import { useCombinedRef } from '../../hooks';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import styles from '../OverflowMenu/OverflowMenu.module.css';

export type SearchSuggestionItemProps = {
  focus?: boolean;
  index?: number;
} & ComponentPropsWithRef<'button'>;

export const SearchSuggestionItem = ({
  focus,
  className,
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
    <StylelessButton
      ref={combinedRef}
      className={cn(
        className,
        styles.list__item,
        styles['list__item--link'],
        focusStyles['focusable--inset'],
      )}
      {...rest}
      tabIndex={focus ? 0 : -1}
    />
  );
};

SearchSuggestionItem.displayName = 'SearchSuggestionItem';
