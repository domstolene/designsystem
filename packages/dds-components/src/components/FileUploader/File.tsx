import { ErrorList } from './ErrorList';
import styles from './FileUploader.module.css';
import { type FileUploaderFile } from './fileUploaderReducer';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { CheckCircledIcon, CloseIcon, ErrorIcon } from '../Icon/icons';
import { Paper } from '../layout';
import typographyStyles from '../Typography/typographyStyles.module.css';

interface FileProps {
  parentId: string;
  index: number;
  isValid: boolean;
  file: FileUploaderFile;
  removeFile: () => void;
}

export const File = (props: FileProps) => {
  const { parentId, index, file: stateFile, removeFile, isValid } = props;

  const errorsList = stateFile.errors.map((e, errorIndex) => ({
    id: derivativeIdGenerator(parentId, `file-${index}-error-${errorIndex}`),
    message: e,
  }));

  return (
    <li>
      <Paper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="x0.75"
        marginBlock="x0.5 0"
        padding="x0.5 x1"
        border={isValid ? 'border-default' : 'border-danger'}
        background="surface-subtle"
        className={cn(!isValid && styles['file--invalid'])}
      >
        <span
          className={cn(styles.file__name, typographyStyles['body-medium'])}
        >
          {stateFile.file.name}
        </span>
        <Icon
          icon={isValid ? CheckCircledIcon : ErrorIcon}
          className={styles[`file__icon--${isValid ? 'valid' : 'invalid'}`]}
        />
        <Button
          size="small"
          purpose="tertiary"
          type="button"
          onClick={removeFile}
          icon={CloseIcon}
          htmlProps={{
            'aria-label': `Fjern fil ${stateFile.file.name}`,
            'aria-invalid': !isValid ? true : undefined,
            'aria-errormessage': !isValid ? 'Ugyldig fil' : undefined,
            'aria-describedby': spaceSeparatedIdListGenerator(
              errorsList.map(e => e.id),
            ),
          }}
        />
      </Paper>
      <ErrorList errors={errorsList} />
    </li>
  );
};
