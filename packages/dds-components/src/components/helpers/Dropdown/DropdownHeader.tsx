import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import { Box } from '../../layout';
import typographyStyles from '../../Typography/typographyStyles.module.css';

type DropdownHeaderProps = ComponentPropsWithRef<'h2'>;

export const DropdownHeader = ({ className, ...rest }: DropdownHeaderProps) => {
  return (
    <Box
      as="h2"
      padding="x0.75 x0.75 0 x0.75"
      {...rest}
      className={cn(className, typographyStyles['heading-xsmall'])}
    />
  );
};
