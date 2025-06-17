import { useState } from 'react';

import styles from './GlobalMessage.module.css';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Icon, type SvgIcon } from '../Icon';
import { CloseIcon, ErrorIcon, InfoIcon, WarningIcon } from '../Icon/icons';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const icons: Record<GlobalMessagePurpose, SvgIcon> = {
  info: InfoIcon,
  danger: ErrorIcon,
  warning: WarningIcon,
};

export type GlobalMessagePurpose = 'info' | 'warning' | 'danger';

export type GlobalMessageProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Meldingen som vises til brukeren. Brukes kun når meldingen er en `string`. */
    message?: string;
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
  message,
  purpose = 'info',
  closable,
  onClose,
  children,
  id,
  className,
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
          typographyStyles['body-medium'],
        ),
        htmlProps,
        rest,
      )}
    >
      <div
        className={cn(styles.content, closable && styles['content--closable'])}
      >
        <Icon icon={icons[purpose]} className={styles.icon} />
        {children ?? <span>{message}</span>}
      </div>

      {closable && (
        <Button
          icon={CloseIcon}
          purpose="tertiary"
          onClick={() => {
            setClosed(true);
            onClose && onClose();
          }}
          size="small"
          aria-label={t(commonTexts.closeMessage)}
        />
      )}
    </div>
  ) : null;
};

GlobalMessage.displayName = 'GlobalMessage';
