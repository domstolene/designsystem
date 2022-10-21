import { forwardRef, HTMLAttributes, Children } from 'react';
import styled from 'styled-components';
import { removeListStyling } from '../../helpers/styling/removeListStyling';
import { chipTokens as tokens } from './Chip.tokens';

const Group = styled.ul`
  ${removeListStyling}
  display: flex;
  gap: ${tokens.group.gap};
`;

export type ChipGroupProps = HTMLAttributes<HTMLUListElement>;

export const ChipGroup = forwardRef<HTMLUListElement, ChipGroupProps>(
  ({ children, ...rest }, ref) => {
    const childrenArray = Children.toArray(children);

    const groupChildren = childrenArray.map((item, index) => (
      <li key={`chip-${index}`}>{item}</li>
    ));
    return (
      <Group {...rest} ref={ref}>
        {groupChildren}
      </Group>
    );
  }
);
