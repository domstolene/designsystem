import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import { Box } from '../../layout';
import typographyStyles from '../../Typography/typographyStyles.module.css';

type OverflowMenuListHeaderProps = ComponentPropsWithRef<'h2'>;

export const OverflowMenuListHeader = ({
  className,
  ...rest
}: OverflowMenuListHeaderProps) => (
  <Box
    as="h2"
    paddingInline="x0.75"
    paddingBlock="x0.75 0"
    {...rest}
    className={cn(className, typographyStyles['heading-xxsmall'])}
  />
);

OverflowMenuListHeader.displayName = 'OverflowMenuListHeader';
