import React, { useId } from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';
import { getTextColor, TextColor } from '@norges-domstoler/dds-core';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import {
  BaseComponentProps,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';

type StyledSpinnerProps = Pick<SpinnerProps, 'size'> & {
  outerAnimationDelay: number;
};

const StyledSpinner = styled.svg<StyledSpinnerProps>`
  display: block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  stroke-dasharray: 90, 150;
  animation: rotate 1.5s linear infinite;
  animation-delay: ${({ outerAnimationDelay }) => outerAnimationDelay}ms;

  @media (prefers-reduced-motion: no-preference) {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

type CircleProps = Pick<SpinnerProps, 'color'> & {
  innerAnimationDelay: number;
};

const Circle = styled.circle<CircleProps>`
  stroke: ${({ color }) => color && getTextColor(color)};
  stroke-linecap: round;

  @media (prefers-reduced-motion: no-preference) {
    animation: dash 1.5s ease-in-out infinite;
    animation-delay: ${({ innerAnimationDelay }) => innerAnimationDelay}ms;

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
  }
`;

export type SpinnerProps = BaseComponentProps<
  SVGElement,
  {
    /**Farge på spinneren. */
    color?: TextColor | (string & NonNullable<unknown>);
    /**Størrelse; Setter høyde og bredde på spinneren. */
    size?: Property.Width<string>;
    /**Tekst som vises ved hover. */
    tooltip?: string;
  }
>;

export function Spinner(props: SpinnerProps) {
  const {
    size = ddsBaseTokens.iconSizes.DdsIconsizeMedium,
    color = 'interactive',
    tooltip = 'Innlasting pågår',
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const mountTime = React.useRef(Date.now());
  const outerAnimationDelay = -(mountTime.current % 2000);
  const innerAnimationDelay = -(mountTime.current % 1500);

  const generatedId = useId();
  const uniqueId = `${generatedId}-spinnerTitle`;

  const spinnerProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    outerAnimationDelay,
    size,
  };

  const circleProps = {
    innerAnimationDelay,
    color,
  };

  return (
    <StyledSpinner
      viewBox="0 0 50 50"
      role="img"
      aria-labelledby={uniqueId}
      {...spinnerProps}
    >
      {tooltip && <title id={uniqueId}>{tooltip}</title>}
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

Spinner.displayName = 'Spinner';
