import {
  InlineEdit as InlineEditComponent,
  InlineEditProps,
} from './InlineEdit';
import { InlineInput, InlineInputProps } from './InlineInput';
import { InlineTextArea, InlineTextAreaProps } from './InlineTextArea';

type InlineEditCompoundProps = typeof InlineEditComponent & {
  Input: typeof InlineInput;
  TextArea: typeof InlineTextArea;
};

const InlineEdit = InlineEditComponent as InlineEditCompoundProps;

InlineEdit.Input = InlineInput;
InlineEdit.TextArea = InlineTextArea;

InlineEdit.Input.displayName = 'InlineEdit.InlineInput';
InlineEdit.TextArea.displayName = 'InlineEdit.InlineTextArea';

export { InlineEdit };
export type { InlineEditProps, InlineInputProps, InlineTextAreaProps };
