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
import { StylelessList } from '../helpers';
import { UploadIcon } from '../Icon/icons';
import { InputMessage } from '../InputMessage';
import { Box, type ResponsiveProps, VStack } from '../layout';
import { Label } from '../Typography';
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
  /**Hjelpetekst. */
  tip?: string;
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
  Omit<ComponentPropsWithRef<'div'>, 'onChange' | 'id'>;

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
    onChange,
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
    maxFiles,
    errorMessage,
  });
  const hasLabel = label !== undefined;
  const hasTip = tip !== undefined;
  const hasRootErrors = rootErrors.length > 0;
  const showRequiredMarker = required;

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
      {btnLabel}
    </Button>
  );

  return (
    <Box
      id={uniqueId}
      className={cn(className, typographyStyles['body-medium'])}
      width={width}
      {...rest}
    >
      {hasLabel && (
        <Label
          id={labelId}
          showRequiredStyling={showRequiredMarker}
          htmlFor={inputId}
        >
          {label}
        </Label>
      )}
      {hasTip && <InputMessage id={tipId} message={tip} messageType="tip" />}
      {withDragAndDrop ? (
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
          <input
            {...getInputProps()}
            id={inputId}
            data-testid="file-uploader-input"
          />
          {tDropAreaLabel}
          <VisuallyHidden>{t(texts.uploadFileWithButton)}</VisuallyHidden>
          {button}
        </VStack>
      ) : (
        <div className={styles['input-container--no-drag-zone']}>
          <input {...getInputProps()} id={inputId} />
          {button}
        </div>
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
