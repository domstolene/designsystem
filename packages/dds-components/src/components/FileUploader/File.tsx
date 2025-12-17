import { useEffect, useState } from 'react';

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
import { Link, Typography } from '../Typography';

interface FileProps {
  parentId: string;
  index: number;
  isValid: boolean;
  file: FileUploaderFile;
  removeFile: () => void;
  disabled?: boolean;
  readOnly?: boolean;
}

export const File = (props: FileProps) => {
  const { t } = useTranslation();
  const {
    parentId,
    index,
    file: stateFile,
    removeFile,
    isValid,
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

  const inactive = disabled || readOnly;
  console.log('stateFile', stateFile);
  console.log('fileUrl', fileUrl);

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
            : isValid
              ? 'border-default'
              : 'border-danger'
        }
        background={inactive ? 'surface-field-disabled' : 'surface-subtle'}
        className={cn(!isValid && styles['file--invalid'])}
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
            <Icon
              icon={isValid ? CheckCircledIcon : ErrorIcon}
              iconSize="component"
              className={styles[`file__icon--${isValid ? 'valid' : 'invalid'}`]}
            />
            <Button
              size="xsmall"
              purpose="tertiary"
              type="button"
              onClick={removeFile}
              icon={CloseIcon}
              htmlProps={{
                'aria-label': t(texts.removeFile(stateFile.name)),
                'aria-invalid': !isValid ? true : undefined,
                'aria-errormessage': !isValid
                  ? t(texts.invalidFile)
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
