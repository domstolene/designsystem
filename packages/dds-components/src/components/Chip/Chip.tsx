import { useState } from 'react';

import styles from './Chip.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils/dom';
import { Button } from '../Button';
import { CloseSmallIcon } from '../Icon/icons';
import { TextOverflowEllipsisInner } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type ChipProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Teksten som vises i komponenten. */
    children?: string;
    /** Ekstra logikk når `<Chip>` lukkes. */
    onClose?: () => void;
  }
>;

export const Chip = ({
  children,
  onClose,
  id,
  className,
  htmlProps = {},
  ...rest
}: ChipProps) => {
  const { t } = useTranslation();
  const { 'aria-label': ariaLabel, ...restHTMLprops } = htmlProps;

  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(false);
    onClose?.();
  };

  return isOpen ? (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        restHTMLprops,
        rest,
      )}
    >
      <TextOverflowEllipsisInner className={cn(typographyStyles['body-small'])}>
        {children}
      </TextOverflowEllipsisInner>
      <Button
        size="xsmall"
        icon={CloseSmallIcon}
        purpose="tertiary"
        onClick={onClick}
        aria-label={
          ariaLabel ?? t(texts.removeChip) + (children ? ` ${children}` : '')
        }
      />
    </div>
  ) : null;
};

Chip.displayName = 'Chip';

const texts = createTexts({
  removeChip: {
    nb: 'Fjern merkelapp',
    no: 'Fjern merkelapp',
    nn: 'Fjern merkelapp',
    en: 'Remove chip',
    se: 'Sihku lihppu',
  },
});
