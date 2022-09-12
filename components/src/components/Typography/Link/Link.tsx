import { AnchorHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getTextColor, TextColor } from '../../../utils';
import {
  StaticTypographyProps,
  StaticTypographyType,
  TypographyInteractionStyling,
} from '../Typography/Typography.types';
import { getAdditionalFontStyle, getAnchorStyling } from '../Typography.utils';
import { Icon } from '../../Icon';
import { OpenExternalIcon } from '../../../icons/tsx';

type StyledLinkProps = {
  typographyType?: StaticTypographyType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  external?: boolean;
  interactionStyling?: TypographyInteractionStyling;
};

const StyledLink = styled.a<StyledLinkProps>`
  ${({ external, interactionStyling, typographyType, withMargins }) =>
    getAnchorStyling(external, interactionStyling, typographyType, withMargins)}
  color: ${({ color }) => color && getTextColor(color)};
  ${({ bold, italic, underline }) =>
    getAdditionalFontStyle(bold, italic, underline)};
`;

type PickedHTMLAttributes = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'href' | 'target'
>;

export type LinkProps = BaseComponentPropsWithChildren<
  HTMLAnchorElement,
  StaticTypographyProps & {
    /**Spesifiserer om lenken fører til et eksternt nettsted eller åpnes i nytt vindu. Påvirker styling og setter `target` prop. */
    external?: boolean;
    /**Støtte for å enkelt kunne endre på hover- og active-styling. Bruk `@dds-design-tokens` til farger osv. */
    interactionStyling?: TypographyInteractionStyling;
  } & PickedHTMLAttributes,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof PickedHTMLAttributes>
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    id,
    className,
    htmlProps,
    children,
    typographyType,
    color,
    external,
    target,
    ...rest
  } = props;

  const linkProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    typographyType,
    color,
    ref,
    rel: 'noopener noreferer',
    target: external ? '_blank' : target ? target : undefined,
    external,
    ...rest,
  };

  return (
    <StyledLink {...linkProps}>
      {children}
      {external && <Icon icon={OpenExternalIcon} iconSize="inherit" />}
    </StyledLink>
  );
});
