import { useId } from 'react';

import styles from './ToggleButton.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
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
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles['group-container']),
        htmlProps,
        rest,
      )}
      role="group"
      aria-labelledby={label ? uniqueLabelId : undefined}
    >
      {!!label && (
        <Typography as="span" typographyType="labelMedium" id={uniqueLabelId}>
          {label}
        </Typography>
      )}
      <div className={cn(styles.group, styles[`group--${direction}`])}>
        {children}
      </div>
    </div>
  );
};

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
