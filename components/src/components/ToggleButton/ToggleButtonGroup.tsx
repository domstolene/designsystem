import { useState } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { Typography } from '../Typography';
import { toggleButtonTokens as tokens } from './ToggleButton.tokens';

type GroupProps = { direction?: Direction };

const Group = styled.div<GroupProps>`
  ${tokens.group.base}
  ${({ direction }) =>
    css`
      flex-direction: ${direction};
    `}
`;

const Container = styled.div`
  ${tokens.container.base}
`;

type Direction = 'row' | 'column';

export type ToggleButtonGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Ledetekst for gruppen. */
    label?: string;
    /**Retningen barna legger seg i. */
    direction?: Direction;
    /** Custom `id` for ledetekst. Blir generert som default for å knytte ledetekst til gruppen.  */
    labelId?: string;
  }
>;

let nextUniqueId = 0;

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const {
    children,
    direction = 'row',
    label,
    labelId,
    id,
    htmlProps,
    ...rest
  } = props;

  const [uniqueLabelId] = useState<string>(
    labelId ?? `ToggleButtonGroupLabel-${nextUniqueId++}`
  );

  const groupProps = {
    direction
  };

  const containerProps = {
    ...getBaseHTMLProps(id, htmlProps, rest),
    role: 'group',
    'aria-labelledby': label ? uniqueLabelId : undefined
  };

  return (
    <Container {...containerProps}>
      {!!label && (
        <Typography
          as="span"
          typographyType="supportingStyleLabel01"
          id={uniqueLabelId}
        >
          {label}
        </Typography>
      )}
      <Group {...groupProps}>{children}</Group>
    </Container>
  );
};
