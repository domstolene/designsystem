import { DateField } from './DateField/DateField';

export type DatePickerProps = {
  label?: string;
  errorMessage?: string;
};

export const DatePicker = ({ label, errorMessage }: DatePickerProps) => {
  return <DateField label={label} errorMessage={errorMessage} />;
};
