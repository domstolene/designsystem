import { forwardRef, useRef } from 'react';

import { InlineEdit } from './InlineEdit';
import { type InlineEditTextAreaProps } from './InlineEdit.types';
import { InlineTextArea } from './InlineTextArea';
import { useCombinedRef } from '../../hooks';

export const InlineEditTextArea = forwardRef<
  HTMLTextAreaElement,
  InlineEditTextAreaProps
>((props, ref) => {
  const { onSetValue, emptiable, value, onFocus, onChange, onBlur, ...rest } =
    props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(ref, textareaRef);
  return (
    <InlineEdit
      onSetValue={onSetValue}
      emptiable={emptiable}
      inputRef={textareaRef}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    >
      <InlineTextArea ref={combinedRef} {...rest} />
    </InlineEdit>
  );
});
