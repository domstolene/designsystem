import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { focusVisible } from '../../helpers/styling';
import { tabsTokens as tokens } from './Tabs.tokens';

type PanelProps = {
  selected: boolean;
};

const Panel = styled.div<PanelProps>`
  transition: 0.2s;
  ${tokens.panel.base}
  ${({ selected }) =>
    !selected &&
    css`
      display: none;
    `}
  &:focus-visible {
    ${focusVisible}
  }
`;

export type TabPanelProps = {
  /** Spesifiserer om panelet skal vises baser på aktiv fane. */
  selected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ selected = false, children, ...rest }, ref) => {
    const panelProps = {
      ref,
      tabIndex: 0,
      role: 'tabpanel',
      selected,
      ...rest
    };
    return <Panel {...panelProps}>{children}</Panel>;
  }
);
