import { Children, type ComponentPropsWithRef } from 'react';

import { StylelessList } from '../helpers';
import { HStack } from '../layout';

export type ChipGroupProps = ComponentPropsWithRef<'ul'>;

export const ChipGroup = ({ children, ...rest }: ChipGroupProps) => {
  const childrenArray = Children.toArray(children);

  return (
    <HStack as={StylelessList} {...rest} gap="x0.75">
      {childrenArray.map((item, index) => (
        <li key={`chip-${index}`}>{item}</li>
      ))}
    </HStack>
  );
};

ChipGroup.displayName = 'ChipGroup';
