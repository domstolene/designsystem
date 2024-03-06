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
      return 'headingSans06';
    case 'h2':
      return 'headingSans04';
    case 'h3':
      return 'headingSans03';
    case 'h4':
      return 'headingSans02';
    case 'h5':
      return 'headingSans01';
    case 'h6':
      return 'headingSans01';
    default:
      return 'headingSans06';
  }
};

const scaledTypographyType = (
  type: TypographyHeadingType,
): TypographyHeadingType => {
  switch (type) {
    case 'headingSans08':
      return 'headingSans07';
    case 'headingSans07':
      return 'headingSans06';
    case 'headingSans06':
      return 'headingSans05';
    case 'headingSans05':
      return 'headingSans04';
    case 'headingSans04':
      return 'headingSans03';
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
