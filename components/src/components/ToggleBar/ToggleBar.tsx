import { forwardRef } from 'react';
import styled from 'styled-components';
import { selection } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { Typography } from '../Typography';
import { ToggleBarContext } from './ToggleBar.context';
import { toggleBarTokens as tokens } from './ToggleBar.tokens';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.outerContainer.gap};
  &::selection,
  *::selection {
    ${selection}
  }
`;

const Bar = styled.div`
  display: flex;
`;

export type ToggleBarSize = 'tiny' | 'small' | 'medium' | 'large';

export type ToggleBarProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Størrelse på komponenten. */
    size?: ToggleBarSize;
    /**Ledetekst for hele gruppen. */
    label?: string;
  }
>;

export const ToggleBar = forwardRef<HTMLDivElement, ToggleBarProps>(
  (props, ref) => {
    const {
      children,
      size = 'medium',
      label,
      htmlProps,
      className,
      id,
      ...rest
    } = props;
    return (
      <ToggleBarContext.Provider value={{ size: size }}>
        <OuterContainer
          ref={ref}
          role="group"
          {...getBaseHTMLProps(id, className, htmlProps, rest)}
        >
          <Typography typographyType="supportingStyleLabel01">
            {label}
          </Typography>
          <Bar>{children}</Bar>
        </OuterContainer>
      </ToggleBarContext.Provider>
    );
  }
);
