import { type HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import { normalizeButton, removeButtonStyling } from '../helpers';
import { getAnchorStyling } from '../Typography';

const StyledInlineButton = styled.button`
  ${normalizeButton}
  ${removeButtonStyling}
  display: inline;
  ${getAnchorStyling()}
`;

export type InlineButtonProps = HTMLAttributes<HTMLButtonElement>;

export const InlineButton = forwardRef<HTMLButtonElement, InlineButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <StyledInlineButton ref={ref} {...rest}>
        {children}
      </StyledInlineButton>
    );
  },
);
