import { type AnchorHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type BaseTypographyProps,
  type TypographyBodyType,
  getAnchorStyling,
} from '../Typography';

interface StyledLinkProps {
  $typographyType?: TypographyBodyType;
  $withMargins?: boolean;
  $external?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  ${({ $external, $typographyType, $withMargins }) =>
    getAnchorStyling($external, undefined, $typographyType, $withMargins)}
`;

type PickedHTMLAttributes = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'href' | 'target'
>;

export type LinkProps = BaseComponentPropsWithChildren<
  HTMLAnchorElement,
  {
    /**Spesifiserer om lenken fører til et eksternt nettsted eller åpnes i nytt vindu. Påvirker styling og setter `target` prop. */
    external?: boolean;
    /**Spesifiserer typografistil basert på utvalget for brødtekst.  */
    typographyType?: TypographyBodyType;
  } & BaseTypographyProps &
    PickedHTMLAttributes,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof PickedHTMLAttributes>
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    id,
    className,
    htmlProps,
    children,
    typographyType,
    external,
    target,
    ...rest
  } = props;

  return (
    <StyledLink
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      {...rest}
      $typographyType={typographyType}
      $external={external}
      ref={ref}
      rel="noopener noreferer"
      target={external ? '_blank' : target}
    >
      {children}
    </StyledLink>
  );
});

Link.displayName = 'Link';
