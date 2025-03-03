import { type ComponentPropsWithRef } from 'react';

export type TableBodyProps = ComponentPropsWithRef<'tbody'>;

export const Body = (props: TableBodyProps) => <tbody {...props} />;

Body.displayName = 'Table.Body';
