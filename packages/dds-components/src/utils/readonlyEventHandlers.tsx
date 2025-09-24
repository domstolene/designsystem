import {
  type ChangeEvent,
  type ChangeEventHandler,
  type KeyboardEvent,
  type KeyboardEventHandler,
  type MouseEvent,
  type MouseEventHandler,
} from 'react';

// Handlers ved readonly, da det ikke støttes ut av boksen for enkelte inputelementer (select, radio, checkbox)

export const readOnlyMouseDownHandler = <T,>(
  readOnly?: boolean,
  onMouseDown?: MouseEventHandler<T>,
) => {
  return (evt: MouseEvent<T>) => {
    // NOTE: stopper ikke klikk
    if (readOnly) {
      evt.preventDefault();
      // gi fokus til elementet per standard readonly oppførsel
      (evt.target as HTMLElement).focus();
    } else onMouseDown?.(evt);
  };
};

type ReadOnlyKeyDownHandlerType = 'select' | 'selectionControl' | 'file';

export const readOnlyKeyDownHandler = <T,>(
  type: ReadOnlyKeyDownHandlerType,
  readOnly?: boolean,
  onKeyDown?: KeyboardEventHandler<T>,
) => {
  return (evt: KeyboardEvent<T>) => {
    // stopper relevant tastaturinput, unntatt Tab, per standard readonly oppførsel
    if (readOnly) {
      if (
        type === 'select' &&
        ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', ' '].includes(
          evt.key,
        )
      ) {
        evt.preventDefault();
      } else if (type === 'selectionControl' && evt.key === ' ') {
        evt.preventDefault();
      } else if (type === 'file' && (evt.key === ' ' || evt.key === 'Enter')) {
        evt.preventDefault();
      }
    } else onKeyDown?.(evt);
  };
};

export const readOnlyChangeHandler = <T,>(
  readOnly?: boolean,
  onChange?: ChangeEventHandler<T>,
) => {
  return (evt: ChangeEvent<T>) => {
    if (readOnly) {
      return;
    }
    onChange?.(evt);
  };
};

export const readOnlyClickHandler = <T,>(
  readOnly?: boolean,
  onClick?: MouseEventHandler<T>,
) => {
  return (evt: MouseEvent<T>) => {
    if (readOnly) {
      evt.preventDefault();
      return;
    }
    onClick?.(evt);
  };
};
