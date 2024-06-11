import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import { type Properties, type Property } from 'csstype';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './CardAccordion.module.css';
import { useCardAccordionContext } from './CardAccordionContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { AnimatedChevronUpDown } from '../../helpers';
import { focusable } from '../../helpers/styling/focus.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { type StaticTypographyType, getTypographyCn } from '../../Typography';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type CardAccordionHeaderProps = Omit<
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

export const CardAccordionHeader = forwardRef<
  HTMLButtonElement,
  CardAccordionHeaderProps
>((props, ref) => {
  const {
    children,
    className,
    htmlProps,
    padding,
    typographyType = 'headingSans03',
    bold,
    ...rest
  } = props;

  const {
    headerId: id,
    bodyId,
    toggleExpanded,
    isExpanded,
  } = useCardAccordionContext();

  const containerStyleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-header-container-padding' as any]:
      padding ??
      'var(--dds-spacing-x1) var(--dds-spacing-x0-75) var(--dds-spacing-x1) var(--dds-spacing-x1-5)',
  };

  return (
    <button
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['header-button'],
          utilStyles['normalize-button'],
          utilStyles['remove-button-styling'],
          focusable,
        ),
        htmlProps,
        rest,
      )}
      onClick={toggleExpanded}
      ref={ref}
      aria-controls={bodyId}
      aria-expanded={isExpanded}
      type="button"
    >
      <div
        style={containerStyleVariables}
        className={cn(
          styles['header-container'],
          typographyStyles[getTypographyCn(typographyType)],
          bold && typographyStyles.bold,
        )}
      >
        <div className={styles.header__content}>{children}</div>
        <span className={styles.header__chevron}>
          <AnimatedChevronUpDown
            width={ddsTokens.DdsIconSizeMedium}
            height={ddsTokens.DdsSpacingX05}
            isUp={isExpanded}
          />
        </span>
      </div>
    </button>
  );
});

CardAccordionHeader.displayName = 'CardAccordionHeader';
