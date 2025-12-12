import {
  type FileWithPath,
  fromEvent as getFilesFromEvent,
} from 'file-selector';
import type React from 'react';
import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type Ref,
} from 'react';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { type FileList, type FileUploaderAccept } from './FileUploader.types';
import {
  type FileUploaderFile,
  type RootErrorList,
  fileUploaderReducer,
} from './fileUploaderReducer';
import { isEventWithFiles, isFileAccepted, preventDefaults } from './utils';
import { createTexts, useTranslation } from '../../i18n';
import { readOnlyChangeHandler, readOnlyKeyDownHandler } from '../../utils';
import { type InputProps } from '../helpers/Input';

export type FileUploaderHookProps = {
  /**Dersom komponenten skal styres internt. Utgangspunktet for filene som har blitt lastet opp. */
  initialFiles: FileList | undefined;
  /**Dersom komponenten styres utenfra. Filene som har blitt lastet opp. */
  value: FileList | undefined;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Filendelser eller mime-typer filopplasteren skal akseptere. */
  accept: Array<FileUploaderAccept> | undefined;
  /**Om filopplasteren er avslått eller ikke. */
  disabled?: boolean;
  /**Om filopplasteren er read-only. */
  readOnly?: boolean;
  /**Maks antall filer som tillates. */
  maxFiles: number | undefined;
  onKeyDown?: ComponentProps<'input'>['onKeyDown'];
} & Pick<InputProps, 'errorMessage' | 'id'>;

const calcRootErrors = (
  maxFilesErrorMessage: string,
  files: Array<FileUploaderFile>,
  maxFiles?: number,
  errorMessage?: string,
): RootErrorList => {
  const errors: RootErrorList = [];

  if (maxFiles && maxFiles >= 1 && files.length > maxFiles) {
    errors.push(maxFilesErrorMessage + maxFiles);
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
    onKeyDown,
    accept,
    maxFiles,
    disabled,
    readOnly,
    errorMessage,
  } = props;

  const { t } = useTranslation();

  const rootRef = useRef<TRootElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isControlled = !!value;

  const initialFileUploaderFiles = useMemo(
    () =>
      (initialFiles ?? []).map<FileUploaderFile>(f => {
        if (f instanceof File)
          return {
            file: f,
            name: f.name,
            errors: [],
          };
        return {
          url: f.url,
          name: f.name,
          errors: [],
        };
      }),
    [initialFiles],
  );

  const [state, dispatch] = useReducer(fileUploaderReducer, {
    files: initialFileUploaderFiles,
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    rootErrors: calcRootErrors(
      t(texts.invalidFileAmount),
      initialFileUploaderFiles,
      maxFiles,
      errorMessage,
    ),
  });

  const { files: stateFiles } = state;

  useEffect(() => {
    if (isControlled) {
      const files = value.map<FileUploaderFile>(file => {
        if (file instanceof File) {
          const accepted = isFileAccepted(file, accept);
          return {
            name: file.name,
            file,
            errors: accepted ? [] : [t(texts.invalidFileType)],
          };
        }
        return {
          url: file.url,
          name: file.name,
          errors: [],
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
      payload: calcRootErrors(
        t(texts.invalidFileAmount),
        stateFiles,
        maxFiles,
        errorMessage,
      ),
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
        const existingFileNames = stateFiles.map(f => f.name);

        // TODO: Fiks cast her.
        const filesFromEvent = (await getFilesFromEvent(
          evt,
        )) as Array<FileWithPath>;

        const newFiles = filesFromEvent
          .filter(f => !existingFileNames.includes(f.name))
          .map<FileUploaderFile>(file => ({
            file,
            name: file.name,
            errors: isFileAccepted(file, accept)
              ? []
              : [t(texts.invalidFileType)],
          }))
          .concat(stateFiles);

        const mergedFiles = [
          ...stateFiles
            .filter(f => f.url)
            .map(f => ({ name: f.name, url: f.url! })),

          ...newFiles.filter(f => f.file).map(f => f.file!),
        ];

        onChange(mergedFiles);

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

      const mergedFiles = [
        ...newFiles
          .filter(f => f.url)
          .map(f => ({ name: f.name, url: f.url! })),
        ...newFiles.filter(f => f.file).map(f => f.file!),
      ];

      onChange(mergedFiles);

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
      tabIndex: readOnly ? undefined : -1,
      ref: inputRef,
      disabled,
      'aria-hidden': readOnly ? undefined : true,
      onChange: readOnlyChangeHandler<HTMLInputElement>(readOnly, setFiles),
      onKeyDown: readOnlyKeyDownHandler('file', readOnly, onKeyDown),
      readOnly,
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

const texts = createTexts({
  invalidFileType: {
    nb: 'Ugyldig filtype',
    no: 'Ugyldig filtype',
    nn: 'Ugyldig filtype',
    en: 'Invalid file type',
    se: 'Fámohis filašladja',
  },
  invalidFileAmount: {
    nb: 'For mange filer. Maksimalt antall er ',
    no: 'For mange filer. Maksimalt antall er ',
    nn: 'For mange filer. Maksimalt antall er ',
    en: 'Too many files. The maximum allowed is ',
    se: 'Menddo ollu fiillat. Maksimála lohku lea ',
  },
});
