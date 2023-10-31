import { useId } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { Typography } from '@norges-domstoler/dds-typography';
import { toggleButtonTokens as tokens } from './ToggleButton.tokens';

type GroupProps = { direction?: Direction };

const Group = styled.div<GroupProps>`
  gap: ${tokens.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({ direction }) => css`
    flex-direction: ${direction};
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.container.gap};
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

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const {
    children,
    direction = 'row',
    label,
    labelId,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueLabelId = labelId ?? `${generatedId}-ToggleButtonGroupLabel`;
  const groupProps = {
    direction,
  };

  const containerProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    role: 'group',
    'aria-labelledby': label ? uniqueLabelId : undefined,
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

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
