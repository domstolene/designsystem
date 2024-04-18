import { ErrorList } from './ErrorList';
import styles from './FileUploader.module.css';
import { type FileUploaderFile } from './fileUploaderReducer';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { CloseIcon } from '../Icon/icons';

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
    <li key={stateFile.file.name}>
      <div
        {...props}
        className={cn(styles.file, !isValid && styles['file--invalid'])}
      >
        <span className={styles.file__name}>{stateFile.file.name}</span>
        <Button
          size="small"
          purpose="tertiary"
          type="button"
          onClick={removeFile}
          icon={CloseIcon}
          htmlProps={{
            'aria-label': `Fjern fil, ${stateFile.file.name}`,
            'aria-invalid': !isValid ? true : undefined,
            'aria-errormessage': !isValid ? 'Ugyldig fil' : undefined,
            'aria-describedby': spaceSeparatedIdListGenerator(
              errorsList.map(e => e.id),
            ),
          }}
        />
      </div>
      <ErrorList errors={errorsList} />
    </li>
  );
};
