import { useState } from 'react';

import styles from './Chip.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils/dom';
import { InlineIconButton } from '../helpers/InlineIconButton';
import { CloseSmallIcon } from '../Icon/icons';
import { Box } from '../layout';
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
  style,
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
    <Box
      display="inline-flex"
      alignItems="center"
      maxWidth="100%"
      gap="x0.125"
      padding="x0.25 x0.125 x0.25 x0.5"
      {...getBaseHTMLProps(
        id,
        cn(className, typographyStyles['body-short-medium'], styles.container),
        style,
        restHTMLprops,
        rest,
      )}
    >
      <TextOverflowEllipsisInner>{text}</TextOverflowEllipsisInner>
      <InlineIconButton
        size="component"
        icon={CloseSmallIcon}
        onClick={onClick}
        aria-label={
          ariaLabel ?? t(texts.removeChip) + (children ? ` ${children}` : '')
        }
      />
    </Box>
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
