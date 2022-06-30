import {
  forwardRef,
  ElementType,
  PropsWithChildren,
  HTMLAttributes,
  AnchorHTMLAttributes
} from 'react';
import styled, { css, CSSObject } from 'styled-components';
import {
  typographyTokens as tokens,
  textColors,
  textColorsArray
} from './Typography.tokens';
import { IconWrapper } from '../IconWrapper';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import {
  TypographyType,
  TextColor,
  OtherTypographyType,
  AnchorTypographyType,
  LabelTypographyType
} from './Typography.types';
import { focusVisibleLinkTransitionValue } from '../../helpers/styling';

const getElementType = (element: string): ElementType => {
  switch (element) {
    case 'a':
      return 'a';
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

const LinkIconWrapper = styled(IconWrapper)`
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

type BaseTypographyProps = PropsWithChildren<{
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa. Brukes hovedsakelig i artikler og lignende. **OBS!** har forskjellig virkning på ulike typografityper. `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens `supportingStyles` får margin topp og bunn. */
  withMargins?: boolean;
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
}>;

type AnchorTypographyProps = BaseTypographyProps & {
  /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
  typographyType?: AnchorTypographyType;

  href?: string | undefined;

  /** Spesifiserer om lenka er ekstern ved `typographyType='a'` eller `as='a'`.*/
  externalLink?: boolean;

  /**nativ `target`-prop ved `typographyType='a'`.  */
  target?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type LabelTypographyProps = BaseTypographyProps & {
  /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
  typographyType?: LabelTypographyType;
} & HTMLAttributes<HTMLLabelElement>;

type OtherTypographyProps = BaseTypographyProps & {
  /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
  typographyType?: OtherTypographyType;
} & HTMLAttributes<HTMLLabelElement>;

export type TypographyProps =
  | AnchorTypographyProps
  | LabelTypographyProps
  | OtherTypographyProps;

const isAnchorProps = (
  props: TypographyProps
): props is AnchorTypographyProps => props.typographyType === 'a';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const {
      typographyType = 'bodySans02',
      as: propAs,
      children,
      ...rest
    } = props;

    const as = propAs ? propAs : getElementType(typographyType as string);

    let relProp;
    let targetProp;
    let renderWrapper = false;
    if (isAnchorProps(props)) {
      const { externalLink, target } = props;

      renderWrapper = (as === 'a' && externalLink) ?? false;
      relProp = as === 'a' ? 'noopener noreferer' : undefined;
      targetProp = as !== 'a' ? undefined : externalLink ? '_blank' : target;
    }

    const typographyProps = {
      ...rest,
      typographyType,
      as,
      rel: relProp,
      target: targetProp
    };

    return (
      <StyledTypography ref={ref} {...typographyProps}>
        {children}
        {renderWrapper && (
          <LinkIconWrapper Icon={LaunchOutlinedIcon} iconSize="inline" />
        )}
      </StyledTypography>
    );
  }
);
