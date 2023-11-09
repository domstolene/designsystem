import {
  ChangeEvent,
  useState,
  FocusEventHandler,
  FocusEvent,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from 'react';
import { InlineEditProps } from './InlineEdit.types';
import { useOnClickOutside, useOnKeyDown } from '@norges-domstoler/dds-core';

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
      cloneElement(children as ReactElement, {
        onChange: onChangeHandler,
        onBlur: onBlurHandler,
        onFocus: onFocusHandler,
        isEditing,
        value: editingValue,
        emptiable,
      }),
  );

  return <>{inputChild}</>;
};

InlineEdit.displayName = 'InlineEdit';
