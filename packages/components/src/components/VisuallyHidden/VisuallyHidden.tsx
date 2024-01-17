import styled from 'styled-components';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';

const Wrapper = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0px;
  padding: 0px;
  top: 0px;
  inset-inline-start: 0px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  border: 0px;
`;

type VisuallyHiddenDivProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  { as: 'div' }
>;

type VisuallyHiddenSpanProps = BaseComponentPropsWithChildren<
  HTMLSpanElement,
  {
    /**Spesifiserer hvilken HTML tag skal returneres. */
    as: 'span';
  }
>;

export type VisuallyHiddenProps =
  | VisuallyHiddenSpanProps
  | VisuallyHiddenDivProps;

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  const { children, id, className, htmlProps, as, ...rest } = props;

  if (as === 'div') {
    return (
      <Wrapper {...getBaseHTMLProps(id, className, htmlProps, rest)} as={as}>
        {children}
      </Wrapper>
    );
  }
  return (
    <Wrapper {...getBaseHTMLProps(id, className, htmlProps, rest)}>
      {children}
    </Wrapper>
  );
};

VisuallyHidden.displayName = 'VisuallyHidden';
