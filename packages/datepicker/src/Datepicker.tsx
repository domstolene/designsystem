import { DateField } from './DateField';

export type DatepickerProps = {
  label?: string;
};

export const Datepicker = ({ label }: DatepickerProps) => {
  return <DateField label={label} />;
};
