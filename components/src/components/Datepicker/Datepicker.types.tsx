import { d } from '../../types';

export type OneToNine = Exclude<d, 0>;

export type yyyy = `19${d}${d}` | `20${d}${d}`;
export type MM = `0${OneToNine}` | `1${0 | 1 | 2}`;
export type dd = `0${OneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type MMFeb = '02';
export type MM30Days = '04' | '06' | '09' | '11';
export type MM31Days = Exclude<MM, MMFeb | MM30Days>;

export type MMddFeb = `${MMFeb}-${Exclude<dd, '29' | '30' | '31'>}`;
export type MMdd31Days = `${MM31Days}-${dd}`;
export type MMdd30Days = `${MM30Days}-${Exclude<dd, '31'>}`;

export type DateString = `${yyyy}-${MMdd30Days | MMdd31Days | MMddFeb}`;

export type Weekday =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export type WeekdayNames = {
  [k in Weekday]: string;
};

export const isWeekday = (day: string): day is Weekday =>
  weekdays.indexOf(day) !== -1;

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const isMonth = (month: string): month is Month =>
  months.indexOf(month) !== -1;

export type MonthNames = {
  [k in Month]: string;
};
