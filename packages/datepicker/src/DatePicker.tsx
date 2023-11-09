import { DateField } from './DateField/DateField';

export interface DatePickerProps {
  label?: string;
  errorMessage?: string;
}

export const DatePicker = ({ label, errorMessage }: DatePickerProps) => {
  return <DateField label={label} errorMessage={errorMessage} />;
};
