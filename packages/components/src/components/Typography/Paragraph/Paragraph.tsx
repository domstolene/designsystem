import { forwardRef } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  Typography,
  BaseTypographyProps,
  TypographyBodyType,
  TypographyLeadType,
} from '../Typography';

export type ParagraphProps = BaseComponentPropsWithChildren<
  HTMLParagraphElement,
  {
    /**Spesifiserer typografistil basert på utvalget for brødtekst og ingress.  */
    typographyType?: TypographyBodyType | TypographyLeadType;
  } & BaseTypographyProps
>;

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      children,
      typographyType = 'bodySans02',
      ...rest
    } = props;

    const paragraphProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType,
      ref,
    };

    return <Typography {...paragraphProps}>{children}</Typography>;
  }
);

Paragraph.displayName = 'Paragraph';
