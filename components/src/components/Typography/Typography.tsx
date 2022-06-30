import {
  forwardRef,
  HTMLAttributes,
  ElementType,
  AnchorHTMLAttributes,
  LabelHTMLAttributes
} from 'react';
import styled, { css, CSSObject } from 'styled-components';
import {
  typographyTokens as tokens,
  textColors,
  textColorsArray
} from './Typography.tokens';
import { Icon } from '../Icon';
import { TypographyType, TextColor } from './Typography.types';
import { focusVisibleLinkTransitionValue } from '../../helpers/styling';

const getElementType = (element: string): ElementType => {
  switch (element) {
    case 'a':
      return element;
    case 'headingSans01':
      return 'h6';
    case 'headingSans02':
      return 'h5';
    case 'headingSans03':
      return 'h4';
    case 'headingSans04':
      return 'h3';
    case 'headingSans05':
      return 'h2';
    case 'headingSans06':
    case 'headingSans07':
    case 'headingSans08':
      return 'h1';
    case 'supportingStyleLabel01':
      return 'label';
    case 'bodySans01':
    case 'bodySans02':
    case 'bodySans03':
    case 'bodySans04':
    case 'bodySerif01':
    case 'bodySerif02':
    case 'bodySerif03':
    case 'bodySerif04':
    case 'leadSans01':
    case 'leadSans02':
    case 'leadSans03':
    case 'leadSans04':
    case 'leadSans05':
    case 'supportingStyleInputText01':
    case 'supportingStyleInputText02':
    case 'supportingStyleInputText03':
    case 'supportingStyleHelperText01':
    case 'supportingStylePlaceholderText01':
    case 'supportingStyleTiny01':
    case 'supportingStyleTiny02':
    default:
      return 'p';
  }
};

export function isTextColor(color: string): color is TextColor {
  return textColorsArray.indexOf(color) !== -1;
}

export const getTextColor = (color: TextColor | string): string => {
  if (isTextColor(color)) return textColors[color];
  return color;
};

const getElementStyling = (type: TypographyType) => {
  return css`
    ${tokens.typographyType[type].base}
    &::selection, *::selection {
      ${tokens.selection.base}
    }
  `;
};

type StyledTypographyProps = Pick<
  TypographyProps,
  | 'typographyType'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'withMargins'
  | 'interactionProps'
  | 'color'
>;

const LinkIcon = styled(Icon)`
  ${tokens.typographyType.a.icon}
`;

const StyledTypography = styled.p<StyledTypographyProps>`
  ${({ typographyType }) => typographyType && getElementStyling(typographyType)}
  ${({ typographyType, interactionProps }) =>
    typographyType === 'a' &&
    css`
      display: inline-flex;
      align-items: center;
      transition: ${focusVisibleLinkTransitionValue};

      &:hover {
        ${tokens.typographyType[typographyType].hover.base}
      }
      ${interactionProps &&
      interactionProps.active &&
      css`
        &:active {
          ${interactionProps.active}
        }
      `}
      &:focus-visible, &.focus-visible {
        ${tokens.typographyType[typographyType].focus.base}
      }
      &:focus-visible::selection &.focus-visible::selection {
        ${tokens.typographyType[typographyType].focus.base}
      }
    `}
    ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.hover &&
    css`
      &:hover {
        ${interactionProps.hover}
      }
    `}
      ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.active &&
    css`
      &:active {
        ${interactionProps.active}
      }
    `}

  ${({ withMargins, typographyType }) =>
    withMargins && typographyType
      ? css`
          ${tokens.typographyType[typographyType].margins.base}
        `
      : css`
          margin: 0;
        `}

  ${({ color }) =>
    color &&
    css`
      color: ${getTextColor(color)};
    `}
  ${({ bold }) =>
    bold &&
    css`
      ${tokens.style.bold.base}
    `}
  ${({ italic }) =>
    italic &&
    css`
      ${tokens.style.italic.base}
    `}
  ${({ underline }) =>
    underline &&
    css`
      ${tokens.style.underline.base}
    `}
`;

export type TypographyInteractionProps = {
  hover?: CSSObject;
  active?: CSSObject;
};

export type TypographyProps = {
  /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
  typographyType?: TypographyType;
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa. Brukes hovedsakelig i artikler og lignende. **OBS!** har forskjellig virkning på ulike typografityper. `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens `supportingStyles` får margin topp og bunn. */
  withMargins?: boolean;
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
  /** Spesifiserer om lenka er ekstern ved `typographyType='a'` eller `as='a'`.*/
  externalLink?: boolean;
  /**Tekstfarge fra utvalget eller custom. **OBS!** Bruk farger fra `@dds-design-tokens`. */
  color?: TextColor | string;
  /**Setter `bold` styling. */
  bold?: boolean;
  /**Setter `italic` styling. */
  italic?: boolean;
  /**Setter en linje under. */
  underline?: boolean;
  /**Støtte for å enkelt kunne endre på hover- og active-styling. Bruk `@dds-design-tokens` til farger osv. */
  interactionProps?: TypographyInteractionProps;
  /**nativ `target`-prop ved `typographyType='a'`.  */
  target?: string;
} & (
  | HTMLAttributes<HTMLElement>
  | LabelHTMLAttributes<HTMLLabelElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      typographyType = 'bodySans02',
      as: propAs,
      externalLink,
      target,
      children,
      ...rest
    },
    ref
  ) => {
    const as = propAs ? propAs : getElementType(typographyType as string);

    const typographyProps = {
      typographyType,
      as,
      rel: as === 'a' ? 'noopener noreferer' : undefined,
      target: as !== 'a' ? undefined : externalLink ? '_blank' : target,
      ...rest
    };

    return (
      <StyledTypography ref={ref} {...typographyProps}>
        {children}{' '}
        {as === 'a' && externalLink ? (
          <LinkIcon iconName="openInNew" iconSize="inherit" />
        ) : (
          ''
        )}
      </StyledTypography>
    );
  }
);
