import { type HTMLAttributes, forwardRef } from 'react';

export type TableFootProps = HTMLAttributes<HTMLTableSectionElement>;

export const Foot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  (props, ref) => {
    return <tfoot ref={ref} {...props} />;
  },
);

Foot.displayName = 'Table.Foot';
