import { ChangeEvent, useState, useId } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { combineHandlers } from '../../utils';
import { Typography } from '../Typography';
import { ToggleBarContext } from './ToggleBar.context';
import { toggleBarTokens as tokens } from './ToggleBar.tokens';
import { Property } from 'csstype';

type OuterContainerProps = {
  width?: Property.Width;
};

const OuterContainer = styled.div<OuterContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${tokens.outerContainer.gap};
  &::selection,
  *::selection {
    ${selection}
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

const Bar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

export type ToggleBarSize = 'tiny' | 'small' | 'medium' | 'large';

export type ToggleBarProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Størrelse på komponenten. */
      size?: ToggleBarSize;
      /**Ledetekst for hele gruppen. */
      label?: string;
      /**Funksjonen for `onChange`-event for barna. */
      onChange?: (event: ChangeEvent<HTMLInputElement>, value?: T) => void;
      /**Den valgte verdien i gruppen. Hvis satt ved innlastning blir en `<ToggleRadio />` forhåndsvalgt. */
      value?: T;
      /** Gir alle barna samme `name` prop.*/
      name?: string;
      /**Bredden til komponenten. Bredden fordeles likt mellom barna.  */
      width?: Property.Width;
    }
  >;

export const ToggleBar = <T extends string | number = string>(
  props: ToggleBarProps<T>
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

  const [groupValue, setGroupValue] = useState<
    string | number | null | undefined
  >(value);

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value as T)
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
        role="radiogroup"
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        aria-labelledby={labelId ?? htmlProps?.['aria-labelledby']}
        width={width}
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
