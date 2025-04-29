import { type ComponentPropsWithRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';
import { Box } from '../layout';
import { useDetailListContext } from './DetailList.context';

export type DetailListRowProps = ComponentPropsWithRef<'div'>;

export const DetailListRow = ({ className, ...rest }: DetailListRowProps) => {
  const { smallScreenBreakpoint: bp } = useDetailListContext();
  const hasBp = !!bp;

  return (
    <>
      <Box
        display="table-row"
        hideBelow={hasBp ? bp : undefined}
        className={cn(className, styles.row)}
        {...rest}
      />
      {hasBp && (
        <Box
          display="flex"
          flexDirection="column"
          showBelow={bp}
          className={cn(className, styles.row, styles.column)}
          {...rest}
        />
      )}
    </>
  );
};

DetailListRow.displayName = 'DetailListRow';
