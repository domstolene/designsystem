import {
  type FileWithPath,
  fromEvent as getFilesFromEvent,
} from 'file-selector';
import type React from 'react';
import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type Ref,
} from 'react';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import {
  type FileUploaderFile,
  type RootErrorList,
  fileUploaderReducer,
} from './fileUploaderReducer';
import { type FileList, type FileUploaderAccept } from './types';
import {
  getInvalidFileTypeErrorMessage,
  getTooManyFilesErrorMessage,
  isEventWithFiles,
  isFileAccepted,
  preventDefaults,
} from './utils';

export interface FileUploaderHookProps {
  id: string | undefined;
  /**Dersom komponenten skal styres internt. Utgangspunktet for filene som har blitt lastet opp. */
  initialFiles: FileList | undefined;
  /**Dersom komponenten styres utenfra. Filene som har blitt lastet opp. */
  value: FileList | undefined;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Hvilke filendelser eller mime-typer som filopplasteren skal akseptere. */
  accept: Array<FileUploaderAccept> | undefined;
  /**Om filopplasteren er avslått eller ikke */
  disabled: boolean | undefined;
  /**Maks antall filer som tillates. */
  maxFiles: number | undefined;
  /**Feilmelding. Setter også error state. */
  errorMessage: string | undefined;
}

const calcRootErrors = (
  files: Array<FileUploaderFile>,
  maxFiles: number | undefined,
  errorMessage: string | undefined,
): RootErrorList => {
  const errors: RootErrorList = [];

  if (maxFiles && maxFiles >= 1 && files.length > maxFiles) {
    errors.push(getTooManyFilesErrorMessage(maxFiles));
  }

  if (errorMessage) {
    errors.push(errorMessage);
  }

  return errors;
};

export const useFileUploader = <TRootElement extends HTMLElement>(
  props: FileUploaderHookProps,
) => {
  const {
    initialFiles,
    value,
    onChange,
    accept,
    maxFiles,
    disabled,
    errorMessage,
  } = props;

  const rootRef = useRef<TRootElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isControlled = !!value;

  const initialFileUploaderFiles = useMemo(
    () =>
      (initialFiles ?? []).map<FileUploaderFile>(f => ({
        file: f,
        errors: [],
      })),
    [initialFiles],
  );

  const [state, dispatch] = useReducer(fileUploaderReducer, {
    files: initialFileUploaderFiles,
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    rootErrors: calcRootErrors(
      initialFileUploaderFiles,
      maxFiles,
      errorMessage,
    ),
  });

  const { files: stateFiles } = state;

  useEffect(() => {
    if (isControlled) {
      const files = value.map<FileUploaderFile>(file => {
        const accepted = isFileAccepted(file, accept);

        return {
          file,
          errors: accepted ? [] : [getInvalidFileTypeErrorMessage()],
        };
      });

      dispatch({
        type: 'onSetFiles',
        payload: files,
      });
    }
  }, [value, isControlled, accept, dispatch]);

  useEffect(() => {
    dispatch({
      type: 'setRootErrors',
      payload: calcRootErrors(stateFiles, maxFiles, errorMessage),
    });
  }, [dispatch, stateFiles, maxFiles, errorMessage]);

  const onRootFocus = useCallback(
    () => dispatch({ type: 'focus' }),
    [dispatch],
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
    [dispatch, accept, maxFiles],
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
    [dispatch],
  );

  const setFiles = useCallback(
    async (
      evt: React.DragEvent<TRootElement> | React.ChangeEvent<HTMLInputElement>,
    ) => {
      evt.preventDefault();
      if (isEventWithFiles(evt)) {
        const existingFileNames = stateFiles.map(f => f.file.name);

        // TODO: Fiks cast her.
        const filesFromEvent = (await getFilesFromEvent(
          evt,
        )) as Array<FileWithPath>;

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

        onChange(newFiles.map(f => f.file));

        if (!isControlled) {
          dispatch({
            type: 'onSetFiles',
            payload: newFiles,
          });
        }
      }
    },
    [
      stateFiles,
      isControlled,
      accept,
      errorMessage,
      maxFiles,
      onChange,
      dispatch,
    ],
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

      onChange(newFiles.map(f => f.file));

      if (!isControlled) {
        dispatch({
          type: 'onRemoveFile',
          payload: newFiles,
        });
      }
    },
    [stateFiles, isControlled, maxFiles, errorMessage, onChange, dispatch],
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
    ],
  );

  const getButtonProps = useCallback(
    (): ButtonHTMLAttributes<HTMLButtonElement> & {
      ref: Ref<HTMLButtonElement>;
    } => ({
      onClick: openFileDialog,
      ref: buttonRef,
    }),
    [openFileDialog, buttonRef],
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
    [inputRef, setFiles, maxFiles, accept],
  );

  return {
    state,
    getRootProps,
    getInputProps,
    getButtonProps,
    removeFile,
  };
};
