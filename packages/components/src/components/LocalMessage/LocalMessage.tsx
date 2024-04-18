import { type Property } from 'csstype';
import { forwardRef, useState } from 'react';

import styles from './LocalMessage.module.css';
import {
  type BaseComponentPropsWithChildren,
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
import typographyStyles from '../Typography/typographyStyles.module.css';

const purposeVariants: {
  [k in LocalMessagePurpose]: {
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
  success: {
    icon: CheckCircledIcon,
  },
  tips: {
    icon: TipIcon,
  },
};

export type LocalMessagePurpose =
  | 'info'
  | 'warning'
  | 'danger'
  | 'success'
  | 'tips';

export type LocalMessageLayout = 'horisontal' | 'vertical';

export type LocalMessageProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Meldingen som vises til brukeren. Brukes kun når meldingen er string. */
    message?: string;
    /**Formålet med meldingen. Påvirker styling. */
    purpose?: LocalMessagePurpose;
    /** Indikerer om meldingen skal være lukkbar.*/
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
    /**Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`. */
    layout?: LocalMessageLayout;
    /**Custom bredde ved behov. */
    width?: Property.Width;
  }
>;

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
  (props, ref) => {
    const {
      message,
      purpose = 'info',
      closable,
      onClose,
      width,
      layout = 'horisontal',
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const [isClosed, setClosed] = useState(false);

    if (isClosed) {
      return <></>;
    }

    return (
      <div
        ref={ref}
        {...getBaseHTMLProps(
          id,
          cn(
            className,
            typographyStyles['body-sans-02'],
            styles.container,
            styles[`container--${layout}`],
            closable && styles[`container--${layout}--closable`],
            styles[`container--${purpose}`],
          ),
          htmlProps,
          rest,
        )}
        style={{ ...htmlProps?.style, width }}
      >
        <Icon
          icon={purposeVariants[purpose].icon}
          className={styles.container__icon}
        />
        <div className={styles.container__text}>
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
            className={styles.container__button}
          />
        )}
      </div>
    );
  },
);

LocalMessage.displayName = 'LocalMessage';
