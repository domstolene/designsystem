import { ChangeEvent, useState, useId } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '@norges-domstoler/dds-core';
import { getBaseHTMLProps } from '@norges-domstoler/dds-core';
import { combineHandlers } from '@norges-domstoler/dds-core';
import { Typography } from '@norges-domstoler/dds-typography';
import { ToggleBarContext } from './ToggleBar.context';
import { toggleBarTokens as tokens } from './ToggleBar.tokens';
import { Property } from 'csstype';
import { ToggleBarProps, ToggleBarValue } from './ToggleBar.types';

interface OuterContainerProps {
  $width?: Property.Width;
}

const OuterContainer = styled.div<OuterContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${tokens.outerContainer.gap};
  &::selection,
  *::selection {
    ${selection}
  }
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}
`;

const Bar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

export const ToggleBar = <T extends string | number = string>(
  props: ToggleBarProps<T>,
) => {
  const {
    children,
    size = 'medium',
    label,
    onChange,
    value,
    name,
    width,
    htmlProps,
    className,
    id,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-ToggleBar`;

  const [groupValue, setGroupValue] = useState<ToggleBarValue>(value);

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value as T),
  );

  const labelId = label && `${uniqueId}-label`;

  return (
    <ToggleBarContext.Provider
      value={{
        size: size,
        onChange: handleChange,
        name: name,
        value: groupValue,
      }}
    >
      <OuterContainer
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        role="radiogroup"
        aria-labelledby={labelId ?? htmlProps?.['aria-labelledby']}
        $width={width}
      >
        {label && (
          <Typography typographyType="supportingStyleLabel01" id={labelId}>
            {label}
          </Typography>
        )}
        <Bar>{children}</Bar>
      </OuterContainer>
    </ToggleBarContext.Provider>
  );
};

ToggleBar.displayName = 'ToggleBar';
