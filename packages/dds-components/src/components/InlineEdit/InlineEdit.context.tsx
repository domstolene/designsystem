import {
  type ChangeEvent,
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useState,
} from 'react';

import { type EditElement } from './InlineEdit.types';
import { useOnClickOutside, useOnKeyDown } from '../../hooks';

export interface InlineEditContextType {
  onChange: (e: ChangeEvent<EditElement>) => void;
  onBlur: (e: FocusEvent<EditElement>) => void;
  onFocus: (e: FocusEvent<EditElement>) => void;
  isEditing: boolean;
  value: string | number | ReadonlyArray<string> | undefined;
  emptiable: boolean;
}

type InlineEditContextProviderType = Partial<
  InlineEditContextType & {
    children: ReactNode;
    onSetValue?: (value: string) => void;
    inputRef: RefObject<HTMLElement | null>;
  }
>;

export const InlineEditContext = createContext<Partial<InlineEditContextType>>(
  {},
);

export const useInlineEditContext = () => useContext(InlineEditContext);

export const InlineEditContextProvider = (
  props: InlineEditContextProviderType,
) => {
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
    onChange?.(e);
  };

  const onFocusHandler: FocusEventHandler<EditElement> = (
    e: FocusEvent<EditElement>,
  ) => {
    setIsEditing(true);
    onFocus?.(e);
  };

  const onBlurHandler: FocusEventHandler<EditElement> = (
    e: FocusEvent<EditElement>,
  ) => {
    if (!emptiable && e.target.value.trim() === '') {
      setEditingValue(value);
    } else {
      onSetValue?.(e.target.value);
    }
    setIsEditing(false);
    onBlur?.(e);
  };

  const onExitHandler = () => {
    if (
      inputRef?.current === document.activeElement &&
      document.activeElement instanceof HTMLElement
    ) {
      setIsEditing(false);
      document.activeElement.blur();
    }
  };

  useOnKeyDown(['Enter'], () => onExitHandler());
  useOnKeyDown(['Escape'], () => onExitHandler());
  useOnClickOutside(inputRef?.current, () => onExitHandler());

  return (
    <InlineEditContext
      value={{
        onChange: onChangeHandler,
        onBlur: onBlurHandler,
        onFocus: onFocusHandler,
        isEditing,
        value: editingValue,
        emptiable,
      }}
    >
      {children}
    </InlineEditContext>
  );
};

InlineEditContextProvider.displayName = 'InlineEditContextProvider';
