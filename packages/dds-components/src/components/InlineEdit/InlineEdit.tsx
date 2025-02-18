import {
  type ChangeEvent,
  Children,
  type FocusEvent,
  type FocusEventHandler,
  type ReactElement,
  cloneElement,
  isValidElement,
  useState,
} from 'react';

import { type InlineEditProps } from './InlineEdit.types';
import { type InlineInputProps } from './InlineInput';
import { type InlineTextAreaProps } from './InlineTextArea';
import { useOnClickOutside, useOnKeyDown } from '../../hooks';

type EditElement = HTMLInputElement | HTMLTextAreaElement;

export const InlineEdit = (props: InlineEditProps) => {
  const {
    emptiable,
    value,
    onSetValue,
    onChange,
    onFocus,
    onBlur,
    inputRef,
    children,
  } = props;
  const [editingValue, setEditingValue] = useState<typeof value>(value ?? '');
  const [isEditing, setIsEditing] = useState(false);

  const onChangeHandler = (e: ChangeEvent<EditElement>) => {
    setEditingValue(e.target.value);
    onChange && onChange();
  };

  const onFocusHandler: FocusEventHandler<EditElement> = () => {
    setIsEditing(true);
    onFocus && onFocus();
  };

  const onBlurHandler: FocusEventHandler<EditElement> = (
    e: FocusEvent<EditElement>,
  ) => {
    if (!emptiable && e.target.value.trim() === '') {
      setEditingValue(value);
    } else {
      onSetValue && onSetValue(e.target.value);
    }
    setIsEditing(false);
    onBlur && onBlur();
  };

  const onExitHandler = () => {
    if (
      inputRef.current === document.activeElement &&
      document.activeElement instanceof HTMLElement
    ) {
      setIsEditing(false);
      document.activeElement.blur();
    }
  };

  useOnKeyDown(['Enter'], () => onExitHandler());
  useOnKeyDown(['Escape'], () => onExitHandler());
  useOnClickOutside(inputRef.current, () => onExitHandler());

  const inputChild = Children.only(
    isValidElement(children) &&
      cloneElement(
        children as ReactElement<InlineInputProps | InlineTextAreaProps>,
        {
          onChange: onChangeHandler,
          onBlur: onBlurHandler,
          onFocus: onFocusHandler,
          isEditing,
          value: editingValue,
          emptiable,
        },
      ),
  );

  return <>{inputChild}</>;
};

InlineEdit.displayName = 'InlineEdit';
