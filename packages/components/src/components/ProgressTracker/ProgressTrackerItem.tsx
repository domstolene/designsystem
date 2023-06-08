import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
  focusVisible,
  focusVisibleTransitionValue,
} from '../../helpers/styling';
import { CheckIcon } from '../../icons/tsx';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentPropsWithChildren } from '../../types';
import { Icon } from '../Icon';
import { getFontStyling } from '../Typography/Typography.utils';
import { VisuallyHidden } from '../VisuallyHidden';
import { useProgressTrackerContext } from './ProgressTracker.context';
import {
  progressTrackerTokens,
  typographyTypes,
} from './ProgressTracker.tokens';

type ItemState =
  | 'activeCompleted'
  | 'activeIncomplete'
  | 'inactiveCompleted'
  | 'inactiveIncomplete'
  | 'disabled';

const toItemState = (
  active: boolean,
  completed: boolean,
  disabled: boolean
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

type ItemStyleProps = {
  state: ItemState;
};

type BaseItemProps = {
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
};

type ProgressTrackerItemProps =
  | ({
      /** Click-handler som gjør det mulig for bruker å klikke på steget for å navigere. Valgfri. */
      onClick: (index: number) => void;
    } & BaseComponentPropsWithChildren<HTMLButtonElement, BaseItemProps>)
  | ({
      onClick?: undefined;
    } & BaseComponentPropsWithChildren<HTMLDivElement, BaseItemProps>);

const ItemWrapper = styled.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ItemNumber = styled.div<ItemStyleProps>`
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
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

  ${({ state }) => {
    switch (state) {
      case 'activeIncomplete':
        return css`
          border-color: ${itemNumber.active.borderColor};
          color: ${itemNumber.active.color};
          background-color: ${itemNumber.active.backgroundColor};
        `;
      case 'activeCompleted':
        return css`
          border-color: ${itemNumber.completed.borderColor};
          color: ${itemNumber.completed.color};
          background-color: ${itemNumber.completed.backgroundColor};
        `;
      case 'inactiveCompleted':
        return css`
          border-color: ${itemNumber.completed.borderColor};
          color: ${itemNumber.completed.color};
          background-color: ${itemNumber.completed.backgroundColor};
        `;
      case 'inactiveIncomplete':
        return css`
          border-color: ${itemNumber.inactive.borderColor};
          color: ${itemNumber.inactive.color};
          background-color: ${itemNumber.inactive.backgroundColor};
        `;
      case 'disabled':
        return css`
          border-color: ${itemNumber.disabled.borderColor};
          color: ${itemNumber.disabled.color};
          background-color: ${itemNumber.disabled.backgroundColor};
        `;
    }
  }}
`;

const ItemText = styled.div<ItemStyleProps>`
  ${getFontStyling(typographyTypes.label)}
  text-align: start;
  text-decoration: ${itemText.textDecoration};
  transition: text-decoration-color 0.2s;

  ${({ state }) => {
    switch (state) {
      case 'activeCompleted':
      case 'activeIncomplete':
        return css`
          color: ${itemText.active.color};
          text-decoration-color: ${itemText.active.textDecorationColor};
        `;
      case 'inactiveCompleted':
      case 'inactiveIncomplete':
        return css`
          color: ${itemText.inactive.color};
          text-decoration-color: ${itemText.inactive.textDecorationColor};
        `;
      case 'disabled':
        return css`
          color: ${itemText.disabled.color};
          text-decoration: ${itemText.disabled.textDecoration};
        `;
    }
  }};
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

  :focus-visible {
    ${focusVisible}
  }

  ${({ state }) =>
    state !== 'disabled' &&
    css`
      cursor: pointer;
    `}
`;

const getVisuallyHiddenText = (
  active: boolean,
  completed: boolean,
  index: number
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

  const styleProps = {
    state: toItemState(active, completed, disabled),
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
