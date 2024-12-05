import { type ComponentPropsWithRef, useMemo } from 'react';

import { useProgressTrackerContext } from './ProgressTracker.context';
import styles from './ProgressTracker.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { CheckIcon } from '../Icon/icons';
import { type SvgIcon } from '../Icon/utils';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

type ItemState =
  | 'activeCompleted'
  | 'activeIncomplete'
  | 'inactiveCompleted'
  | 'inactiveIncomplete'
  | 'disabled';

const toItemState = (
  active: boolean,
  completed: boolean,
  disabled: boolean,
): ItemState => {
  if (disabled) {
    return 'disabled';
  }

  if (active) {
    return completed ? 'activeCompleted' : 'activeIncomplete';
  } else {
    return completed ? 'inactiveCompleted' : 'inactiveIncomplete';
  }
};

type StateHyphen =
  | 'disabled'
  | 'active-incomplete'
  | 'active-completed'
  | 'inactive-incomplete'
  | 'inactive-completed';

const itemStateCn: Record<ItemState, StateHyphen> = {
  disabled: 'disabled',
  activeCompleted: 'active-completed',
  activeIncomplete: 'active-incomplete',
  inactiveCompleted: 'inactive-completed',
  inactiveIncomplete: 'inactive-incomplete',
};

export interface BaseItemProps {
  /** Om steget er valgt eller ikke. Settes av konsument. */
  active?: boolean;
  /** Om steget er ferdig eller ikke. Settes av konsument.
   * @default false
   */
  completed?: boolean;
  /** Om steget skal være disabled. Settes av konsument.
   * @default false
   */
  disabled?: boolean;
  /** Ikon som skal vises istedenfor stegnummeret. Settes av konument. */
  icon?: SvgIcon;
  /** Indeksen til steget. NB! Denne settes automatisk av forelder og skal ikke settes manuelt. */
  index?: number;
}

export type ProgressTrackerItemProps =
  | BaseComponentPropsWithChildren<
      HTMLButtonElement,
      BaseItemProps & {
        /** Click-handler som gjør det mulig for bruker å klikke på steget for å navigere. Valgfri. */
        onClick?: (index: number) => void;
      }
    >
  | BaseComponentPropsWithChildren<
      HTMLDivElement,
      BaseItemProps & {
        onClick?: undefined;
      }
    >;

const getVisuallyHiddenText = (
  active: boolean,
  completed: boolean,
  index: number,
) =>
  `${index + 1}, ${active ? '' : 'Trinn, '}${
    completed ? 'Ferdig, ' : 'Ikke ferdig, '
  }`;

export const ProgressTrackerItem = (props: ProgressTrackerItemProps) => {
  const {
    id,
    className,
    htmlProps,
    index = 0,
    completed = false,
    disabled = false,
    onClick,
    icon,
    children,
    ...rest
  } = props;

  const { activeStep, handleStepChange } = useProgressTrackerContext();
  const active = activeStep === index;
  const itemState = toItemState(active, completed, disabled);

  const handleClick = () => {
    if (!disabled) {
      onClick && onClick(index);
      handleStepChange && handleStepChange(index);
    }
  };

  const stepNumberContent = useMemo(() => {
    if (completed) {
      return <Icon icon={CheckIcon} iconSize="small" />;
    }

    if (icon !== undefined) {
      return <Icon icon={icon} iconSize="small" />;
    }

    return index + 1;
  }, [completed, icon, index]);

  const stepContent = (
    <>
      <div
        aria-hidden
        className={cn(
          styles['item-number'],
          styles[`item-number--${itemStateCn[itemState]}`],
          typographyStyles['body-small'],
        )}
      >
        {stepNumberContent}
      </div>
      <div
        className={cn(
          styles['item-text'],
          styles[`item-text--${itemStateCn[itemState]}`],
          typographyStyles['body-medium'],
        )}
      >
        <VisuallyHidden as="span">
          {getVisuallyHiddenText(active, completed, index)}
        </VisuallyHidden>
        {children}
      </div>
    </>
  );

  return (
    <li aria-current={active ? 'step' : undefined} className={styles.item}>
      {handleStepChange ? (
        <button
          {...getBaseHTMLProps(
            id,
            cn(className, styles['item-button'], focusable),
            htmlProps as ComponentPropsWithRef<'button'>,
            rest,
          )}
          onClick={() => handleClick()}
          disabled={disabled}
        >
          {stepContent}
        </button>
      ) : (
        <div
          {...getBaseHTMLProps(
            id,
            cn(className, cn(styles['item-button'], styles['item-div'])),
            htmlProps as ComponentPropsWithRef<'div'>,
            rest,
          )}
        >
          {stepContent}
        </div>
      )}
    </li>
  );
};

ProgressTrackerItem.displayName = 'ProgressTracker.Item';
