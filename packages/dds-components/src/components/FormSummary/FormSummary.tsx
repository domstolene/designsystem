import { Paper, type PaperProps } from '../layout';

export type FormSummaryProps = Pick<
  PaperProps,
  | 'children'
  | 'htmlProps'
  | 'ref'
  | 'id'
  | 'style'
  | 'className'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'margin'
  | 'marginBlock'
  | 'marginInline'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
>;

export const FormSummary = (props: FormSummaryProps) => {
  const { children, padding } = props;
  return (
    <Paper
      {...props}
      background="surface-default"
      border="border-subtle"
      padding={padding ?? 'x0.5 x0.5 x1 x0.75'}
    >
      {children}
    </Paper>
  );
};
