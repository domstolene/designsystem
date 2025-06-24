import { useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { InlineEditContextProvider } from '../InlineEdit.context';
import { type InlineEditSelectProps } from '../InlineEdit.types';
import { InlineField } from '../InlineField';

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
      <InlineField elementType="select" {...rest} ref={combinedRef} />
    </InlineEditContextProvider>
  );
};
