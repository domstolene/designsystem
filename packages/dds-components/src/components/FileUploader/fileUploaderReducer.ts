import { type FileWithPath } from 'file-selector';
import { type Reducer } from 'react';

export interface FileUploaderFile {
  file?: FileWithPath;
  name: string;
  errors: Array<string>;
  url?: string;
}

export type RootErrorList = Array<string>;

export type FileUploaderAction =
  | { type: 'focus' }
  | { type: 'blur' }
  | { type: 'dragEnter' }
  | { type: 'dragLeave' }
  | {
      type: 'onSetFiles';
      payload: Array<FileUploaderFile>;
    }
  | {
      type: 'onRemoveFile';
      payload: Array<FileUploaderFile>;
    }
  | {
      type: 'setRootErrors';
      payload: RootErrorList;
    };

export interface FileUploaderState {
  files: Array<FileUploaderFile>;
  isFocused: boolean;
  isFileDialogActive: boolean;
  dragCounter: number;
  isDragActive: boolean;
  rootErrors: Array<string>;
}

export const fileUploaderReducer: Reducer<
  FileUploaderState,
  FileUploaderAction
> = (state, action) => {
  switch (action.type) {
    case 'focus':
      return { ...state, isFocused: true };
    case 'blur':
      return { ...state, isFocused: false };
    case 'dragEnter':
      return {
        ...state,
        dragCounter: state.dragCounter + 1,
        isDragActive: true,
      };
    case 'dragLeave': {
      const newCounter = Math.max(0, state.dragCounter - 1);
      return {
        ...state,
        dragCounter: newCounter,
        isDragActive: newCounter > 0,
      };
    }
    case 'onSetFiles':
      return {
        ...state,
        dragCounter: 0,
        isDragActive: false,
        files: action.payload,
      };
    case 'onRemoveFile':
      return {
        ...state,
        files: action.payload,
      };
    case 'setRootErrors':
      return {
        ...state,
        rootErrors: action.payload,
      };
    default:
      return state;
  }
};
