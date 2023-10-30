import { DateField } from './Datefield/DateField';

export type DatepickerProps = {
  label?: string;
  errorMessage?: string;
};

export const Datepicker = ({ label, errorMessage }: DatepickerProps) => {
  return <DateField label={label} errorMessage={errorMessage} />;
};
