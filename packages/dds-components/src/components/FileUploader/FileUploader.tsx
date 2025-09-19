import { type ComponentPropsWithRef, useId } from 'react';

import { ErrorList } from './ErrorList';
import { File } from './File';
import styles from './FileUploader.module.css';
import { type FileList } from './types';
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
import { InputMessage } from '../InputMessage';
import { Box, type ResponsiveProps, VStack } from '../layout';
import { Typography } from '../Typography';
import { renderLabel } from '../Typography/Label/Label.utils';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

export type FileUploaderProps = {
  /**Id til filopplasteren. */
  id?: string;
  /**Ledetekst for filopplaster. */
  label?: string;
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
  Pick<InputProps, 'tip'>;

export const FileUploader = (props: FileUploaderProps) => {
  const {
    id,
    label,
    dropAreaLabel,
    btnLabel = 'Velg fil',
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
    ...rest
  } = props;

  const { t } = useTranslation();
  const tDropAreaLabel = dropAreaLabel ?? t(texts.dragAndDropOr);

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

  const labelId = derivativeIdGenerator(uniqueId, 'label');
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const buttonId = derivativeIdGenerator(uniqueId, 'button');
  const inputId = derivativeIdGenerator(uniqueId, 'input');

  const fileListElements = stateFiles.map((stateFile, index) => (
    <File
      key={stateFile.file.name}
      parentId={uniqueId}
      index={index}
      file={stateFile}
      isValid={stateFile.errors.length === 0}
      removeFile={() => removeFile(stateFile)}
      disabled={disabled}
      readOnly={readOnly}
    />
  ));

  const hasNoFilesDesc = fileListElements.length === 0 && readOnly;
  const noFilesId = derivativeIdGenerator(uniqueId, 'no-files');

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
      {btnLabel}
    </Button>
  );

  const input = (
    <HiddenInput
      {...getInputProps()}
      className={cn(readOnly && focusStyles['focusable-sibling'])}
      id={inputId}
      data-testid="file-uploader-input"
      aria-describedby={hasNoFilesDesc ? noFilesId : undefined}
    />
  );

  return (
    <Box
      id={uniqueId}
      className={cn(className, typographyStyles['body-medium'])}
      width={width}
      {...rest}
    >
      {renderLabel({
        label,
        id: labelId,
        showRequiredStyling: required,
        htmlFor: inputId,
        readOnly,
      })}
      {hasTip && <InputMessage id={tipId} message={tip} messageType="tip" />}
      {disabled || readOnly ? (
        <>
          {input}
          {fileListElements.length === 0 ? (
            <Typography
              id={noFilesId}
              italic
              as="span"
              color={disabled ? 'text-subtle' : 'text-medium'}
              className={cn(
                focusStyles['focus-styled-sibling'],
                styles['no-files'],
              )}
            >
              Ingen filer.
            </Typography>
          ) : (
            ''
          )}
        </>
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
      {!hideFileList && <StylelessList>{fileListElements}</StylelessList>}
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
  },
  uploadFileWithButton: {
    nb: 'last opp en fil med den påfølgende knappen',
    no: 'last opp en fil med den påfølgende knappen',
    nn: 'last opp ei fil med den påfølgjande knappen',
    en: 'upload using the following button',
  },
});
