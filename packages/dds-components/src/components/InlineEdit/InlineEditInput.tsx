import { useRef } from 'react';

import { InlineEditContextProvider } from './InlineEdit.context';
import { type InlineEditInputProps } from './InlineEdit.types';
import { InlineInput } from './InlineInput';
import { useCombinedRef } from '../../hooks';

export const InlineEditInput = ({
  onSetValue,
  emptiable,
  value,
  onFocus,
  onChange,
  onBlur,
  ref,
  ...rest
}: InlineEditInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
      <InlineInput {...rest} ref={combinedRef} />
    </InlineEditContextProvider>
  );
};
