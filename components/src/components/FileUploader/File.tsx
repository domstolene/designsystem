import styled from 'styled-components';
import { CloseIcon } from '../../icons/tsx';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button } from '../Button';
import { ErrorList } from './ErrorList';
import { fileTokens } from './FileUploader.tokens';
import { FileUploaderFile } from './fileUploaderReducer';

type FileProps = {
  parentId: string;
  index: number;
  isValid: boolean;
  file: FileUploaderFile;
  removeFile: () => void;
};

const FileWrapper = styled.li``;

const FileNameWrapper = styled.span`
  word-break: break-all;
`;

const FileElement = styled.div<FileProps>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ isValid }) =>
    isValid ? fileTokens.backgroundColor : fileTokens.invalid.borderColor};
  margin-top: ${fileTokens.marginTop};
  padding: ${fileTokens.paddingLeftRight} ${fileTokens.paddingTopBottom};
  background-color: ${fileTokens.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${fileTokens.textToIconsGap};
`;

const RemoveFileButton = styled(Button)`
  padding: 0;
`;

export const File = (props: FileProps) => {
  const { parentId, index, file: stateFile, removeFile, isValid } = props;

  const errorsList = stateFile.errors.map((e, errorIndex) => ({
    id: derivativeIdGenerator(parentId, `file-${index}-error-${errorIndex}`),
    message: e,
  }));

  return (
    <FileWrapper key={stateFile.file.name}>
      <FileElement {...props}>
        <FileNameWrapper>{stateFile.file.name}</FileNameWrapper>
        <RemoveFileButton
          size="small"
          appearance="borderless"
          purpose="secondary"
          type="button"
          onClick={removeFile}
          icon={CloseIcon}
          htmlProps={{
            'aria-label': `Fjern fil, ${stateFile.file.name}`,
            'aria-invalid': !isValid ? true : undefined,
            'aria-errormessage': !isValid ? 'Ugyldig fil' : undefined,
            'aria-describedby': spaceSeparatedIdListGenerator(
              errorsList.map(e => e.id)
            ),
          }}
        />
      </FileElement>
      <ErrorList errors={errorsList} />
    </FileWrapper>
  );
};
