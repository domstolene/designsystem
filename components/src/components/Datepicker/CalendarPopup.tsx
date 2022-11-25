import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Paper } from '../../helpers';
import { Caption } from '../Typography';
import { VisuallyHidden } from '../VisuallyHidden';
import { getMonthFromNumber } from './CalendarPopup.utils';
import { datepickerTokens } from './Datepicker.tokens';
import { isWeekday, MonthNames, WeekdayNames } from './Datepicker.types';
import { Day } from './Day';

const { calendarPopup } = datepickerTokens;

const OuterContainer = styled(Paper)`
  padding: ${calendarPopup.base.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${calendarPopup.base.border};
`;

const MonthTable = styled.table``;

const Cell = styled.td``;

const HCell = styled.th`
  font-weight: normal;
`;

const MetaText = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: ${calendarPopup.metaText.color};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type CalendarPopupProps = {
  isOpen?: boolean;
  withWeeks?: boolean;
};

export const CalendarPopup = forwardRef<HTMLDivElement, CalendarPopupProps>(
  (props, ref) => {
    const { withWeeks } = props;
    const [selectedDayIndex, setSelectedDayIndex] = useState<
      number | undefined
    >();

    const date = new Date();

    const thisMonth = getMonthFromNumber(date.getMonth());

    const weekdays: WeekdayNames = {
      Monday: 'Ma',
      Tuesday: 'Ti',
      Wednesday: 'On',
      Thursday: 'To',
      Friday: 'Fr',
      Saturday: 'Lø',
      Sunday: 'Sø',
    };

    const weekdaysFull: WeekdayNames = {
      Monday: 'Mandag',
      Tuesday: 'Tirsdag',
      Wednesday: 'Onsdag',
      Thursday: 'Torsdag',
      Friday: 'Fredag',
      Saturday: 'Lørdag',
      Sunday: 'Søndag',
    };

    const months: MonthNames = {
      January: 'Januar',
      February: 'Februar',
      March: 'Mars',
      April: 'April',
      May: 'Mai',
      June: 'Juni',
      July: 'Juli',
      August: 'August',
      September: 'September',
      October: 'Oktober',
      November: 'November',
      December: 'Desember',
    };

    const thisMonthName = thisMonth && months[thisMonth];

    const renderWeekDays = Object.keys(weekdays).map(day => {
      return (
        isWeekday(day) && (
          <HCell key={day}>
            <MetaText>
              <span aria-hidden={true}>{weekdays[day]}</span>
              <VisuallyHidden as="span"> {weekdaysFull[day]} </VisuallyHidden>
            </MetaText>
          </HCell>
        )
      );
    });

    const handleDayChange = (i: number) => {
      setSelectedDayIndex(i);
    };

    //placeholder for å teste styling
    const renderDays = () => {
      const month = [];
      for (let index = 0; index < 7; index++) {
        const isSelected = selectedDayIndex === index;
        month.push(
          <Cell>
            <Day
              aria-label={`${index + 1}. ${thisMonthName} ()`}
              index={index}
              selected={isSelected}
              onClick={() => handleDayChange(index)}
              aria-pressed={isSelected}
            />
          </Cell>
        );
      }
      return month;
    };

    return (
      <OuterContainer ref={ref} elevation={2}>
        <MonthTable role="grid">
          <Caption>{thisMonthName} 2021</Caption>
          <thead>
            <tr>
              {withWeeks && (
                <HCell>
                  <MetaText>
                    <VisuallyHidden as="span">Ukenummer</VisuallyHidden>
                    <span aria-hidden={true}>#</span>
                  </MetaText>
                </HCell>
              )}
              {renderWeekDays}
            </tr>
          </thead>
          <tbody>
            <tr>
              {withWeeks && (
                <HCell scope="row">
                  {/**Placeholder for tekst */}
                  <MetaText>
                    <VisuallyHidden as="span">Uke</VisuallyHidden>
                    43
                  </MetaText>
                </HCell>
              )}
              {renderDays()}
            </tr>
          </tbody>
        </MonthTable>
      </OuterContainer>
    );
  }
);
