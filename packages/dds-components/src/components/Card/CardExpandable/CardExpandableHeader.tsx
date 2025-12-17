import { type Properties, type Property } from 'csstype';
import { type ButtonHTMLAttributes } from 'react';

import styles from './CardExpandable.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { AnimatedChevronUpDownIcon, StylelessButton } from '../../helpers';
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
        <div className={(baseStyles.header__content, styles.header__content)}>
          {children}
          <AnimatedChevronUpDownIcon
            className={styles['header-container__chevron']}
            isUp={isExpanded}
          />
        </div>
      </div>
    </StylelessButton>
  );
};

CardExpandableHeader.displayName = 'CardExpandableHeader';
