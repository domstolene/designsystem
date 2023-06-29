import { useRef } from 'react';
import { AriaDateFieldOptions, useDateField } from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { DateValue, createCalendar } from '@internationalized/date';
import styled from 'styled-components';
import { Label } from '@norges-domstoler/dds-components';
import { StatefulInput } from '@norges-domstoler/dds-core';

import { DateSegment } from './DateSegment';
import { datepickerTokens } from './Datepicker.tokens';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
};

const DateFieldContainer = styled.div``;

const DateSegmentContainer = styled(StatefulInput).attrs({ as: 'span' })`
  min-width: ${datepickerTokens.datefield.minWidth};
  display: flex;
  flex-direction: row;
`;

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  const hasLabel = props.label != null;
  const state = useDateFieldState({
    ...props,
    locale: 'no',
    createCalendar,
  });

  const ref = useRef<HTMLDivElement>(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <DateFieldContainer className={props.className}>
      {hasLabel && <Label {...labelProps}>{props.label}</Label>}
      <DateSegmentContainer {...fieldProps} ref={ref} hasErrorMessage={false}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </DateSegmentContainer>
    </DateFieldContainer>
  );
}
