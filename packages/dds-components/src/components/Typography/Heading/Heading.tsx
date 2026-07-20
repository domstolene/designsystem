import { type ElementType } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn, optAttr } from '../../../utils';
import {
  type CommonBlockTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';
import styles from '../typographyStyles.module.css';

const getHeadingElement = (level: HeadingLevel): ElementType => `h${level}`;

const getDefaultTypographyType = (h: ElementType): TypographyHeadingType => {
  switch (h) {
    case 'h1':
      return 'heading-xlarge';
    case 'h2':
      return 'heading-large';
    case 'h3':
      return 'heading-medium';
    case 'h4':
      return 'heading-small';
    case 'h5':
      return 'heading-xsmall';
    case 'h6':
      return 'heading-xxsmall';
    default:
      return 'heading-xlarge';
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
    /**Setter standard spacing for `<Heading>` som er over et inputelement. */
    withMarginsOverInput?: boolean;
  } & CommonBlockTypographyProps
>;

export const Heading = ({
  id,
  className,
  style,
  htmlProps,
  children,
  typographyType,
  level,
  withMargins,
  withMarginsOverInput,
  ...rest
}: HeadingProps) => {
  const headingElement: ElementType = getHeadingElement(level);

  const standardTypographyType =
    typographyType ?? getDefaultTypographyType(headingElement);

  return (
    <Typography
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          withMarginsOverInput && styles['heading--margins-over-input'],
        ),
        style,
        htmlProps,
        rest,
      )}
      typographyType={standardTypographyType}
      as={headingElement}
      withMargins={optAttr(withMargins || withMarginsOverInput)}
    >
      {children}
    </Typography>
  );
};

Heading.displayName = 'Heading';
