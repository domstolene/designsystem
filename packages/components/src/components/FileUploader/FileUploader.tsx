import { type Property } from 'csstype';
import { type ComponentProps, useId } from 'react';

import { ErrorList } from './ErrorList';
import { File } from './File';
import styles from './FileUploader.module.css';
import { type FileList } from './types';
import { type FileUploaderHookProps, useFileUploader } from './useFileUploader';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { UploadIcon } from '../Icon/icons';
import { InputMessage } from '../InputMessage';
import { Label } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

export type FileUploaderProps = {
  /**Id til filopplasteren. */
  id?: string;
  /**Ledetekst for filopplaster. */
  label?: string;
  /**Ledetekst for slippsonen. Denne teksten skal, av UU-hensyn, henge sammen med den usynlige teksten: "velg fil med påfølgende knapp"
   * @default "Dra og slipp filer her eller"
   */
  dropAreaLabel?: string;
  /**Ledetekst for opplastingsknappen.
   * @default "Velg fil"
   */
  btnLabel?: string;
  /**Hjelpetekst. */
  tip?: string;
  /**Om det er påkrevd med minst én fil. */
  required?: boolean;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Bredde for filopplasteren. */
  width?: Property.Width;
  /**Om drag-and-drop zone skal vises.
   * @default true
   */
  withDragAndDrop?: boolean;
  /**Om listen med opplastede filer skal skjules. Brukes kun hvis listen blir vist på egen måte. */
  hideFileList?: boolean;
} & Partial<FileUploaderHookProps> &
  Omit<ComponentProps<'div'>, 'onChange' | 'id'>;

export const FileUploader = (props: FileUploaderProps) => {
  const {
    id,
    label,
    dropAreaLabel = 'Dra og slipp filer her eller',
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
    width,
    errorMessage,
    hideFileList,
    style,
    className,
    ...rest
  } = props;

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
    <div
      id={uniqueId}
      className={cn(
        className,
        styles.container,
        typographyStyles['body-medium'],
      )}
      style={{ ...style, width }}
      {...rest}
    >
      {hasLabel && (
        <Label id={labelId} showRequiredStyling={showRequiredMarker}>
          {label}
        </Label>
      )}
      {hasTip && <InputMessage id={tipId} message={tip} messageType="tip" />}
      {withDragAndDrop ? (
        <div
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
          {dropAreaLabel}
          <VisuallyHidden as="span">
            velg fil med påfølgende knapp
          </VisuallyHidden>
          {button}
        </div>
      ) : (
        <div className={styles['input-container--no-drag-zone']}>
          <input {...getInputProps()} id={inputId} />
          {button}
        </div>
      )}
      <ErrorList errors={rootErrorsList} />
      {!hideFileList && (
        <ul className={utilStyles['remove-list-styling']}>
          {fileListElements}
        </ul>
      )}
    </div>
  );
};

FileUploader.displayName = 'FileUploader';
