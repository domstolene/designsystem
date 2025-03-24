import { Divider, type DividerProps } from '../../Divider';
import { Box } from '../../layout';

type OverflowMenuDividerProps = DividerProps;

export const OverflowMenuDivider = (props: OverflowMenuDividerProps) => {
  return (
    <Box
      marginInline="x0.5"
      marginBlock="x0"
      as={Divider}
      color="subtle"
      {...props}
    />
  );
};

OverflowMenuDivider.displayName = 'OverflowMenuDivider';
