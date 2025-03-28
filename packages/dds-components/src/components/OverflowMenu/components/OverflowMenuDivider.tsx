import { getBaseHTMLProps } from '../../../types';
import { Divider, type DividerProps } from '../../Divider';
import { Box } from '../../layout';

type OverflowMenuDividerProps = Omit<DividerProps, 'color'>;

export const OverflowMenuDivider = ({
  id,
  className,
  htmlProps,
  ...rest
}: OverflowMenuDividerProps) => {
  return (
    <Box
      as={Divider}
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      marginInline="x0.5"
      marginBlock="x0"
      color="subtle"
    />
  );
};

OverflowMenuDivider.displayName = 'OverflowMenuDivider';
