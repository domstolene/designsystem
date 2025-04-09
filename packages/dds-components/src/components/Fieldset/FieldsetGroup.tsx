import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { VStack } from '../layout';

export type FieldsetGroupProps = BaseComponentPropsWithChildren<HTMLDivElement>;

export const FieldsetGroup = ({
  id,
  className,
  htmlProps,
  ...rest
}: FieldsetGroupProps) => (
  <VStack gap="x1.5" {...getBaseHTMLProps(id, className, htmlProps, rest)} />
);

FieldsetGroup.displayName = 'FieldsetGroup';
