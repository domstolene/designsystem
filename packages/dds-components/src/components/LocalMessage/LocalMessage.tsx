import { type ReactNode, useState } from 'react';

import styles from './LocalMessage.module.css';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import {
  type BaseComponentProps,
  createPurposes,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Icon, type SvgIcon } from '../Icon';
import {
  CheckCircledIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  TipIcon,
  WarningIcon,
} from '../Icon/icons';
import { Grid, GridChild, type ResponsiveProps } from '../layout';
import { type ResponsiveGridProps } from '../layout/common/Responsive.types';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const L_MESSAGE_PURPOSES = createPurposes(
  'info',
  'success',
  'warning',
  'danger',
  'tips',
);

export type LocalMessagePurpose = (typeof L_MESSAGE_PURPOSES)[number];

const icons: Record<LocalMessagePurpose, SvgIcon> = {
  info: InfoIcon,
  danger: ErrorIcon,
  warning: WarningIcon,
  success: CheckCircledIcon,
  tips: TipIcon,
};

export type LocalMessageLayout = 'horisontal' | 'vertical';

export type LocalMessageProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Innhold i meldingen. */
    children?: ReactNode;
    /**Formålet med meldingen. Påvirker styling.
     * @default "info"
     */
    purpose?: LocalMessagePurpose;
    /** Indikerer om meldingen skal være lukkbar.*/
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
    /**Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`.
     * @default "horisontal"
     */
    layout?: LocalMessageLayout;
  } & Pick<ResponsiveProps, 'width'>
>;

export const LocalMessage = ({
  purpose = 'info',
  closable,
  onClose,
  width,
  layout = 'horisontal',
  children,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: LocalMessageProps) => {
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState(true);

  type GridLayout =
    LocalMessageLayout | 'horisontal-closable' | 'vertical-closable';

  const gridLayout: GridLayout = closable ? `${layout}-closable` : layout;

  const containerGridTemplateStyles: Record<
    GridLayout,
    Partial<ResponsiveGridProps>
  > = {
    horisontal: {
      gridTemplateAreas: `"icon text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'horisontal-closable': {
      gridTemplateAreas: `"icon text close-btn"`,
      gridTemplateColumns: 'min-content 1fr min-content',
    },
    vertical: {
      gridTemplateAreas: `"icon" "text"`,
      gridTemplateColumns: '1fr',
    },
    'vertical-closable': {
      gridTemplateAreas: `"icon close-btn" "text text"`,
      gridTemplateColumns: '1fr min-content',
    },
  };

  return isOpen ? (
    <Grid
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles['body-short-medium'],
          styles.container,
          styles[`container--${purpose}`],
        ),
        style,
        htmlProps,
        rest,
      )}
      width={width}
      padding="x0.75 x0.75 x0.75 x0.5"
      rowGap="x0.5"
      columnGap="x0.5"
      marginInline="x0"
      {...containerGridTemplateStyles[gridLayout]}
    >
      <GridChild
        as={Icon}
        gridArea="icon"
        iconSize="component"
        icon={icons[purpose]}
        color={`var(--dds-color-icon-on-${purpose === 'tips' ? 'info' : purpose}-default)`}
      />
      <GridChild gridArea="text">{children}</GridChild>
      {closable && (
        <GridChild
          as={Button}
          gridArea="close-btn"
          icon={CloseIcon}
          purpose="tertiary"
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
          size="xsmall"
          aria-label={t(commonTexts.closeMessage)}
        />
      )}
    </Grid>
  ) : null;
};

LocalMessage.displayName = 'LocalMessage';
