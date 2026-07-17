import { type ElementType } from 'react';

import { type ExtractStrict } from '../../../types';
import { type TextColor } from '../../../utils/color';
import { type ResponsiveProps } from '../../layout';

export const TG_BODY_SHORT_TYPES = [
  'body-short-xsmall',
  'body-short-small',
  'body-short-medium',
  'body-short-large',
] as const;

export const TG_BODY_LONG_TYPES = [
  'body-long-xsmall',
  'body-long-small',
  'body-long-medium',
  'body-long-large',
] as const;

export const TG_BODY_TYPES = [
  ...TG_BODY_SHORT_TYPES,
  ...TG_BODY_LONG_TYPES,
] as const;

export const TG_LEAD_TYPES = ['lead-medium'] as const;

export type TypographyBodyShortType = (typeof TG_BODY_SHORT_TYPES)[number];

export type TypographyBodyLongType = (typeof TG_BODY_LONG_TYPES)[number];

export type TypographyBodyType = (typeof TG_BODY_TYPES)[number];

export const TG_HEADING_TYPES = [
  'heading-xxsmall',
  'heading-xsmall',
  'heading-small',
  'heading-medium',
  'heading-large',
  'heading-xlarge',
  'heading-xxlarge',
] as const;

export type TypographyHeadingType = (typeof TG_HEADING_TYPES)[number];

export type TypographyLeadType = (typeof TG_LEAD_TYPES)[number];

export type TypographyAnchorType = 'a';

export type TypographyLabelType = 'label-medium';

export type OtherTypographyType =
  | TypographyHeadingType
  | TypographyBodyType
  | TypographyLeadType;

export type TypographyType =
  | TypographyAnchorType
  | TypographyLabelType
  | OtherTypographyType;

export type StaticTypographyType = OtherTypographyType | TypographyLabelType;

export type InlineElement =
  | 'a'
  | 'abbr'
  | 'audio'
  | 'b'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'br'
  | 'button'
  | 'canvas'
  | 'cite'
  | 'code'
  | 'data'
  | 'datalist'
  | 'del'
  | 'dfn'
  | 'em'
  | 'embed'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'label'
  | 'map'
  | 'mark'
  | 'meter'
  | 'noscript'
  | 'object'
  | 'output'
  | 'picture'
  | 'progress'
  | 'q'
  | 'ruby'
  | 's'
  | 'samp'
  | 'script'
  | 'select'
  | 'slot'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'svg'
  | 'template'
  | 'textarea'
  | 'time'
  | 'u'
  | 'var'
  | 'video'
  | 'wbr';

export type BlockTypographyResponsiveProps = Pick<
  ResponsiveProps,
  | 'textAlign'
  | 'wordBreak'
  | 'display'
  | 'margin'
  | 'marginBlock'
  | 'maxWidth'
  | 'width'
  | 'minWidth'
>;

export type InlineTypographyResponsiveProps = Pick<
  BlockTypographyResponsiveProps,
  'wordBreak' | 'textAlign' | 'marginBlock'
> & {
  display?: ExtractStrict<
    ResponsiveProps['display'],
    'block' | 'inline' | 'inline-block'
  >;
};

export interface BaseTypographyProps {
  /**Tekstfarge fra utvalget eller custom. **OBS!** Bruk farger fra `@dds-design-tokens` med navn i kebab-case, f.eks. `text-subtle`. */
  color?: TextColor;
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa.
   * Brukes hovedsakelig i artikler og lignende.
   * **OBS!** har forskjellig virkning på ulike typografityper.
   * `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens label får margin topp og bunn.
   * */
  withMargins?: boolean;
}

export interface CommonInlineTypographyProps
  extends BaseTypographyProps, InlineTypographyResponsiveProps {}
export interface CommonBlockTypographyProps
  extends BaseTypographyProps, BlockTypographyResponsiveProps {}

export type TypographyComponentProps = CommonBlockTypographyProps & {
  /**Setter `bold` styling. */
  bold?: boolean;
  /**Setter `italic` styling. */
  italic?: boolean;
  /**Setter en linje under. */
  underline?: boolean;
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
};
