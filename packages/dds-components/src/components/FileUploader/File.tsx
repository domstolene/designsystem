import { type ReactNode, useEffect, useState } from 'react';

import { ErrorList } from './ErrorList';
import styles from './FileUploader.module.css';
import { type FileUploaderFile } from './fileUploaderReducer';
import { createTexts, useTranslation } from '../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { CheckCircledIcon, CloseIcon, ErrorIcon } from '../Icon/icons';
import { Paper } from '../layout';
import { Spinner } from '../Spinner';
import { Link, Typography } from '../Typography';
import { type UploadInfo } from './FileUploader.types';

type FileProps = {
  parentId: string;
  index: number;
  isValid: boolean;
  file: FileUploaderFile;
  removeFile: () => void;
  disabled?: boolean;
  readOnly?: boolean;
} & UploadInfo;

export const File = (props: FileProps) => {
  const { t } = useTranslation();
  const {
    parentId,
    index,
    file: stateFile,
    removeFile,
    isValid,
    uploadStatus,
    errorMessage,
    disabled,
    readOnly,
  } = props;

  const [fileUrl, setFileUrl] = useState<string>();

  useEffect(() => {
    if (stateFile.url) {
      setFileUrl(stateFile.url);
    } else if (stateFile.file) {
      const url = URL.createObjectURL(stateFile.file);
      setFileUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [stateFile.file]);

  const errorsList = stateFile.errors.map((e, errorIndex) => ({
    id: derivativeIdGenerator(parentId, `file-${index}-error-${errorIndex}`),
    message: e,
  }));

  if (errorMessage)
    errorsList.push({
      id: derivativeIdGenerator(
        parentId,
        `file-${index}-error-${errorsList.length}`,
      ),
      message: errorMessage,
    });

  const inactive = disabled || readOnly;
  console.log('errorsList', errorsList);
  console.log('errorsMessage', stateFile?.errorMessage);

  type DisplayStatus = 'valid' | 'invalid' | 'uploading' | 'success' | 'error';
  let displayStatus: DisplayStatus;

  if (!isValid) displayStatus = 'invalid';
  else if (uploadStatus) displayStatus = uploadStatus;
  else displayStatus = 'valid';
  const isInvalid = displayStatus === 'invalid';
  const hasError = displayStatus === 'error' || isInvalid;
  const hasErrorMessage = !!stateFile.errorMessage;

  let statusIndicator: ReactNode;
  switch (displayStatus) {
    case 'uploading':
      statusIndicator = <Spinner size="var(--dds-size-icon-component)" />;
      break;
    case 'success':
    case 'valid':
      statusIndicator = (
        <Icon
          icon={CheckCircledIcon}
          iconSize="component"
          className={styles[`file__icon--valid`]}
        />
      );
      break;
    case 'invalid':
    case 'error':
      statusIndicator = (
        <Icon
          icon={ErrorIcon}
          iconSize="component"
          className={styles[`file__icon--invalid`]}
        />
      );
      break;
  }
  return (
    <li>
      <Paper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="x0.75"
        marginBlock="x0.5 0"
        padding="x0.5 x1"
        border={
          disabled
            ? 'border-subtle'
            : !hasError
              ? 'border-default'
              : 'border-danger'
        }
        background={inactive ? 'surface-field-disabled' : 'surface-subtle'}
        className={cn(hasError && styles['file--invalid'])}
      >
        <Typography
          as="span"
          color={
            disabled ? 'text-subtle' : readOnly ? 'text-medium' : undefined
          }
          className={cn(styles.file__name)}
        >
          {fileUrl ? (
            <Link href={fileUrl} target="_blank">
              {stateFile.name}
            </Link>
          ) : (
            stateFile.name
          )}
        </Typography>
        {!inactive && (
          <>
            {statusIndicator}
            <Button
              size="xsmall"
              purpose="tertiary"
              type="button"
              onClick={removeFile}
              icon={CloseIcon}
              aria-label={t(texts.removeFile(stateFile.name))}
              htmlProps={{
                'aria-invalid': !isValid ? true : undefined,
                'aria-errormessage': !isValid
                  ? t(texts.invalidFile)
                  : hasErrorMessage
                    ? stateFile.errorMessage
                    : undefined,
                'aria-describedby': spaceSeparatedIdListGenerator(
                  errorsList.map(e => e.id),
                ),
              }}
            />
          </>
        )}
      </Paper>
      <ErrorList errors={errorsList} />
    </li>
  );
};

const texts = createTexts({
  removeFile: file => ({
    nb: `Fjern fil ${file}`,
    no: `Fjern fil ${file}`,
    nn: `Fjern fil ${file}`,
    en: `Remove file ${file}`,
    se: `Sihku filla ${file}`,
  }),
  invalidFile: {
    nb: 'Ugyldig fil',
    no: 'Ugyldig fil',
    nn: 'Ugyldig fil',
    en: 'Invalid file',
    se: 'Fámohis fiila',
  },
});
