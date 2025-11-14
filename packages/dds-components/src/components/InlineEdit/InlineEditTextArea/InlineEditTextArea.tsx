import { useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { InlineEditContextProvider } from '../InlineEdit.context';
import { type InlineEditTextAreaProps } from '../InlineEdit.types';
import { InlineField } from '../InlineField';

export const InlineEditTextArea = ({
  onSetValue,
  emptiable,
  value,
  onFocus,
  onChange,
  onBlur,
  ref,
  ...rest
}: InlineEditTextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(ref, textareaRef);
  return (
    <InlineEditContextProvider
      onSetValue={onSetValue}
      emptiable={emptiable}
      inputRef={textareaRef}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    >
      <InlineField elementType="textarea" {...rest} ref={combinedRef} />
    </InlineEditContextProvider>
  );
};
