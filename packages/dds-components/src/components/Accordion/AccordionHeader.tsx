import { type ButtonHTMLAttributes } from 'react';

import styles from './Accordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { AnimatedChevronUpDown } from '../helpers';
import { useAccordionContext } from '../helpers/AccordionBase';
import baseStyles from '../helpers/AccordionBase/AccordionBase.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { type StaticTypographyType, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type AccordionHeaderProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLButtonElement,
    {
      /**Overskriver default teksttype. */
      typographyType?: StaticTypographyType;
      /**Angir om teksten skal være i "bold"-format. */
      bold?: boolean;
    },
    ButtonHTMLAttributes<HTMLButtonElement>
  >,
  'id'
>;

export const AccordionHeader = ({
  children,
  className,
  htmlProps,
  typographyType = 'headingMedium',
  bold,
  ...rest
}: AccordionHeaderProps) => {
  const { isExpanded, headerProps } = useAccordionContext();
  const { id, ...restHeaderProps } = headerProps;

  return (
    <button
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['header-button'],
          baseStyles['header-button'],
          utilStyles['normalize-button'],
          utilStyles['remove-button-styling'],
          focusable,
          styles['header-container'],
          baseStyles['header-container'],
        ),
        htmlProps,
        rest,
      )}
      {...restHeaderProps}
      type="button"
    >
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
      <div
        className={cn(
          baseStyles.header__content,
          typographyStyles[getTypographyCn(typographyType)],
          bold && typographyStyles.bold,
        )}
      >
        {children}
      </div>
    </button>
  );
};

AccordionHeader.displayName = 'AccordionHeader';
