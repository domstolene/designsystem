import { type ReactNode, useState } from 'react';

import styles from './GlobalMessage.module.css';
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
import { CloseIcon, ErrorIcon, InfoIcon, WarningIcon } from '../Icon/icons';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const G_MESSAGE_PURPOSES = createPurposes('info', 'warning', 'danger');

export type GlobalMessagePurpose = (typeof G_MESSAGE_PURPOSES)[number];

export const icons: Record<GlobalMessagePurpose, SvgIcon> = {
  info: InfoIcon,
  danger: ErrorIcon,
  warning: WarningIcon,
};

export type GlobalMessageProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Melding. */
    children?: ReactNode;
    /**Formålet med meldingen. Påvirker styling.
     * @default "info"
     */
    purpose?: GlobalMessagePurpose;
    /**Indikerer om meldingen skal være lukkbar. */
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
  }
>;

export const GlobalMessage = ({
  purpose = 'info',
  closable,
  onClose,
  children,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: GlobalMessageProps) => {
  const { t } = useTranslation();
  const [isClosed, setClosed] = useState(false);

  return !isClosed ? (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.container,
          styles[`container--${purpose}`],
          typographyStyles['body-short-medium'],
        ),
        style,
        htmlProps,
        rest,
      )}
    >
      <div
        className={cn(styles.content, closable && styles['content--closable'])}
      >
        <Icon icon={icons[purpose]} className={styles.icon} />
        {children}
      </div>

      {closable && (
        <Button
          icon={CloseIcon}
          purpose="tertiary"
          onClick={() => {
            setClosed(true);
            onClose?.();
          }}
          size="small"
          aria-label={t(commonTexts.closeMessage)}
        />
      )}
    </div>
  ) : null;
};

GlobalMessage.displayName = 'GlobalMessage';
