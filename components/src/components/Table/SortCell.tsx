import { forwardRef } from 'react';
import { Cell, TableCellProps } from './Cell';
import { cellTokens as tokens } from './cellTokens';
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

const StyledCell = styled(Cell)`
  cursor: pointer;
`;

export type SortOrder = 'ascending' | 'descending' | 'none';

export type SortCellProps = {
  isSorted?: boolean;
  sortOrder?: SortOrder;
} & Omit<TableCellProps, 'type'>;

export const SortCell = forwardRef<HTMLTableHeaderCellElement, SortCellProps>(
  ({ isSorted, sortOrder, children, ...rest }, ref) => {
    const IconRenderer = (isSorted?: boolean, sortOrder?: SortOrder) => {
      const Wrapper = (
        Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
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
      <StyledCell ref={ref} type="head" {...rest}>
        {children} {IconRenderer(isSorted, sortOrder)}
      </StyledCell>
    );
  }
);
