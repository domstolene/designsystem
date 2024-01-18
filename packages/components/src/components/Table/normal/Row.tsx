import { forwardRef } from 'react';

import { useIsInTableHead } from './Head';
import { StyledRow } from './Table.styles';
import { type TableRowProps } from './Table.types';

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { type: _type, mode = 'normal', hoverable, selected, children, ...rest },
    ref,
  ) => {
    const isInHeader = useIsInTableHead();
    const type = _type ?? (isInHeader ? 'head' : 'body');
    return (
      <StyledRow
        type={type}
        $mode={mode}
        $hoverable={hoverable}
        $selected={selected}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledRow>
    );
  },
);

Row.displayName = 'Table.Row';
