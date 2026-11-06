import { type ReactNode, useState } from 'react';

import styles from './MessageBase.module.css';
import { useTranslation } from '../../../i18n';
import { commonTexts } from '../../../i18n/commonTexts';
import {
  type BaseComponentProps,
  createPurposes,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Button } from '../../Button';
import { Icon, type SvgIcon } from '../../Icon';
import {
  CheckCircledIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  TipIcon,
  WarningIcon,
} from '../../Icon/icons';
import { Grid, GridChild } from '../../layout';
import { type ResponsiveGridProps } from '../../layout/common/Responsive.types';
import { Heading, type HeadingLevel } from '../../Typography';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export const MESSAGE_PURPOSES = createPurposes(
  'info',
  'success',
  'warning',
  'danger',
  'tips',
);

export type MessagePurpose = (typeof MESSAGE_PURPOSES)[number];

const icons: Record<MessagePurpose, SvgIcon> = {
  info: InfoIcon,
  danger: ErrorIcon,
  warning: WarningIcon,
  success: CheckCircledIcon,
  tips: TipIcon,
};

export interface CommonMessageProps {
  /**Melding. */
  children?: ReactNode;
  /** Indikerer om meldingen skal være lukkbar.*/
  closable?: boolean;
  /**Ekstra logikk å kjøre når meldingen lukkes. */
  onClose?: () => void;
  /**Overskrift for meldingen. */
  heading?: string;
  /**Nivå for overskriften.
   * @default 2
   */
  headingLevel?: Exclude<HeadingLevel, '1'>;
}

type MessageBaseProps<TLayout extends string> = BaseComponentProps<
  HTMLDivElement,
  CommonMessageProps & {
    purpose?: MessagePurpose;
    containerClassName?: string;
    gridLayout: TLayout;
    containerGridTemplateStyles: Record<TLayout, Partial<ResponsiveGridProps>>;
  } & Pick<
      ResponsiveGridProps,
      'width' | 'padding' | 'rowGap' | 'columnGap' | 'marginInline'
    >
>;

export const MessageBase = <TLayout extends string>({
  children,
  id,
  className,
  style,
  htmlProps,
  purpose = 'info',
  heading,
  closable,
  onClose,
  gridLayout,
  headingLevel = 2,
  containerGridTemplateStyles,
  ...rest
}: MessageBaseProps<TLayout>) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(true);

  const basePurpose = purpose === 'tips' ? 'info' : purpose;
  const purposeStyles = {
    '--dds-color-message-border': `var(--dds-color-border-${basePurpose})`,
    '--dds-color-message-background': `var(--dds-color-surface-${basePurpose}-default)`,
    '--dds-color-message-icon': `var(--dds-color-icon-on-${basePurpose}-default)`,
  };

  return isOpen ? (
    <Grid
      {...getBaseHTMLProps(
        id,
        cn(className, typographyStyles['body-short-medium'], styles.container),
        { ...style, ...purposeStyles },
        htmlProps,
        rest,
      )}
      marginInline="x0"
      {...containerGridTemplateStyles[gridLayout]}
    >
      <GridChild
        as={Icon}
        gridArea="icon"
        icon={icons[purpose]}
        iconSize="component"
      />
      {heading && (
        <GridChild
          as={Heading}
          level={headingLevel}
          typographyType="heading-small"
          gridArea="heading"
        >
          {heading}
        </GridChild>
      )}
      <GridChild gridArea="text">{children}</GridChild>
      {closable && (
        <GridChild gridArea="close-btn">
          <Button
            icon={CloseIcon}
            purpose="tertiary"
            onClick={() => {
              setOpen(false);
              onClose?.();
            }}
            size="xsmall"
            aria-label={t(commonTexts.closeMessage)}
          />
        </GridChild>
      )}
    </Grid>
  ) : null;
};

MessageBase.displayName = 'MessageBase';
