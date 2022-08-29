import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { selection } from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { combineHandlers } from '../../utils';
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

export type ToggleBarProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Størrelse på komponenten. */
      size?: ToggleBarSize;
      /**Ledetekst for hele gruppen. */
      label?: string;
      /**Funksjonen for `onChange`-event for barna. */
      onChange?: (
        event: ChangeEvent<HTMLInputElement>,
        value: T | undefined
      ) => void;
      /**Den valgte verdien i gruppen. Hvis satt ved innlastning en `<ToggleRadio />` blir forhåndsvalgt. */
      value?: T | undefined;
      /** Gir alle barna `name` prop.*/
      name?: string;
    }
  >;

let nextUniqueId = 0;

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
    htmlProps,
    className,
    id,
    ...rest
  } = props;

  const [uniqueId] = useState<string | undefined>(
    id ?? `ToggleBar-${nextUniqueId++}`
  );

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
