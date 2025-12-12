import { type Properties, type Property } from 'csstype';
import { type ButtonHTMLAttributes } from 'react';

import styles from './CardExpandable.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { AnimatedChevronUpDown, StylelessButton } from '../../helpers';
import { useAccordionContext } from '../../helpers/AccordionBase';
import baseStyles from '../../helpers/AccordionBase/AccordionBase.module.css';
import { focusable } from '../../helpers/styling/focus.module.css';
import { type StaticTypographyType, getTypographyCn } from '../../Typography';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type CardExpandableHeaderProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLButtonElement,
    {
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
      /**Overskriver default teksttype. */
      typographyType?: StaticTypographyType;
      /**Angir om teksten skal være i "bold"-format. */
      bold?: boolean;
    },
    ButtonHTMLAttributes<HTMLButtonElement>
  >,
  'id'
>;

export const CardExpandableHeader = ({
  children,
  className,
  style,
  htmlProps,
  padding,
  typographyType = 'headingLarge',
  bold,
  ...rest
}: CardExpandableHeaderProps) => {
  const { isExpanded, headerProps } = useAccordionContext();

  const containerStyleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-header-container-padding' as any]:
      padding ??
      'var(--dds-spacing-x1) var(--dds-spacing-x0-75) var(--dds-spacing-x1) var(--dds-spacing-x1-5)',
  };

  const { id, ...restHeaderProps } = headerProps ?? {};

  return (
    <StylelessButton
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['header-button'],
          baseStyles['header-button'],
          focusable,
        ),
        style,
        htmlProps,
        rest,
      )}
      {...restHeaderProps}
      type="button"
    >
      <div
        style={containerStyleVariables}
        className={cn(
          baseStyles['header-container'],
          styles['header-container'],
          typographyStyles[getTypographyCn(typographyType)],
          bold && typographyStyles.bold,
        )}
      >
        <div className={baseStyles.header__content}>{children}</div>
        <span
          className={cn(
            baseStyles.header__chevron,
            styles['header-container__chevron'],
          )}
        >
          <AnimatedChevronUpDown
            width="var(--dds-icon-size-medium)"
            height="var(--dds-spacing-x0-5)"
            isUp={isExpanded}
          />
        </span>
      </div>
    </StylelessButton>
  );
};

CardExpandableHeader.displayName = 'CardExpandableHeader';
