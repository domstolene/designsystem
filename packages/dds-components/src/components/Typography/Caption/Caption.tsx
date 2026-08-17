import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type CommonBlockTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';

export type CaptionProps = BaseComponentPropsWithChildren<
  HTMLTableCaptionElement,
  {
    /**Typografistil basert på utvalget for HTML heading elementer.
     * @default 'heading-large'
     */
    typographyType?: TypographyHeadingType;
  } & CommonBlockTypographyProps
>;

export const Caption = ({
  typographyType = 'heading-large',
  id,
  className,
  style,
  htmlProps,
  children,
  ...rest
}: CaptionProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      typographyType={typographyType}
      as="caption"
    >
      {children}
    </Typography>
  );
};

Caption.displayName = 'Caption';
