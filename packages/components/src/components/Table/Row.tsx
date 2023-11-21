import { forwardRef } from 'react';
import { TableRowProps } from './Table.types';
import { StyledRow } from './Table.styles';

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { type = 'body', mode = 'normal', hoverable, selected, children, ...rest },
    ref,
  ) => {
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
