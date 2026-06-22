import { useState } from 'react';

import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils/dom';
import { Button } from '../Button';
import { CloseIcon } from '../Icon/icons';
import { Bleed, Paper } from '../layout';
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
    <Paper
      display="inline-flex"
      alignItems="center"
      maxWidth="100%"
      gap="x0.125"
      padding="x0.25 0 x0.25 x0.5"
      borderRadius="chip"
      border="border-subtle"
      background="surface-subtle"
      {...getBaseHTMLProps(
        id,
        cn(className, typographyStyles['body-short-medium']),
        style,
        restHTMLprops,
        rest,
      )}
    >
      <TextOverflowEllipsisInner>{children}</TextOverflowEllipsisInner>
      <Bleed
        as={Button}
        purpose="tertiary"
        size="xsmall"
        icon={CloseIcon}
        onClick={onClick}
        aria-label={
          ariaLabel ?? t(texts.removeChip) + (children ? ` ${children}` : '')
        }
        bleedMarginBlock="x0.25"
        reflectivePadding
      />
    </Paper>
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
