import { type ReactNode, useState } from 'react';

import styles from './GlobalMessage.module.css';
import { HStack } from '../..';
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
    <HStack
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
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="0 x1"
    >
      <HStack
        alignItems="center"
        paddingBlock="x0.75"
        paddingInline={closable ? 'x0 x0.75' : ' x0 x1.5'}
      >
        <Icon
          icon={icons[purpose]}
          iconSize="component"
          className={styles.icon}
        />
        {children}
      </HStack>

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
    </HStack>
  ) : null;
};

GlobalMessage.displayName = 'GlobalMessage';
