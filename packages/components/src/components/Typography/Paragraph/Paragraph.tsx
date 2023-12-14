import { forwardRef } from 'react';
import {
  TypographyBodyType,
  TypographyLeadType,
  BaseTypographyProps,
  Typography,
} from '../Typography';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';

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
  },
);

Paragraph.displayName = 'Paragraph';
