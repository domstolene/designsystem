import { forwardRef } from 'react';
import styled from 'styled-components';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type BaseTypographyProps, Typography } from '../Typography';

const StyledLegend = styled(Typography)`
  padding-inline: 0;
`;

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  BaseTypographyProps
>;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  (props, ref) => {
    const { id, className, htmlProps, children, ...rest } = props;

    return (
      <StyledLegend
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        forwardedAs="legend"
        typographyType="headingSans03"
      >
        {children}
      </StyledLegend>
    );
  },
);

Legend.displayName = 'Legend';
