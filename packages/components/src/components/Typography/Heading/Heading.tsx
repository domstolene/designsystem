import { type ElementType, forwardRef } from 'react';

import { ScreenSize, useScreenSize } from '../../../hooks';
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

const scaledTypographyType = (
  type: TypographyHeadingType,
): TypographyHeadingType => {
  switch (type) {
    case 'headingXxlarge':
      return 'headingXlarge';
    case 'headingXlarge':
      return 'headingLarge';
    case 'headingLarge':
      return 'headingMedium';
    case 'headingMedium':
      return 'headingSmall';

    default:
      return type;
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

    const standardTypographyType =
      typographyType ?? getDefaultTypographyType(headingElement);

    const screenSize = useScreenSize();
    const isSmallScreen = screenSize <= ScreenSize.Small;

    const headingProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType: isSmallScreen
        ? scaledTypographyType(standardTypographyType)
        : standardTypographyType,
      as: headingElement,
      ref,
    };

    return <Typography {...headingProps}>{children}</Typography>;
  },
);

Heading.displayName = 'Heading';
