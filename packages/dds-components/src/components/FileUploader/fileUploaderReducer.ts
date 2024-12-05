import { type FileWithPath } from 'file-selector';
import { type Reducer } from 'react';

export interface FileUploaderFile {
  file: FileWithPath;
  errors: Array<string>;
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
        isDragActive: true,
      };
    case 'dragLeave':
      return { ...state, isDragActive: false };
    case 'onSetFiles':
      return {
        ...state,
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
