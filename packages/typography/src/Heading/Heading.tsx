import { ElementType, forwardRef } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import {
  TypographyHeadingType,
  BaseTypographyProps,
  Typography,
} from '../Typography';

const getHeadingElement = (level: HeadingLevel): ElementType => `h${level}`;

const getDefaultTypographyType = (h: ElementType): TypographyHeadingType => {
  switch (h) {
    case 'h1':
      return 'headingSans06';
    case 'h2':
      return 'headingSans05';
    case 'h3':
      return 'headingSans04';
    case 'h4':
      return 'headingSans03';
    case 'h5':
      return 'headingSans02';
    case 'h6':
      return 'headingSans01';
    default:
      return 'headingSans06';
  }
};

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentPropsWithChildren<
  HTMLHeadingElement,
  {
    /**Nivå på overskriften. Komponenten returnerer HTML heading element med dette nivået med default styling. */
    level: HeadingLevel;
    /**Spesifiserer typografistil basert på utvalget for HTML heading elementer.  */
    typographyType?: TypographyHeadingType;
  } & BaseTypographyProps
>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      children,
      typographyType,
      level,
      ...rest
    } = props;

    const headingElement: ElementType = getHeadingElement(level);

    const headingProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType: typographyType
        ? typographyType
        : getDefaultTypographyType(headingElement),
      as: headingElement,
      ref,
    };

    return <Typography {...headingProps}>{children}</Typography>;
  },
);

Heading.displayName = 'Heading';