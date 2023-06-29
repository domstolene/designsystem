import { forwardRef, useRef } from 'react';
import { InlineEdit } from './InlineEdit';
import { useCombinedRef } from '@norges-domstoler/dds-core';
import { InlineEditInputProps } from './InlineEdit.types';
import { InlineInput } from './InlineInput';

export const InlineEditInput = forwardRef<
  HTMLInputElement,
  InlineEditInputProps
>((props, ref) => {
  const { onSetValue, emptiable, value, onFocus, onChange, onBlur, ...rest } =
    props;
  const inputRef = useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRef(ref, inputRef);
  return (
    <InlineEdit
      onSetValue={onSetValue}
      emptiable={emptiable}
      inputRef={inputRef}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    >
      <InlineInput {...rest} ref={combinedRef} />
    </InlineEdit>
  );
});
