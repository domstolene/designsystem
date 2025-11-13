import { type ComponentPropsWithRef, useContext } from 'react';

import { cn } from '../../../utils';
import { Box } from '../../layout';
import { ThemeContext } from '../../ThemeProvider';
import typographyStyles from '../../Typography/typographyStyles.module.css';

type OverflowMenuListHeaderProps = ComponentPropsWithRef<'h2'>;

export const OverflowMenuListHeader = ({
  className,
  ...rest
}: OverflowMenuListHeaderProps) => {
  const themeContext = useContext(ThemeContext);
  const headingStyle =
    themeContext?.theme === 'core' ? 'heading-xsmall' : 'heading-xxsmall';
  return (
    <Box
      as="h2"
      paddingInline="x0.75"
      paddingBlock="x0.75 0"
      {...rest}
      className={cn(className, typographyStyles[headingStyle])}
    />
  );
};

OverflowMenuListHeader.displayName = 'OverflowMenuListHeader';
