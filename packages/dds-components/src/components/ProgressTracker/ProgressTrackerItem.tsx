import { type ComponentPropsWithRef, useMemo } from 'react';

import { useProgressTrackerContext } from './ProgressTracker.context';
import styles from './ProgressTracker.module.css';
import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { type TextColor, cn } from '../../utils';
import { StylelessButton } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { CheckIcon } from '../Icon/icons';
import { type SvgIcon } from '../Icon/utils';
import { Box } from '../layout';
import { Typography } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

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

  const { t } = useTranslation();
  const stepNumber = index + 1;

  const { activeStep, handleStepChange, direction } =
    useProgressTrackerContext();
  const active = activeStep === index;
  const itemState = toItemState(active, completed, disabled);

  const handleClick = () => {
    if (!disabled) {
      onClick?.(index);
      handleStepChange?.(index);
    }
  };

  const stepNumberContent = useMemo(() => {
    if (completed) {
      return <Icon icon={CheckIcon} iconSize="small" />;
    }

    if (icon !== undefined) {
      return <Icon icon={icon} iconSize="small" />;
    }

    return stepNumber;
  }, [completed, icon, index]);

  function getTextColor(): TextColor | undefined {
    if (disabled) return 'text-subtle';
    if (active) return 'text-action-resting';
  }

  const isInactiveLink = disabled || active;

  const stepContent = (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        aria-hidden
        className={cn(
          styles['item-number'],
          styles[`item-number--${itemStateCn[itemState]}`],
          typographyStyles['body-small'],
        )}
      >
        {stepNumberContent}
      </Box>
      <Typography
        as="div"
        className={cn(
          styles['item-text'],
          typographyStyles['a--nested__child'],
          isInactiveLink && styles['item-text--inactive-link'],
        )}
        color={getTextColor()}
      >
        {children}
      </Typography>
    </>
  );

  const ariaLabel = props['aria-label']
    ? props['aria-label']
    : `${children}, ${stepNumber}. ${completed ? t(texts.completed) : t(texts.uncompleted)}`;

  return (
    <Box
      as="li"
      display={direction === 'row' ? 'flex' : undefined}
      aria-current={active ? 'step' : undefined}
      className={cn(styles['list-item'], styles[`list-item--${direction}`])}
    >
      {handleStepChange ? (
        <Box
          as={StylelessButton}
          display="grid"
          alignItems="center"
          justifyContent="flex-start"
          gap="x0.5"
          {...getBaseHTMLProps(
            id,
            cn(
              className,
              styles['item-button'],
              typographyStyles['a--nested__parent'],
              focusable,
            ),
            htmlProps as ComponentPropsWithRef<'button'>,
            rest,
          )}
          aria-label={ariaLabel}
          onClick={() => handleClick()}
          disabled={disabled}
        >
          {stepContent}
        </Box>
      ) : (
        <div
          {...getBaseHTMLProps(
            id,
            cn(className, cn(styles['item-button'], styles['item-div'])),
            htmlProps as ComponentPropsWithRef<'div'>,
            rest,
          )}
          aria-label={ariaLabel}
        >
          {stepContent}
        </div>
      )}
    </Box>
  );
};

ProgressTrackerItem.displayName = 'ProgressTracker.Item';

const texts = createTexts({
  uncompleted: {
    nb: 'trinn ikke ferdig',
    no: 'trinn ikke ferdig',
    nn: 'trinn ikkje ferdig',
    en: 'step uncompleted',
  },
  completed: {
    nb: 'trinn ferdig',
    no: 'trinn ferdig',
    nn: 'trinn ferdig',
    en: 'step completed',
  },
});
