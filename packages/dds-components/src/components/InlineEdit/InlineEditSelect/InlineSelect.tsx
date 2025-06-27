import { cn } from '../../../utils';
import { useInlineEditContext } from '../InlineEdit.context';
import { type InlineSelectProps } from '../InlineEdit.types';
import { inlineSelectCns } from '../InlineEdit.utils';
import { InlineEditField } from '../InlineEditField';

export const InlineSelect = ({ ...props }: InlineSelectProps) => {
  const { isEditing } = useInlineEditContext();
  return (
    <InlineEditField<HTMLSelectElement>
      {...props}
      elementType="select"
      renderInput={({ hasError, className, ...rest }) => (
        <select
          {...rest}
          aria-invalid={hasError}
          className={cn(
            className,
            ...inlineSelectCns(hasError, !isEditing && !props.hideIcon),
          )}
        />
      )}
    />
  );
};

InlineSelect.displayName = 'InlineSelect';
