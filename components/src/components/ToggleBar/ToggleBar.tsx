import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

const Bar = styled.div``;

export type ToggleBarProps = BaseComponentProps<HTMLDivElement, {}>;

export const ToggleBar = forwardRef<HTMLDivElement, ToggleBarProps>(
  (props, ref) => {
    const { htmlProps, className, id, ...rest } = props;
    return (
      <Bar
        ref={ref}
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ></Bar>
    );
  }
);
