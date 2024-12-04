import { type HTMLAttributes, forwardRef } from 'react';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return <tbody ref={ref} {...props} />;
  },
);

Body.displayName = 'Table.Body';
