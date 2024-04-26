import { type Property } from 'csstype';
import { useId } from 'react';
import styled from 'styled-components';

import { ErrorList } from './ErrorList';
import { File } from './File';
import { noZoneContainerTokens, rootTokens } from './FileUploader.tokens';
import { type FileList } from './types';
import { type FileUploaderHookProps, useFileUploader } from './useFileUploader';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { UploadIcon } from '../Icon/icons';
import { InputMessage } from '../InputMessage';
import { Label } from '../Typography';
import { VisuallyHidden } from '../VisuallyHidden';

const defaultWidth: Property.Width<string> = '320px';

const Wrapper = styled.div<{ width?: Property.Width<string> }>`
  width: ${({ width }) => (width ? width : defaultWidth)};
`;

interface RootProps {
  $isDragActive: boolean;
  $hasRootErrors: boolean;
}

const Root = styled.div<RootProps>`
  box-sizing: border-box;
  border-width: ${({ $hasRootErrors: hasRootErrors }) =>
    hasRootErrors ? '2px' : '1px'};
  border-style: dashed;
  border-color: ${({ $isDragActive, $hasRootErrors }) =>
    $isDragActive
      ? rootTokens.dragActive.borderColor
      : $hasRootErrors
        ? rootTokens.borderColorError
        : rootTokens.borderColor};
  padding: ${({ $hasRootErrors }) =>
    $hasRootErrors
      ? `calc(${rootTokens.paddingLeftRightTop} - 1px) calc(${rootTokens.paddingLeftRightTop} - 1px) ${rootTokens.paddingBottom}`
      : `${rootTokens.paddingLeftRightTop} ${rootTokens.paddingLeftRightTop} ${rootTokens.paddingBottom}`};
  display: flex;
  flex-direction: column;
  gap: ${rootTokens.gap};
  background-color: ${({ $isDragActive }) =>
    $isDragActive
      ? rootTokens.dragActive.backgroundColor
      : rootTokens.backgroundColor};
`;

const NoZoneContainer = styled.div`
  padding: ${noZoneContainerTokens.padding};
`;

const FileUploaderInput = styled.input``;

const FileListElement = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export type FileUploaderProps = {
  /**Id til filopplasteren. */
  id?: string;
  /**Ledetekst for filopplaster. */
  label?: string;
  /**Ledetekst for slippsonen. */
  dropAreaLabel?: string;
  /**Ledetekst for opplastingsknappen. */
  btnLabel?: string;
  /**Hjelpetekst. */
  tip?: string;
  /**Om det er påkrevd med minst en fil. */
  required?: boolean;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Bredde for filopplasteren. */
  width?: Property.Width<string>;
  /**Om drag-and-drop zone skal vises. */
  withDragAndDrop?: boolean;
  /**Om listen med opplastede filer skal skjules. Brukes kun hvis listen blir vist på egen måte. */
  hideFileList?: boolean;
} & Partial<FileUploaderHookProps>;

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
      appearance="filled"
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
    <Wrapper width={width} id={uniqueId}>
      {hasLabel && (
        <Label id={labelId} showRequiredStyling={showRequiredMarker}>
          {label}
        </Label>
      )}
      {hasTip && <InputMessage id={tipId} message={tip} messageType="tip" />}
      {withDragAndDrop ? (
        <Root
          {...getRootProps()}
          $isDragActive={isDragActive}
          $hasRootErrors={hasRootErrors}
        >
          <FileUploaderInput
            {...getInputProps()}
            id={inputId}
            data-testid="file-uploader-input"
          />
          {dropAreaLabel}
          <VisuallyHidden as="span">
            velg fil med påfølgende knapp
          </VisuallyHidden>
          {button}
        </Root>
      ) : (
        <NoZoneContainer>
          <FileUploaderInput {...getInputProps()} />
          {button}
        </NoZoneContainer>
      )}
      <ErrorList errors={rootErrorsList} />
      {!hideFileList && <FileListElement>{fileListElements}</FileListElement>}
    </Wrapper>
  );
};

FileUploader.displayName = 'FileUploader';
