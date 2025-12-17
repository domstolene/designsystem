import { type HTMLAttributes } from 'react';

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
    /** Spesifiserer typografistil basert på utvalget for brødtekst og ingress.
     * @default 'BodyLongMedium'
     */
    typographyType?: TypographyBodyType | TypographyLeadType;
  } & BaseTypographyProps,
  Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>
>;

export const Paragraph = ({
  id,
  className,
  style,
  htmlProps,
  children,
  typographyType = 'bodyLongMedium',
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
