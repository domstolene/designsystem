import { forwardRef } from 'react';
import { TableRowProps } from './Table.types';
import { StyledRow } from './Table.styles';

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ type = 'body', mode = 'normal', children, ...rest }, ref) => {
    const rowProps = {
      type,
      mode,
      ...rest,
    };

    return (
      <StyledRow ref={ref} {...rowProps}>
        {children}
      </StyledRow>
    );
  }
);

Row.displayName = 'Table.Row';
