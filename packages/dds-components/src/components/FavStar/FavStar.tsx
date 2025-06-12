import { type HTMLAttributes, useId } from 'react';

import styles from './FavStar.module.css';
import { useControllableState } from '../../hooks/useControllableState';
import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { StarFilledIcon, StarIcon } from '../Icon/icons';

type ComponentSize = 'medium' | 'large';

export type FavStarProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**
     * Status på favorisering. `true` betyr at den er favorisert.
     */
    checked?: boolean;
    /**
     * Hvis du skal bruke `<FavStar>` uncontrolled så kan denne brukes til å sette den initielle "favoritt"-statusen.
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * Callback som blir kalt når brukeren endrer status på favorisering.
     */
    onChange?: (checked: boolean) => void;
    /**
     * Størrelse på `<FavStar>`. `'medium'` er den mest vanlige størrelsen.
     * @default "medium"
     */
    size?: ComponentSize;
  },
  Omit<HTMLAttributes<HTMLElement>, 'onChange'>
>;

export const FavStar = ({
  id,
  className,
  onChange,
  checked: checkedProp,
  defaultChecked,
  size = 'medium',
  htmlProps,
  ...rest
}: FavStarProps) => {
  const { t } = useTranslation();
  const { style, ...props } = getBaseHTMLProps(
    id,
    cn(className),
    htmlProps,
    rest,
  );
  const generatedId = useId();
  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked ?? false,
    onChange,
  });
  return (
    <label
      className={cn(
        className,
        styles.container,
        styles[`container--${size}`],
        focusStyles['has-focusable-input'],
      )}
      style={style}
      htmlFor={id ?? generatedId}
    >
      <input
        {...props}
        id={id ?? generatedId}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        type="checkbox"
        aria-label={props['aria-label'] ?? t(texts.favourite)}
        className={utilStyles['hide-input']}
      />
      <Icon iconSize={size} icon={StarIcon} className={styles.icon} />
      <Icon
        iconSize={size}
        icon={StarFilledIcon}
        className={cn(styles.icon, !checked && styles['icon--invisible'])}
      />
    </label>
  );
};

FavStar.displayName = 'FavStar';

const texts = createTexts({
  favourite: {
    nb: 'Favoriser',
    no: 'Favoriser',
    nn: 'Favorittmerk',
    en: 'Favorite',
  },
});
