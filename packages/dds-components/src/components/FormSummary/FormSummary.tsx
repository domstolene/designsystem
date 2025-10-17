import { Paper, type PaperProps } from '../layout';

export type FormSummaryProps = PaperProps;

export const FormSummary = (props: FormSummaryProps) => {
  const { children } = props;
  return (
    <Paper border="border-subtle" padding="x0.5 x0.5 x1 x0.75" {...props}>
      {children}
    </Paper>
  );
};
