import { type CSSProperties, type ElementType } from 'react';

import { type TextColor } from '../../../utils/color';

export type TypographyBodyType =
  | 'bodyShortXsmall'
  | 'bodyShortSmall'
  | 'bodyShortMedium'
  | 'bodyShortLarge'
  | 'bodyLongXsmall'
  | 'bodyLongSmall'
  | 'bodyLongMedium'
  | 'bodyLongLarge';

export type TypographyHeadingType =
  | 'headingXxsmall'
  | 'headingXsmall'
  | 'headingSmall'
  | 'headingMedium'
  | 'headingLarge'
  | 'headingXlarge'
  | 'headingXxlarge';

export type TypographyLeadType = 'leadMedium';

export type TypographyAnchorType = 'a';

export type TypographyLabelType = 'labelMedium';

export type OtherTypographyType =
  | TypographyHeadingType
  | TypographyBodyType
  | TypographyLeadType;

export type TypographyType =
  | TypographyAnchorType
  | TypographyLabelType
  | OtherTypographyType;

export type StaticTypographyType = OtherTypographyType | TypographyLabelType;

export type HyphenTypographyType =
  | 'body-short-xsmall'
  | 'body-short-small'
  | 'body-short-medium'
  | 'body-short-large'
  | 'body-long-xsmall'
  | 'body-long-small'
  | 'body-long-medium'
  | 'body-long-large'
  | 'heading-xxsmall'
  | 'heading-xsmall'
  | 'heading-small'
  | 'heading-medium'
  | 'heading-large'
  | 'heading-xlarge'
  | 'heading-xxlarge'
  | 'lead-medium'
  | 'a'
  | 'label-medium';

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

export interface BaseTypographyProps {
  /**Tekstfarge fra utvalget eller custom. **OBS!** Bruk farger fra `@dds-design-tokens` med navn i kebab-case, f.eks. `text-subtle`. */
  color?: TextColor;
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa.
   * Brukes hovedsakelig i artikler og lignende.
   * **OBS!** har forskjellig virkning på ulike typografityper.
   * `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens label får margin topp og bunn.
   * */
  withMargins?: boolean;
  /**HTML style. */
  style?: CSSProperties;
}

export type TypographyComponentProps = BaseTypographyProps & {
  /**Setter `bold` styling. */
  bold?: boolean;
  /**Setter `italic` styling. */
  italic?: boolean;
  /**Setter en linje under. */
  underline?: boolean;
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
};
