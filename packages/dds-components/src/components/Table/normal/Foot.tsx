import { type ComponentPropsWithRef } from 'react';

export type TableFootProps = ComponentPropsWithRef<'tfoot'>;

export const Foot = (props: TableFootProps) => <tfoot {...props} />;

Foot.displayName = 'Table.Foot';
