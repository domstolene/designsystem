import { useId } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { Box } from '../layout';
import { renderGroupLabel } from '../SelectionControl/SelectionControl.styles';

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
    <div
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      role="group"
      aria-labelledby={label ? uniqueLabelId : undefined}
    >
      {renderGroupLabel({ label, id: uniqueLabelId })}
      <Box display="flex" flexWrap="wrap" gap="x0.75" flexDirection={direction}>
        {children}
      </Box>
    </div>
  );
};

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
