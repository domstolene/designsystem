import { forwardRef, MouseEvent } from 'react';
import { Cell, TableCellProps } from './Cell';
import { cellTokens as tokens } from './Cell.tokens';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { IconWrapper } from '../../helpers/IconWrapper';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import styled from 'styled-components';

const SortIconWrapper = styled(IconWrapper)`
  ${tokens.head.sortCell.icon.base}
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export type SortOrder = 'ascending' | 'descending' | 'none';

export type SortCellProps = {
  isSorted?: boolean;
  sortOrder?: SortOrder;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<TableCellProps, 'type'>;

export const SortCell = forwardRef<HTMLTableHeaderCellElement, SortCellProps>(
  ({ isSorted, sortOrder, onClick, children, ...rest }, ref) => {
    const IconRenderer = (isSorted?: boolean, sortOrder?: SortOrder) => {
      const Wrapper = (
        Icon: OverridableComponent<
          SvgIconTypeMap<Record<string, unknown>, 'svg'>
        >
      ) => <SortIconWrapper Icon={Icon} iconSize="inline" />;
      return !isSorted
        ? Wrapper(UnfoldMoreIcon)
        : sortOrder === 'ascending'
        ? Wrapper(KeyboardArrowDownIcon)
        : sortOrder === 'descending'
        ? Wrapper(KeyboardArrowUpIcon)
        : '';
    };

    return (
      <Cell
        ref={ref}
        type="head"
        aria-sort={sortOrder !== 'none' ? sortOrder : undefined}
        {...rest}
      >
        <StyledButton onClick={onClick}>
          {children} {IconRenderer(isSorted, sortOrder)}
        </StyledButton>
      </Cell>
    );
  }
);
