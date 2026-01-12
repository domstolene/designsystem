import { type ButtonHTMLAttributes } from 'react';

import styles from './Accordion.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import { useAccordionContext } from '../helpers/AccordionBase';
import baseStyles from '../helpers/AccordionBase/AccordionBase.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { AnimatedChevronUpDownIcon } from '../Icon/icons/animated';
import { Box } from '../layout';
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
  style,
  htmlProps,
  typographyType = 'headingMedium',
  bold,
  ...rest
}: AccordionHeaderProps) => {
  const { isExpanded, headerProps } = useAccordionContext();
  const { id, ...restHeaderProps } = headerProps ?? {};
  const iconState = isExpanded ? 'up' : 'down';

  return (
    <Box
      as={StylelessButton}
      padding="x1 x1.5 x1 x1"
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
    >
      <div
        className={cn(
          baseStyles.header__content,
          typographyStyles[getTypographyCn(typographyType)],
          bold && typographyStyles.bold,
        )}
      >
        <Icon
          icon={AnimatedChevronUpDownIcon}
          iconSize="component"
          className={styles.chevron}
          iconState={iconState}
        />
        {children}
      </div>
    </Box>
  );
};

AccordionHeader.displayName = 'AccordionHeader';
