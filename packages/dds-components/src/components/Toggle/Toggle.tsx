import { type InputHTMLAttributes, type ReactNode, useId } from 'react';

import styles from './Toggle.module.css';
import { useControllableState } from '../../hooks/useControllableState';
import {
  type BaseComponentProps,
  type Size,
  getBaseHTMLProps,
} from '../../types';
import { cn, readOnlyClickHandler, readOnlyKeyDownHandler } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { CheckIcon, LockIcon } from '../Icon/icons';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';
import { Spinner } from '../Spinner';
import { VisuallyHidden } from '../VisuallyHidden';

export type ToggleSize = Extract<Size, 'medium' | 'large'>;
type TogglePickedHTMLAttributes = Omit<
  CheckboxPickedHTMLAttributes,
  'onChange' | 'checked' | 'defaultChecked'
>;

export type ToggleProps = BaseComponentProps<
  HTMLElement,
  {
    /**Ledetekst; tillater bruk av f.eks. `<VisuallyHidden>` for usynlig tekst. */
    children?: ReactNode;
    /**
     * Callback som blir kalt når brukeren endrer toggle-verdien.
     */
    onChange?: (checked: boolean) => void;
    /**
     * Om toggle er av eller på.
     */
    checked?: boolean;
    /**
     * Den initielle verdien når komponenten brukes uncontrolled.
     * @default false
     */
    defaultChecked?: boolean;
    /**Spesifiserer om input er `disabled`. */
    disabled?: boolean;
    /**
     * Inputelementet blir `readonly` - den kan ikke interageres med. Brukes bl.a. til å presentere input brukeren har fylt ut andre steder.
     */
    readOnly?: boolean;
    /**
     * Indikerer at verdien prosesseres; viser loading-tilstand og setter `aria-disabled`.
     */
    isLoading?: boolean;
    /**
     * Størrelse.
     * @default "medium"
     */
    size?: ToggleSize;
  } & TogglePickedHTMLAttributes,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof TogglePickedHTMLAttributes>
>;

export const Toggle = ({
  id,
  children,
  size = 'medium',
  checked: checkedProp,
  defaultChecked,
  onChange,
  disabled,
  readOnly,
  isLoading,
  className,
  htmlProps = {},
  ...rest
}: ToggleProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-toggle`;
  const iconSize = size === 'large' ? 'medium' : 'small';

  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked ?? false,
    onChange,
  });

  return (
    <label
      htmlFor={uniqueId}
      className={cn(
        styles.label,
        styles[size],
        isLoading && styles['label--is-loading'],
        disabled && styles['label--disabled'],
        readOnly && styles['label--read-only'],
      )}
    >
      <input
        {...getBaseHTMLProps(
          uniqueId,
          cn(
            className,
            focusStyles['focusable-sibling'],
            utilStyles['hide-input'],
          ),
          htmlProps,
          rest,
        )}
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        disabled={disabled}
        aria-disabled={isLoading}
        aria-readonly={readOnly}
        onKeyDown={readOnlyKeyDownHandler(
          'selectionControl',
          readOnly || isLoading,
          htmlProps.onKeyDown,
        )}
        onClick={readOnlyClickHandler(readOnly || isLoading, htmlProps.onClick)}
      />
      <span className={cn(styles.track, focusStyles['focus-styled-sibling'])}>
        <span className={styles.thumb}>
          {isLoading ? (
            <Spinner size={`var(--dds-icon-size-${size})`} />
          ) : (
            <Icon
              className={styles.checkmark}
              icon={CheckIcon}
              iconSize={iconSize}
            />
          )}
        </span>
      </span>
      <span className={cn(readOnly && styles['labeltext--readonly'])}>
        {readOnly && (
          <Icon
            icon={LockIcon}
            iconSize="small"
            className={styles['icon--read-only']}
          />
        )}
        {children}{' '}
        {isLoading && (
          <VisuallyHidden as="span">Innlastning pågår</VisuallyHidden>
        )}
      </span>
    </label>
  );
};

Toggle.displayName = 'Toggle';
