import { FileWithPath } from 'file-selector';
import { Reducer } from 'react';

export type FileUploaderFile = {
  file: FileWithPath;
  errors: string[];
};

type FileChangePayload = {
  rootErrors: RootErrorList;
  files: FileUploaderFile[];
};

export type RootErrorList = string[];

export type FileUploaderAction =
  | { type: 'focus' }
  | { type: 'blur' }
  | { type: 'dragEnter' }
  | { type: 'dragLeave' }
  | {
      type: 'onSetFiles';
      payload: FileChangePayload;
    }
  | {
      type: 'onRemoveFile';
      payload: FileChangePayload;
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
        rootErrors: action.payload.rootErrors,
        files: action.payload.files,
      };
    case 'onRemoveFile':
      return {
        ...state,
        rootErrors: action.payload.rootErrors,
        files: action.payload.files,
      };
    default:
      return state;
  }
};
