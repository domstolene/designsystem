import { type ReactNode, useId, useState } from 'react';

import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button, type ButtonProps } from '../Button';
import { ExpandIcon } from '../Icon/icons';
import {
  type Breakpoint,
  HStack,
  Paper,
  type ResponsiveProps,
  ShowHide,
  VStack,
} from '../layout';
import { Heading } from '../Typography';
import {
  CookieBannerCheckbox,
  type CookieBannerCheckboxProps,
} from './CookieBannerCheckbox';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { styleUpToBreakpoint } from '../layout/common/utils';

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
    /**Brekkpunkt for sammentrukket variant; Brukes på siden med detaljer om informasjonskapsler. */
    collapsedBreakpoint?: Breakpoint;
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
  maxHeight = 'calc(100vh - 100px)',
  width = 'fit-content',
  children,
  collapsedBreakpoint,
  ...rest
}: CookieBannerProps) {
  const { t } = useTranslation();

  const hasBp = !!collapsedBreakpoint;
  const [isCollapsedOnBreakpoint, setIsCollapsedOnBreakpoint] = useState(hasBp);

  const generatedId = useId();
  const headingId =
    headerText && (id ?? `cookie-banner-${generatedId}-heading`);

  const heading = headerText ? (
    <Heading level={2} typographyType="headingMedium" id={headingId}>
      {headerText}
    </Heading>
  ) : (
    ''
  );

  return (
    <Paper
      {...getBaseHTMLProps(
        id,
        cn(className, utilStyles.scrollbar, utilStyles['scrollable-y']),
        htmlProps,
        rest,
      )}
      role="region"
      aria-labelledby={headingId}
      padding={styleUpToBreakpoint('x1', 'sm', 'x1.5')}
      width={width}
      maxHeight={maxHeight}
      border="border-default"
      background="brand-tertiary-medium"
    >
      <VStack maxWidth="70ch" gap="x1">
        {hasBp && isCollapsedOnBreakpoint ? (
          <HStack alignItems="center" justifyContent="space-between" gap="x1">
            {heading}
            <ShowHide
              as={Button}
              showBelow={collapsedBreakpoint}
              aria-label={t(texts.expandConsent)}
              purpose="tertiary"
              icon={ExpandIcon}
              onClick={() => setIsCollapsedOnBreakpoint(false)}
              aria-expanded="false"
            />
          </HStack>
        ) : (
          heading
        )}
        <VStack
          gap="x1"
          hideBelow={isCollapsedOnBreakpoint ? collapsedBreakpoint : undefined}
        >
          {children}
          {description && <div>{description}</div>}
          {checkboxes && (
            <VStack gap="x1">
              {checkboxes.map((props, index) => (
                <CookieBannerCheckbox {...props} key={index} />
              ))}
            </VStack>
          )}
          {buttons && (
            <HStack
              gap={styleUpToBreakpoint('x1', 'sm', 'x1.5')}
              flexWrap="wrap"
              paddingBlock="x0.25 0"
            >
              {buttons.map((props, i) => (
                <Button {...props} size="medium" purpose="secondary" key={i} />
              ))}
            </HStack>
          )}
        </VStack>
      </VStack>
    </Paper>
  );
}

CookieBanner.displayName = 'CookieBanner';

const texts = createTexts({
  expandConsent: {
    nb: 'Utvid samtykke for bruk av informasjonskapsler',
    no: 'Utvid samtykke for bruk av informasjonskapsler',
    nn: 'Utvid samtykke for bruk av informasjonskapslar',
    en: 'Expand consent for the use of cookies',
  },
});
