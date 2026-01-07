import { type ComponentPropsWithRef, useId } from 'react';

import { ErrorList } from './ErrorList';
import { File } from './File';
import styles from './FileUploader.module.css';
import { type FileList } from './FileUploader.types';
import { type FileUploaderHookProps, useFileUploader } from './useFileUploader';
import { createTexts, useTranslation } from '../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { HiddenInput, StylelessList } from '../helpers';
import { type InputProps } from '../helpers/Input';
import focusStyles from '../helpers/styling/focus.module.css';
import { UploadIcon } from '../Icon/icons';
import { renderInputMessage } from '../InputMessage';
import { Box, type ResponsiveProps, VStack } from '../layout';
import { Typography } from '../Typography';
import { renderLabel } from '../Typography/Label/Label.utils';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

export type FileUploaderProps = {
  /**Id til filopplasteren. */
  id?: string;
  /**Ledetekst for slippsonen. Denne teksten skal, av UU-hensyn, henge sammen med den usynlige teksten: "velg fil med påfølgende knapp"
   * @default Dra og slipp filer her eller
   */
  dropAreaLabel?: string;
  /**Ledetekst for opplastingsknappen.
   * @default Velg fil
   */
  btnLabel?: string;
  /**Om det er påkrevd med minst én fil. */
  required?: boolean;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Om drag-and-drop zone skal vises.
   * @default true
   */
  withDragAndDrop?: boolean;
  /**Om listen med opplastede filer skal skjules. Brukes kun hvis listen blir vist på egen måte. */
  hideFileList?: boolean;
} & Pick<ResponsiveProps, 'width'> &
  Partial<FileUploaderHookProps> &
  Omit<ComponentPropsWithRef<'div'>, 'onChange' | 'id'> &
  Pick<InputProps, 'tip' | 'label' | 'afterLabelContent'>;

export const FileUploader = (props: FileUploaderProps) => {
  const {
    id,
    label,
    dropAreaLabel,
    btnLabel,
    tip,
    required = false,
    withDragAndDrop = true,
    initialFiles,
    value,
    accept,
    maxFiles,
    disabled,
    readOnly,
    onChange,
    onKeyDown,
    width = 'var(--dds-input-default-width)',
    errorMessage,
    hideFileList,
    className,
    afterLabelContent,
    ...rest
  } = props;

  const { t } = useTranslation();
  const tDropAreaLabel = dropAreaLabel ?? t(texts.dragAndDropOr);
  const tBtnLabel = btnLabel ?? t(texts.selectFile);

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-fileUploader`;

  const {
    state: { files: stateFiles, isDragActive, rootErrors },
    getRootProps,
    getInputProps,
    getButtonProps,
    removeFile,
  } = useFileUploader<HTMLDivElement>({
    id,
    initialFiles,
    value,
    onChange,
    accept,
    disabled,
    readOnly,
    maxFiles,
    errorMessage,
    onKeyDown,
  });
  const hasLabel = label !== undefined;
  const hasTip = tip !== undefined;
  const hasRootErrors = rootErrors.length > 0;
  const inactive = disabled || readOnly;

  const labelId = derivativeIdGenerator(uniqueId, 'label');
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const buttonId = derivativeIdGenerator(uniqueId, 'button');
  const inputId = derivativeIdGenerator(uniqueId, 'input');
  const fileListId = derivativeIdGenerator(uniqueId, 'file-list');
  const fileListNameId = derivativeIdGenerator(uniqueId, 'file-list-name');

  const fileListElements = stateFiles.map((stateFile, index) => (
    <File
      key={stateFile.name}
      parentId={uniqueId}
      index={index}
      file={stateFile}
      isValid={stateFile.errors.length === 0}
      removeFile={() => removeFile(stateFile)}
      disabled={disabled}
      readOnly={readOnly}
    />
  ));

  const rootErrorsList = rootErrors.map((e, index) => ({
    id: derivativeIdGenerator(uniqueId, `error-${index}`),
    message: e,
  }));

  const button = (
    <Button
      {...getButtonProps()}
      id={buttonId}
      size="medium"
      type="button"
      purpose="secondary"
      icon={UploadIcon}
      htmlProps={{
        'aria-invalid': hasRootErrors ? true : undefined,
        'aria-describedby': spaceSeparatedIdListGenerator([
          hasLabel ? labelId : undefined,
          hasTip ? tipId : undefined,
          ...rootErrorsList.map(e => e.id),
        ]),
      }}
    >
      {tBtnLabel}
    </Button>
  );

  const input = (
    <HiddenInput
      {...getInputProps()}
      className={cn(readOnly && focusStyles['focusable-sibling'])}
      id={inputId}
      data-testid="file-uploader-input"
      aria-describedby={fileListId}
    />
  );

  return (
    <Box
      id={uniqueId}
      className={cn(className, typographyStyles['body-short-medium'])}
      width={width}
      {...rest}
    >
      {renderLabel({
        label,
        id: labelId,
        showRequiredStyling: required,
        htmlFor: inputId,
        readOnly,
        afterLabelContent,
      })}
      {renderInputMessage({ tip, tipId })}
      {inactive ? (
        input
      ) : withDragAndDrop ? (
        <VStack
          gap="x1"
          padding="x1.5 x1.5 x2 x1.5"
          {...getRootProps()}
          className={cn(
            styles['input-container'],
            hasRootErrors && styles['input-container--with-errors'],
            isDragActive && styles['input-container--drag-active'],
          )}
        >
          {input}
          {tDropAreaLabel}
          <VisuallyHidden>{t(texts.uploadFileWithButton)}</VisuallyHidden>
          {button}
        </VStack>
      ) : (
        <Box padding="x 0">
          {input}
          {button}
        </Box>
      )}
      <ErrorList errors={rootErrorsList} />
      {!hideFileList && (
        <div
          id={fileListId}
          className={cn(
            readOnly && focusStyles['focus-styled-sibling'],
            readOnly && styles['readonly--file-list'],
          )}
        >
          <VisuallyHidden id={fileListNameId}>
            {t(texts.uploadedFiles)}
          </VisuallyHidden>
          {inactive && fileListElements.length === 0 ? (
            <Typography
              italic
              as="span"
              color={disabled ? 'text-subtle' : 'text-medium'}
            >
              {t(texts.noFiles)}
            </Typography>
          ) : (
            <StylelessList aria-labelledby={fileListNameId}>
              {fileListElements}
            </StylelessList>
          )}
        </div>
      )}
    </Box>
  );
};

FileUploader.displayName = 'FileUploader';

const texts = createTexts({
  dragAndDropOr: {
    nb: 'Dra og slipp filer her eller',
    no: 'Dra og slipp filer her eller',
    nn: 'Dra og slepp filer her eller',
    en: 'Drag and drop files here or',
    se: 'Sirdde fiillaid dása dahje',
  },
  selectFile: {
    nb: 'Velg fil',
    no: 'Velg fil',
    nn: 'Velg fil',
    en: 'Sekect file',
    se: 'Vállje fiilla',
  },
  uploadFileWithButton: {
    nb: 'last opp en fil med den påfølgende knappen',
    no: 'last opp en fil med den påfølgende knappen',
    nn: 'last opp ei fil med den påfølgjande knappen',
    en: 'upload using the following button',
    se: 'viečča fiilla čuovvovaš boaluin',
  },
  noFiles: {
    nb: 'Ingen filer.',
    no: 'Ingen filer.',
    nn: 'Ingen filer.',
    en: 'No files.',
    se: 'Eai leat fiillat.',
  },
  uploadedFiles: {
    nb: 'Opplastede filer',
    no: 'Opplastede filer',
    nn: 'Opplasta filer',
    en: 'Uploaded files',
    se: 'Vižžon fiillat',
  },
});
