type TypographyBodySansType =
  | 'bodySans01'
  | 'bodySans02'
  | 'bodySans03'
  | 'bodySans04';

type TypographyBodySerifType =
  | 'bodySerif01'
  | 'bodySerif02'
  | 'bodySerif03'
  | 'bodySerif04';

export type TypographyBodyType =
  | TypographyBodySansType
  | TypographyBodySerifType;

type TypographyHeadingType =
  | 'headingSans01'
  | 'headingSans02'
  | 'headingSans03'
  | 'headingSans04'
  | 'headingSans05'
  | 'headingSans06'
  | 'headingSans07'
  | 'headingSans08';

type TypographyLeadType =
  | 'leadSans01'
  | 'leadSans02'
  | 'leadSans03'
  | 'leadSans04'
  | 'leadSans05';

type TypographySupportingType =
  | 'supportingStyleInputText01'
  | 'supportingStyleInputText02'
  | 'supportingStyleInputText03'
  | 'supportingStyleHelperText01'
  | 'supportingStylePlaceholderText01'
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

export type TextColor =
  | 'interactive'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'onLight'
  | 'onDark'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'gray9';
