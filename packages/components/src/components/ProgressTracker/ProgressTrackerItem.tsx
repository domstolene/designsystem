import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import { useProgressTrackerContext } from './ProgressTracker.context';
import {
  progressTrackerTokens,
  typographyTypes,
} from './ProgressTracker.tokens';
import { type BaseComponentPropsWithChildren } from '../../types';
import { focusVisible, focusVisibleTransitionValue } from '../helpers';
import { Icon } from '../Icon';
import { CheckIcon } from '../Icon/icons';
import { type SvgIcon } from '../Icon/utils';
import { getFontStyling } from '../Typography';
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

const { itemNumber, itemText, itemContentWrapper } = progressTrackerTokens;

interface ItemStyleProps {
  $state: ItemState;
}

export interface BaseItemProps {
  /** Om steget er valgt eller ikke. Settes av konsument. */
  active?: boolean;

  /** Om steget er ferdig eller ikke. Settes av konsument. */
  completed?: boolean;

  /** Om steget skal være disabled. Settes av konsument.
   * @default false
   */
  disabled?: boolean;

  /** Ikon som skal vises istedenfor stegnummeret. Settes av konument. */
  icon?: SvgIcon;

  /** Indeksen til steget. NB! Denne settes automatisk av `<ProgressTracker />` og skal ikke settes manuelt. */
  index?: number;
}

export type ProgressTrackerItemProps =
  | BaseComponentPropsWithChildren<
      HTMLButtonElement,
      BaseItemProps & {
        /** Click-handler som gjør det mulig for bruker å klikke på steget for å navigere. Valgfri. */
        onClick: (index: number) => void;
      }
    >
  | BaseComponentPropsWithChildren<
      HTMLDivElement,
      BaseItemProps & {
        onClick?: undefined;
      }
    >;

const ItemWrapper = styled.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ItemNumber = styled.div<ItemStyleProps>`
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;
  border-radius: 50%;
  border: ${itemNumber.borderWidth} solid;
  width: ${itemNumber.size};
  height: ${itemNumber.size};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  ${getFontStyling(typographyTypes.number)}
  font-weight: 600;

  ${({ $state: state }) =>
    state &&
    css`
      border-color: ${itemNumber[state].borderColor};
      color: ${itemNumber[state].color};
      background-color: ${itemNumber[state].backgroundColor};
    `}
`;

const ItemText = styled.div<ItemStyleProps>`
  ${getFontStyling(typographyTypes.label)}
  text-align: start;
  text-decoration: ${itemText.textDecoration};
  transition: text-decoration-color 0.2s;

  ${({ $state: state }) =>
    state &&
    css`
      color: ${itemText[state].color};
      text-decoration-color: ${itemText[state].textDecorationColor};
    `};
`;

const ItemContentWrapper = styled.button<ItemStyleProps>`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: ${itemNumber.size} 1fr;
  justify-content: flex-start;
  align-items: center;
  font-family: inherit;
  gap: ${itemContentWrapper.gap};
  transition: ${focusVisibleTransitionValue};

  &:focus-visible,
  &.focus-visible {
    ${focusVisible}
  }

  ${({ $state: state }) =>
    state !== 'disabled' &&
    css`
      cursor: pointer;
      &:hover > ${ItemText} {
        color: ${itemText[state].hover.color};
        text-decoration-color: ${itemText[state].hover.textDecorationColor};
      }
      &:hover > ${ItemNumber} {
        background-color: ${itemNumber[state].hover.backgroundColor};
        border-color: ${itemNumber[state].hover.borderColor};
      }
    `}
`;

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
    index = 0,
    completed = false,
    disabled = false,
    icon,
    children,
  } = props;

  const { activeStep, handleStepChange } = useProgressTrackerContext();
  const active = activeStep === index;

  const styleProps: ItemStyleProps = {
    $state: toItemState(active, completed, disabled),
  };

  const stepNumberContent = useMemo(() => {
    if (completed) {
      return <Icon icon={CheckIcon} iconSize={itemNumber.iconSize} />;
    }

    if (icon !== undefined) {
      return <Icon icon={icon} iconSize={itemNumber.iconSize} />;
    }

    return index + 1;
  }, [completed, icon, index]);

  return (
    <ItemWrapper aria-current={active ? 'step' : undefined}>
      <ItemContentWrapper
        {...styleProps}
        as={handleStepChange ? 'button' : 'div'}
        onClick={
          !disabled && handleStepChange
            ? () => handleStepChange(index)
            : undefined
        }
        disabled={disabled}
      >
        <ItemNumber {...styleProps} aria-hidden>
          {stepNumberContent}
        </ItemNumber>
        <ItemText {...styleProps}>
          <VisuallyHidden as="span">
            {getVisuallyHiddenText(active, completed, index)}
          </VisuallyHidden>
          {children}
        </ItemText>
      </ItemContentWrapper>
    </ItemWrapper>
  );
};

ProgressTrackerItem.displayName = 'ProgressTracker.Item';
