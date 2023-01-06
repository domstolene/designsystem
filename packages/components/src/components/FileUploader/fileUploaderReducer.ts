import { FileWithPath } from 'file-selector';
import { Reducer } from 'react';

export type FileUploaderFile = {
  file: FileWithPath;
  errors: string[];
};

export type RootErrorList = string[];

export type FileUploaderAction =
  | { type: 'focus' }
  | { type: 'blur' }
  | { type: 'dragEnter' }
  | { type: 'dragLeave' }
  | {
      type: 'onSetFiles';
      payload: FileUploaderFile[];
    }
  | {
      type: 'onRemoveFile';
      payload: FileUploaderFile[];
    }
  | {
      type: 'setRootErrors';
      payload: RootErrorList;
    };

export type FileUploaderState = {
  files: FileUploaderFile[];
  isFocused: boolean;
  isFileDialogActive: boolean;
  isDragActive: boolean;
  rootErrors: string[];
};

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
