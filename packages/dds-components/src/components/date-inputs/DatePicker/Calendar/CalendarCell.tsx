import { type ComponentPropsWithRef } from 'react';

import { Box, cn } from '../../../..';
import tgStyles from '../../../Typography/typographyStyles.module.css';
import styles from '../../common/DateInput.module.css';

type CalendarCellProps = ComponentPropsWithRef<'th'> & { as: 'th' | 'td' };

export function CalendarCell({ ...props }: CalendarCellProps) {
  return (
    <Box
      textAlign="center"
      className={cn(tgStyles['text-color--subtle'], styles.calendar__th)}
      {...props}
    />
  );
}

CalendarCell.displayName = 'CalendarCell';
