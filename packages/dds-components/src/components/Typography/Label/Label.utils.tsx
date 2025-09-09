import { type ReactNode } from 'react';

import { Label, type LabelProps } from './Label';

type RenderLabelProps = {
  label?: ReactNode;
} & Omit<LabelProps, 'withMargins' | 'children'>;

export function renderLabel(props: RenderLabelProps) {
  const { label, ...rest } = props;
  const hasLabel = !!label;
  if (hasLabel)
    return (
      <Label {...rest} withMargins>
        {label}
      </Label>
    );
  return null;
}
