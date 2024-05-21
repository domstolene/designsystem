import {
  type ElementType,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';

import { type TextColor } from '../../../utils/color';

type TypographyBodySansType =
  | 'bodySans01'
  | 'bodySans02'
  | 'bodySans03'
  | 'bodySans04';

export type TypographyBodyType = TypographyBodySansType;

export type TypographyHeadingType =
  | 'headingSans01'
  | 'headingSans02'
  | 'headingSans03'
  | 'headingSans04'
  | 'headingSans05'
  | 'headingSans06'
  | 'headingSans07'
  | 'headingSans08';

export type TypographyLeadType =
  | 'leadSans01'
  | 'leadSans02'
  | 'leadSans03'
  | 'leadSans04'
  | 'leadSans05';

type TypographySupportingType =
  | 'supportingStyleHelperText01'
  | 'supportingStylePlaceholderText01'
  | 'supportingStylePlaceholderText02'
  | 'supportingStylePlaceholderText03'
  | 'supportingStyleTiny01'
  | 'supportingStyleTiny02';

export type AnchorTypographyType = 'a';

export type LabelTypographyType = 'supportingStyleLabel01';

export type OtherTypographyType =
  | TypographyHeadingType
  | TypographyBodyType
  | TypographyLeadType
  | TypographySupportingType;

export type TypographyType =
  | AnchorTypographyType
  | LabelTypographyType
  | OtherTypographyType;

export type StaticTypographyType = OtherTypographyType | LabelTypographyType;

export type HyphenTypographyType =
  | 'body-sans-01'
  | 'body-sans-02'
  | 'body-sans-03'
  | 'body-sans-04'
  | 'heading-sans-01'
  | 'heading-sans-02'
  | 'heading-sans-03'
  | 'heading-sans-04'
  | 'heading-sans-05'
  | 'heading-sans-06'
  | 'heading-sans-07'
  | 'heading-sans-08'
  | 'lead-sans-01'
  | 'lead-sans-02'
  | 'lead-sans-03'
  | 'lead-sans-04'
  | 'lead-sans-05'
  | 'supporting-style-helper-text-01'
  | 'supporting-style-placeholder-text-01'
  | 'supporting-style-placeholder-text-02'
  | 'supporting-style-placeholder-text-03'
  | 'supporting-style-tiny-01'
  | 'supporting-style-tiny-02'
  | 'a'
  | 'supporting-style-label-01';

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

export type BaseTypographyProps = PropsWithChildren<{
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa. Brukes hovedsakelig i artikler og lignende. **OBS!** har forskjellig virkning på ulike typografityper. `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens `supportingStyles` får margin topp og bunn. */
  withMargins?: boolean;
}> &
  Pick<HTMLAttributes<HTMLElement>, 'style'>;

export type TypographyComponentProps = BaseTypographyProps & {
  /**Tekstfarge fra utvalget eller custom. **OBS!** Bruk farger fra `@dds-design-tokens`. */
  color?: TextColor;
  /**Setter `bold` styling. */
  bold?: boolean;
  /**Setter `italic` styling. */
  italic?: boolean;
  /**Setter en linje under. */
  underline?: boolean;
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
};
