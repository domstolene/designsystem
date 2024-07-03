import { type HTMLAttributes, forwardRef, useState } from 'react';

import styles from './SplitButton.module.css';
import { type ExtractStrict } from '../../types';
import { cn } from '../../utils';
import {
  Button,
  type ButtonProps,
  type ButtonPurpose,
  type ButtonSize,
} from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonItem,
  OverflowMenuGroup,
  OverflowMenuList,
} from '../OverflowMenu';

export type SplitButtonPurpose = ExtractStrict<
  ButtonPurpose,
  'primary' | 'secondary'
>;

export type SplitButtonPrimaryActionProps = Omit<
  ButtonProps,
  'size' | 'purpose'
>;
export type SplitButtonSecondaryActionsProps = Array<OverflowMenuButtonItem>;

export type SplitButtonProps = {
  /**Størrelse på komponenten. */
  size?: ButtonSize;
  /**Props for primær handling. Samme props som for `<Button />` unntatt `size` og `purpose`. */
  primaryAction: SplitButtonPrimaryActionProps;
  /**Props for sekunære handlinger. */
  secondaryActions: SplitButtonSecondaryActionsProps;
  /**Formål med knappen */
  purpose?: SplitButtonPurpose;
} & HTMLAttributes<HTMLDivElement>;

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (props, ref) => {
    const {
      size,
      primaryAction,
      secondaryActions,
      purpose = 'primary',
      className,
      ...rest
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const buttonStyleProps: ButtonProps = {
      purpose: purpose,
      size,
    };

    return (
      <div ref={ref} className={cn(className, styles.container)} {...rest}>
        <Button
          {...buttonStyleProps}
          {...primaryAction}
          iconPosition="left"
          className={styles.main}
        />
        <OverflowMenuGroup onToggle={() => setIsOpen(!isOpen)}>
          <Button
            {...buttonStyleProps}
            icon={isOpen ? ChevronUpIcon : ChevronDownIcon}
            aria-label="Åpne liste med flere valg"
            purpose={purpose}
            className={cn(
              styles.option,
              purpose === 'primary' && styles['option--primary'],
            )}
          />
          <OverflowMenu placement="bottom-end">
            <OverflowMenuList>
              {secondaryActions.map(item => (
                <OverflowMenuButton {...item}>{item.title}</OverflowMenuButton>
              ))}
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </div>
    );
  },
);

SplitButton.displayName = 'SplitButton';
