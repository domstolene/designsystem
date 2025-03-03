import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type BaseTypographyProps,
  Typography,
  type TypographyBodyType,
  type TypographyLeadType,
} from '../Typography';

export type ParagraphProps = BaseComponentPropsWithChildren<
  HTMLParagraphElement,
  {
    /**Spesifiserer typografistil basert på utvalget for brødtekst og ingress.  */
    typographyType?: TypographyBodyType | TypographyLeadType;
  } & BaseTypographyProps
>;

export const Paragraph = ({
  id,
  className,
  htmlProps,
  children,
  typographyType = 'bodyMedium',
  ...rest
}: ParagraphProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      typographyType={typographyType}
    >
      {children}
    </Typography>
  );
};

Paragraph.displayName = 'Paragraph';
