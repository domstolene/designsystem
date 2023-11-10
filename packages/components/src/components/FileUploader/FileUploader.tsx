import { useId } from 'react';
import styled from 'styled-components';
import { UploadIcon } from '@norges-domstoler/dds-icons';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '@norges-domstoler/dds-core';
import { Label } from '@norges-domstoler/dds-typography';
import { Button } from '../Button';
import { InputMessage } from '../InputMessage';
import { VisuallyHidden } from '../VisuallyHidden';
import { ErrorList } from './ErrorList';
import { File } from './File';
import { rootTokens } from './FileUploader.tokens';
import { FileList } from './types';
import { FileUploaderHookProps, useFileUploader } from './useFileUploader';
import { Property } from 'csstype';

const defaultWidth: Property.Width<string> = '320px';

const Wrapper = styled.div<{ width?: Property.Width<string> }>`
  width: ${({ width }) => (width ? width : defaultWidth)};
`;

interface RootProps {
  isDragActive: boolean;
  hasRootErrors: boolean;
}

const Root = styled.div<RootProps>`
  box-sizing: border-box;
  border-width: ${({ hasRootErrors }) => (hasRootErrors ? '2px' : '1px')};
  border-style: dashed;
  border-color: ${({ isDragActive, hasRootErrors }) =>
    isDragActive
      ? rootTokens.dragActive.borderColor
      : hasRootErrors
      ? rootTokens.borderColorError
      : rootTokens.borderColor};
  padding: ${({ hasRootErrors }) =>
    hasRootErrors
      ? `calc(${rootTokens.paddingLeftRightTop} - 1px) calc(${rootTokens.paddingLeftRightTop} - 1px) ${rootTokens.paddingBottom}`
      : `${rootTokens.paddingLeftRightTop} ${rootTokens.paddingLeftRightTop} ${rootTokens.paddingBottom}`};
  display: flex;
  flex-direction: column;
  gap: ${rootTokens.gap};
  background-color: ${({ isDragActive }) =>
    isDragActive
      ? rootTokens.dragActive.backgroundColor
      : rootTokens.backgroundColor};
`;

const FileUploaderInput = styled.input``;

const FileListElement = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

type FileUploaderProps = {
  /**Id til filopplasteren. */
  id?: string;
  /**Ledetekst for filopplaster. */
  label?: string;
  /**Hjelpetekst. */
  tip?: string;
  /**Om det er påkrevd med minst en fil. */
  required?: boolean;
  /**Callback for når fil-listen endres. */
  onChange: (newFiles: FileList) => void;
  /**Bredde for filopplasteren. */
  width?: Property.Width<string>;
} & Partial<FileUploaderHookProps>;

export const FileUploader = (props: FileUploaderProps) => {
  const {
    id,
    label,
    tip,
    required = false,
    initialFiles,
    value,
    accept,
    maxFiles,
    disabled,
    onChange,
    width,
    errorMessage,
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

  const tipId = derivativeIdGenerator(uniqueId, 'tip');

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

  return (
    <Wrapper width={width}>
      {hasLabel && (
        <Label showRequiredStyling={showRequiredMarker} htmlFor={uniqueId}>
          {label}
        </Label>
      )}
      {hasTip && <InputMessage id={tipId} message={tip} messageType="tip" />}
      <Root
        {...getRootProps()}
        isDragActive={isDragActive}
        hasRootErrors={hasRootErrors}
      >
        <FileUploaderInput {...getInputProps()} />
        Dra og slipp filer her eller{' '}
        <VisuallyHidden as="span">velg fil med påfølgende knapp</VisuallyHidden>
        <Button
          {...getButtonProps()}
          id={uniqueId}
          size="medium"
          type="button"
          appearance="filled"
          purpose="secondary"
          icon={UploadIcon}
          htmlProps={{
            'aria-invalid': hasRootErrors ? true : undefined,
            'aria-describedby': spaceSeparatedIdListGenerator([
              hasTip ? tipId : undefined,
              ...rootErrorsList.map(e => e.id),
            ]),
          }}
        >
          Velg fil
        </Button>
      </Root>
      <ErrorList errors={rootErrorsList} />

      <FileListElement>{fileListElements}</FileListElement>
    </Wrapper>
  );
};

FileUploader.displayName = 'FileUploader';
