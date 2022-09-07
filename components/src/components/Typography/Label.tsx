import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { BaseTypographyProps } from './Typography.types';

const StyledLabel = styled.label``;

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseTypographyProps
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { id, className, htmlProps, children, ...rest } = props;

  const labelProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    ref,
  };

  return <StyledLabel {...labelProps}> {children} </StyledLabel>;
});
