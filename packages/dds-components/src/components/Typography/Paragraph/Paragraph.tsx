import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type CommonBlockTypographyProps,
  TG_BODY_TYPES,
  TG_LEAD_TYPES,
  Typography,
} from '../Typography';

export const TG_PARAGRAPH_TYPES = [...TG_BODY_TYPES, ...TG_LEAD_TYPES] as const;
type TypographyParagraphType = (typeof TG_PARAGRAPH_TYPES)[number];

export type ParagraphProps = BaseComponentPropsWithChildren<
  HTMLParagraphElement,
  {
    /** Spesifiserer typografistil basert på utvalget for brødtekst og ingress.
     * @default 'body-long-medium'
     */
    typographyType?: TypographyParagraphType;
  } & CommonBlockTypographyProps
>;

export const Paragraph = ({
  id,
  className,
  style,
  htmlProps,
  children,
  typographyType = 'body-long-medium',
  ...rest
}: ParagraphProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      typographyType={typographyType}
    >
      {children}
    </Typography>
  );
};

Paragraph.displayName = 'Paragraph';
