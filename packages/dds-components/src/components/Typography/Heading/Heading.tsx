import { type ElementType, type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type BaseTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';

const getHeadingElement = (level: HeadingLevel): ElementType => `h${level}`;

const getDefaultTypographyType = (h: ElementType): TypographyHeadingType => {
  switch (h) {
    case 'h1':
      return 'headingXlarge';
    case 'h2':
      return 'headingLarge';
    case 'h3':
      return 'headingMedium';
    case 'h4':
      return 'headingSmall';
    case 'h5':
      return 'headingXsmall';
    case 'h6':
      return 'headingXxsmall';
    default:
      return 'headingXlarge';
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
  } & BaseTypographyProps,
  Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>
>;

export const Heading = ({
  id,
  className,
  htmlProps,
  children,
  typographyType,
  level,
  ...rest
}: HeadingProps) => {
  const headingElement: ElementType = getHeadingElement(level);

  const standardTypographyType =
    typographyType ?? getDefaultTypographyType(headingElement);

  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      typographyType={standardTypographyType}
      as={headingElement}
    >
      {children}
    </Typography>
  );
};

Heading.displayName = 'Heading';
