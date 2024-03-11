import { forwardRef } from 'react';
import styled from 'styled-components';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';

const StyledFieldset = styled.fieldset`
  padding-block: 0;
  padding-inline: 0;
  margin-inline: 0;
  border: none;
`;

export type FieldsetProps = BaseComponentPropsWithChildren<
  HTMLFieldSetElement,
  {
    /** Om alle inputfelt skal bli `disabled`. */
    disabled?: boolean;
  }
>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (props, ref) => {
    const { id, className, htmlProps, ...rest } = props;
    return (
      <StyledFieldset
        ref={ref}
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
      />
    );
  },
);
