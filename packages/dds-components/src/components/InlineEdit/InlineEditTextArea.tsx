import { useRef } from 'react';

import { InlineEditContextProvider } from './InlineEdit.context';
import { type InlineEditTextAreaProps } from './InlineEdit.types';
import { InlineTextArea } from './InlineTextArea';
import { useCombinedRef } from '../../hooks';

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
      <InlineTextArea ref={combinedRef} {...rest} />
    </InlineEditContextProvider>
  );
};
