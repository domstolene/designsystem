import { forwardRef, useState } from 'react';

import styles from './Chip.module.css';
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
    text?: string;
    /** Ekstra logikk når `<Chip />` lukkes. */
    onClose?: () => void;
  }
>;

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { text, onClose, id, className, htmlProps = {}, ...rest } = props;

  const { 'aria-label': ariaLabel, ...restHTMLprops } = htmlProps;

  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return isOpen ? (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        restHTMLprops,
        rest,
      )}
      ref={ref}
    >
      <TextOverflowEllipsisInner className={cn(typographyStyles['body-small'])}>
        {text}
      </TextOverflowEllipsisInner>
      <Button
        size="xsmall"
        icon={CloseSmallIcon}
        purpose="tertiary"
        onClick={onClick}
        aria-label={ariaLabel ?? `Fjern ${text ? `chip ${text}` : 'chip'}`}
      />
    </div>
  ) : null;
});

Chip.displayName = 'Chip';
