import { useId } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { Box, VStack } from '../layout';
import { Typography } from '../Typography';

type Direction = 'row' | 'column';

export type ToggleButtonGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Ledetekst for gruppen. */
    label?: string;
    /**Retningen barna legger seg i.
     * @default "row"
     */
    direction?: Direction;
    /** Custom `id` for ledetekst. Blir generert som default for å knytte ledetekst til gruppen.  */
    labelId?: string;
  }
>;

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const {
    children,
    direction = 'row',
    label,
    labelId,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueLabelId = labelId ?? `${generatedId}-ToggleButtonGroupLabel`;

  return (
    <VStack
      gap="x0.5"
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      role="group"
      aria-labelledby={label ? uniqueLabelId : undefined}
    >
      {!!label && (
        <Typography as="span" typographyType="labelMedium" id={uniqueLabelId}>
          {label}
        </Typography>
      )}
      <Box display="flex" flexWrap="wrap" gap="x0.75" flexDirection={direction}>
        {children}
      </Box>
    </VStack>
  );
};

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
