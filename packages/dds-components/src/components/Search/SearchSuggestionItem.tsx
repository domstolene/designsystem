import { type ComponentPropsWithRef, useEffect, useRef } from 'react';

import { useCombinedRef } from '../../hooks';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
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
    <button
      ref={combinedRef}
      className={cn(
        className,
        styles.list__item,
        styles['list__item--link'],
        focusStyles['focusable--inset'],
        utilStyles['normalize-button'],
      )}
      {...rest}
      tabIndex={focus ? 0 : -1}
    />
  );
};

SearchSuggestionItem.displayName = 'SearchSuggestionItem';
