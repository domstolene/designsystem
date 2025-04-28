import { type ReactNode } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button, type ButtonProps } from '../Button';
import { HStack, Paper, type ResponsiveProps, VStack } from '../layout';
import { Heading } from '../Typography';
import {
  CookieBannerCheckbox,
  type CookieBannerCheckboxProps,
} from './CookieBannerCheckbox';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { applyResponsiveStyle } from '../layout/common/utils';

export type CookieBannerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Header - kort oppsummering. */
    headerText?: string;
    /**Hovedinnholdet med info rundt informasjonkapsler bruk på siden. Kan inneholde lenker og andre interaktive elementer. */
    description?: ReactNode;
    /**Knapper for ulike nivåer av godkjenning av informasjonskaplser. Layout for knappene håndteres ut av boksen. */
    buttons?: Array<Omit<ButtonProps, 'purpose' | 'size'>>;
    /**Checkboxes for hver type informasjonskapsel som brukes på siden. Layout håndteres ut av boksen. */
    checkboxes?: Array<CookieBannerCheckboxProps>;
  } & Pick<
    ResponsiveProps,
    'position' | 'top' | 'bottom' | 'left' | 'right' | 'width' | 'maxHeight'
  >
>;

export function CookieBanner({
  headerText,
  description,
  buttons,
  checkboxes,
  id,
  className,
  htmlProps,
  'aria-label': ariaLabel = 'Samtykke for bruk av informasjonskapsler',
  maxHeight = 'calc(100vh - 100px)',
  width = 'fit-content',
  children,
  ...rest
}: CookieBannerProps) {
  return (
    <Paper
      {...getBaseHTMLProps(
        id,
        cn(className, utilStyles.scrollbar, utilStyles['scrollable-y']),
        htmlProps,
        rest,
      )}
      role="region"
      aria-label={ariaLabel}
      padding={applyResponsiveStyle('x1', 'sm', 'x1.5')}
      width={width}
      maxHeight={maxHeight}
      border="border-default"
      background="brand-tertiary-medium"
    >
      <VStack maxWidth="70ch" gap="x1">
        {headerText && (
          <Heading level={2} typographyType="headingMedium">
            {headerText}
          </Heading>
        )}
        {children}
        {description && <div>{description}</div>}
        {checkboxes && (
          <VStack gap="x1">
            {checkboxes.map(props => (
              <CookieBannerCheckbox {...props} />
            ))}
          </VStack>
        )}
        {buttons && (
          <HStack
            gap={applyResponsiveStyle('x1', 'sm', 'x1.5')}
            flexWrap="wrap"
            paddingBlock="x0.25 0"
          >
            {buttons.map(props => (
              <Button {...props} size="medium" purpose="secondary" />
            ))}
          </HStack>
        )}
      </VStack>
    </Paper>
  );
}

CookieBanner.displayName = 'CookieBanner';
