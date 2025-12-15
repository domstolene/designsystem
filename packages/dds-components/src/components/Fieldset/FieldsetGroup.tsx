import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { VStack } from '../layout';

export type FieldsetGroupProps = BaseComponentPropsWithChildren<HTMLDivElement>;

export const FieldsetGroup = ({
  id,
  className,
  style,
  htmlProps,
  ...rest
}: FieldsetGroupProps) => (
  <VStack
    gap="x1.5"
    {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
  />
);

FieldsetGroup.displayName = 'FieldsetGroup';
