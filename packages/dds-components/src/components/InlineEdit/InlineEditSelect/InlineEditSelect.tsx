import { useRef } from 'react';

import { InlineEditContextProvider } from '../InlineEdit.context';
import { InlineSelect } from './InlineSelect';
import { useCombinedRef } from '../../../hooks';
import { type InlineEditSelectProps } from '../InlineEdit.types';

export const InlineEditSelect = ({
  onSetValue,
  emptiable,
  value,
  onFocus,
  onChange,
  onBlur,
  ref,
  ...rest
}: InlineEditSelectProps) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const combinedRef = useCombinedRef(ref, inputRef);
  return (
    <InlineEditContextProvider
      onSetValue={onSetValue}
      emptiable={emptiable}
      inputRef={inputRef}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    >
      <InlineSelect {...rest} ref={combinedRef} />
    </InlineEditContextProvider>
  );
};
