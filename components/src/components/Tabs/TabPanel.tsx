import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { focusVisible } from '../../helpers/styling';
import { tabsTokens as tokens } from './Tabs.tokens';

type PanelProps = {
  active: boolean;
};

const Panel = styled.div<PanelProps>`
  transition: 0.2s;
  ${tokens.panel.base}
  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
    &:focus-visible {
    ${focusVisible}
  }
`;

export type TabPanelProps = {
  /** Spesifiserer om panelet skal vises basert på aktiv fane. */
  active?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ active = false, children, ...rest }, ref) => {
    const panelProps = {
      ref,
      tabIndex: 0,
      role: 'tabpanel',
      active,
      ...rest
    };
    return <Panel {...panelProps}>{children}</Panel>;
  }
);
