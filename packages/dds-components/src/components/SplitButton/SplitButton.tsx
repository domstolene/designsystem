import { type ComponentPropsWithRef, useState } from 'react';

import styles from './SplitButton.module.css';
import { type ExtractStrict } from '../../types';
import { cn } from '../../utils';
import { Button, type ButtonProps, type ButtonPurpose } from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonProps,
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
export type SplitButtonSecondaryActionsProps = Array<OverflowMenuButtonProps>;

export type SplitButtonProps = Pick<ButtonProps, 'size'> & {
  /**Props for primær handling. Samme props som for `<Button>` unntatt `size` og `purpose`. */
  primaryAction: SplitButtonPrimaryActionProps;
  /**Props for sekunære handlinger. */
  secondaryActions: SplitButtonSecondaryActionsProps;
  /**Formål med knappen.
   * @default "primary"
   */
  purpose?: SplitButtonPurpose;
} & ComponentPropsWithRef<'div'>;

export const SplitButton = ({
  size,
  primaryAction,
  secondaryActions,
  purpose = 'primary',
  className,
  ...rest
}: SplitButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonStyleProps: ButtonProps = {
    purpose,
    size,
  };

  return (
    <div className={cn(className, styles.container)} {...rest}>
      <Button
        {...buttonStyleProps}
        {...primaryAction}
        iconPosition="left"
        className={styles.main}
      />
      <OverflowMenuGroup isOpen={isOpen} setIsOpen={setIsOpen}>
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
            {secondaryActions.map((item, index) => (
              <OverflowMenuButton key={index} {...item}>
                {item.children}
              </OverflowMenuButton>
            ))}
          </OverflowMenuList>
        </OverflowMenu>
      </OverflowMenuGroup>
    </div>
  );
};

SplitButton.displayName = 'SplitButton';
