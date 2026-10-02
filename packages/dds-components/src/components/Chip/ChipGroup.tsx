import { useId } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { HStack, type ResponsiveProps } from '../layout';
import { renderGroupLabel } from '../SelectionControl/SelectionControl.styles';

export type ChipGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Ledetekst for gruppen. */
    label?: string;

    /** Custom `id` for ledetekst. Som default genereres denne for å knytte ledetekst til gruppen.  */
    labelId?: string;
  } & Pick<ResponsiveProps, 'gap' | 'flexWrap'>
>;

export const ChipGroup = (props: ChipGroupProps) => {
  const {
    children,
    label,
    labelId,
    gap = 'x0.75',
    flexWrap = 'wrap',
    id,
    className,
    style,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueLabelId = labelId ?? `${generatedId}-ChipGroupLabel`;

  const baseProps = getBaseHTMLProps(id, className, style, htmlProps, rest);
  const layout = {
    gap,
    flexWrap,
  };

  return label ? (
    <div
      {...baseProps}
      role="group"
      aria-labelledby={label ? uniqueLabelId : undefined}
    >
      {renderGroupLabel({ label, id: uniqueLabelId })}
      <HStack {...layout}>{children}</HStack>
    </div>
  ) : (
    <HStack {...baseProps} {...layout} role="group">
      {children}
    </HStack>
  );
};

ChipGroup.displayName = 'ChipGroup';
