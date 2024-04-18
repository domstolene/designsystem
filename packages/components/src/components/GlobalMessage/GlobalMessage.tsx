import { forwardRef, useState } from 'react';

import styles from './GlobalMessage.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Icon, type SvgIcon } from '../Icon';
import { CloseIcon, ErrorIcon, InfoIcon, WarningIcon } from '../Icon/icons';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const purposeVariants: {
  [k in GlobalMessagePurpose]: {
    icon: SvgIcon;
  };
} = {
  info: {
    icon: InfoIcon,
  },
  danger: {
    icon: ErrorIcon,
  },
  warning: {
    icon: WarningIcon,
  },
};

export type GlobalMessagePurpose = 'info' | 'warning' | 'danger';

export type GlobalMessageProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Meldingen som vises til brukeren. Brukes kun når meldingen er en `string`. */
    message?: string;
    /**Formålet med meldingen. Påvirker styling. */
    purpose?: GlobalMessagePurpose;
    /**Indikerer om meldingen skal være lukkbar. */
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
  }
>;

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
  (props, ref) => {
    const {
      message,
      purpose = 'info',
      closable,
      onClose,
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const [isClosed, setClosed] = useState(false);

    return !isClosed ? (
      <div
        ref={ref}
        {...getBaseHTMLProps(
          id,
          cn(
            className,
            styles.container,
            styles[`container--${purpose}`],
            typographyStyles['body-sans-02'],
          ),
          htmlProps,
          rest,
        )}
      >
        <div
          className={cn(
            styles.content,
            closable && styles['content--closable'],
          )}
        >
          <Icon icon={purposeVariants[purpose].icon} className={styles.icon} />
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
            aria-label="Lukk melding"
          />
        )}
      </div>
    ) : null;
  },
);

GlobalMessage.displayName = 'GlobalMessage';
