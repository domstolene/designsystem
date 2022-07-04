import React, { useState } from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';
import { getTextColor, TextColor } from '../Typography';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { spinnerTokens as tokens } from './Spinner.tokens';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

type StyledSpinnerProps = Pick<SpinnerProps, 'size'> & {
  outerAnimationDelay: number;
};

const StyledSpinner = styled.svg<StyledSpinnerProps>`
  display: block;
  animation: rotate 2s linear infinite;
  animation-delay: ${({ outerAnimationDelay }) => outerAnimationDelay}ms;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

type CircleProps = Pick<SpinnerProps, 'color'> & {
  innerAnimationDelay: number;
};

const Circle = styled.circle<CircleProps>`
  ${tokens.circle.base}
  stroke: ${({ color }) => color && getTextColor(color)};
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
  animation-delay: ${({ innerAnimationDelay }) => innerAnimationDelay}ms;
`;

export type SpinnerProps = BaseComponentProps<
  SVGElement,
  {
    /**Farge på spinneren. */
    color?: TextColor | string;
    /**Størrelse; Setter høyde og bredde på spinneren. */
    size?: Property.Width<string>;
  }
>;

let nextUniqueId = 0;

export function Spinner(props: SpinnerProps) {
  const {
    size = ddsBaseTokens.iconSizes.DdsIconsizeMedium,
    color = 'interactive',
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const mountTime = React.useRef(Date.now());
  const outerAnimationDelay = -(mountTime.current % 2000);
  const innerAnimationDelay = -(mountTime.current % 1500);

  const [uniqueId] = useState<string>(`spinnerTitle-${nextUniqueId++}`);

  const spinnerProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    outerAnimationDelay,
    size
  };

  const circleProps = {
    innerAnimationDelay,
    color
  };

  return (
    <StyledSpinner
      viewBox="0 0 50 50"
      role="img"
      aria-labelledby={uniqueId}
      {...spinnerProps}
    >
      <title id={uniqueId}>innlastning pågår</title>
      <Circle
        {...circleProps}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  );
}
