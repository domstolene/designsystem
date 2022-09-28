import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  Ref,
  useCallback,
  useReducer,
  useRef,
} from 'react';
import {
  FileUploaderFile,
  fileUploaderReducer,
  RootErrorList,
} from './fileUploaderReducer';
import { FileWithPath, fromEvent as getFilesFromEvent } from 'file-selector';
import { Accept, FileList } from './types';
import {
  getInvalidFileTypeErrorMessage,
  getTooManyFilesErrorMessage,
  isEventWithFiles,
  isFileAccepted,
  preventDefaults,
} from './utils';

export type FileUploaderHookProps = {
  id?: string;
  /**Dersom komponenten styres utenfra. En liste over filer som skal være med ved første render. */
  initialFiles?: FileList;
  /**Hvilke filendelser eller mime-typer som filopplasteren skal akseptere. */
  accept?: Accept[];
  /**Om filopplasteren er avslått eller ikke */
  disabled?: boolean;
  /**Maks antall filer som tillates. */
  maxFiles?: number;
};

const calcRootErrors = (
  files: FileUploaderFile[],
  maxFiles: number | undefined
): RootErrorList => {
  const errors: RootErrorList = [];

  if (maxFiles && maxFiles >= 1 && files.length > maxFiles) {
    errors.push(getTooManyFilesErrorMessage(maxFiles));
  }

  return errors;
};

export const useFileUploader = <TRootElement extends HTMLElement>(
  props: FileUploaderHookProps
) => {
  const { initialFiles = [], accept, maxFiles, disabled } = props;

  const rootRef = useRef<TRootElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [state, dispatch] = useReducer(fileUploaderReducer, {
    files: initialFiles.map(f => ({ file: f, errors: [] })),
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    rootErrors: [],
  });

  const { files: stateFiles } = state;

  const onRootFocus = useCallback(
    () => dispatch({ type: 'focus' }),
    [dispatch]
  );

  const onRootBlur = useCallback(() => dispatch({ type: 'blur' }), [dispatch]);

  const onRootDragEnter = useCallback(
    async (evt: React.DragEvent<TRootElement>) => {
      preventDefaults(evt);

      if (isEventWithFiles(evt)) {
        const files = await getFilesFromEvent(evt);
        const fileCount = files.length;

        if (fileCount === 0) return;

        dispatch({ type: 'dragEnter' });
      }
    },
    [dispatch, accept, maxFiles]
  );

  const onRootDragOver = useCallback((evt: React.DragEvent<TRootElement>) => {
    preventDefaults(evt);

    const hasFiles = isEventWithFiles(evt);
    if (hasFiles && evt.dataTransfer) {
      try {
        evt.dataTransfer.dropEffect = 'copy';
      } catch {} /* eslint-disable-line no-empty */
    }
  }, []);

  const onRootDragLeave = useCallback(
    (evt: React.DragEvent<TRootElement>) => {
      preventDefaults(evt);

      if (evt.currentTarget.contains(evt.relatedTarget as HTMLElement)) return;

      dispatch({ type: 'dragLeave' });
    },
    [dispatch]
  );

  const setFiles = useCallback(
    async (
      evt: React.DragEvent<TRootElement> | React.ChangeEvent<HTMLInputElement>
    ) => {
      evt.preventDefault();
      if (isEventWithFiles(evt)) {
        const existingFileNames = stateFiles.map(f => f.file.name);

        // TODO: Fiks cast her.
        const filesFromEvent = (await getFilesFromEvent(evt)) as FileWithPath[];

        const newFiles = filesFromEvent
          .filter(f => !existingFileNames.includes(f.name))
          .map<FileUploaderFile>(file => {
            const accepted = isFileAccepted(file, accept);

            return {
              file,
              errors: accepted ? [] : [getInvalidFileTypeErrorMessage()],
            };
          })
          .concat(stateFiles);

        const rootErrors = calcRootErrors(newFiles, maxFiles);
        dispatch({
          type: 'onSetFiles',
          payload: { rootErrors, files: newFiles },
        });
      }
    },
    [stateFiles, maxFiles, accept, dispatch]
  );

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  }, [inputRef]);

  const removeFile = useCallback(
    (file: FileUploaderFile) => {
      const newFiles = [...stateFiles];
      newFiles.splice(stateFiles.indexOf(file), 1);

      const rootErrors = calcRootErrors(newFiles, maxFiles);

      dispatch({
        type: 'onRemoveFile',
        payload: { rootErrors, files: newFiles },
      });
    },
    [stateFiles, maxFiles]
  );

  const getRootProps = useCallback(
    (): HTMLAttributes<TRootElement> & {
      ref: Ref<TRootElement>;
    } => ({
      onBlur: onRootBlur,
      onFocus: onRootFocus,
      onDragEnter: onRootDragEnter,
      onDragOver: onRootDragOver,
      onDragLeave: onRootDragLeave,
      onDrop: setFiles,
      ref: rootRef,
    }),
    [
      onRootBlur,
      onRootFocus,
      onRootDragEnter,
      onRootDragOver,
      setFiles,
      rootRef,
      disabled,
    ]
  );

  const getButtonProps = useCallback(
    (): ButtonHTMLAttributes<HTMLButtonElement> & {
      ref: Ref<HTMLButtonElement>;
    } => ({
      onClick: openFileDialog,
      ref: buttonRef,
    }),
    [openFileDialog, buttonRef]
  );

  const getInputProps = useCallback(
    (): InputHTMLAttributes<HTMLInputElement> & {
      ref: Ref<HTMLInputElement>;
    } => ({
      type: 'file',
      style: { display: 'none' },
      tabIndex: -1,
      ref: inputRef,
      onChange: setFiles,
      multiple: !maxFiles || maxFiles > 1,
      ...(accept ? { accept: accept.join(',') } : {}),
    }),
    [inputRef, setFiles, maxFiles, accept]
  );

  return {
    state,
    getRootProps,
    getInputProps,
    getButtonProps,
    removeFile,
  };
};
