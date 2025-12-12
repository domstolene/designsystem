import { getBaseHTMLProps } from '../../../types';
import { Divider, type DividerProps } from '../../Divider';
import { Box } from '../../layout';

type OverflowMenuDividerProps = Omit<DividerProps, 'color'>;

export const OverflowMenuDivider = ({
  id,
  className,
  style,
  htmlProps,
  ...rest
}: OverflowMenuDividerProps) => {
  return (
    <Box
      as={Divider}
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      marginInline="x0.5"
      marginBlock="x0"
      color="subtle"
    />
  );
};

OverflowMenuDivider.displayName = 'OverflowMenuDivider';
