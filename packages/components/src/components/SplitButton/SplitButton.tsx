import { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { tokens } from './SplitButton.tokens';
import { type ExtractStrict } from '../../types';
import {
  Button,
  type ButtonProps,
  type ButtonPurpose,
  type ButtonSize,
} from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon/icons';
import {
  OverflowMenu,
  type OverflowMenuButtonItem,
  OverflowMenuGroup,
} from '../OverflowMenu';

const Container = styled.div`
  display: flex;
`;

const MainButton = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  &:focus {
    position: relative;
    z-index: 0;
  }
`;

export type SplitButtonPurpose = ExtractStrict<
  ButtonPurpose,
  'primary' | 'secondary'
>;

const OptionButton = styled(Button)<{
  purpose: SplitButtonPurpose;
}>`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${props =>
    props.purpose === 'primary' &&
    `
      border-left: ${tokens.mainButton.primary.borderLeft};
      &:hover {
        border-left: ${tokens.mainButton.primary.borderLeft};
      }
    `}

  &:focus {
    position: relative;
    z-index: 0;

    ${props =>
      props.purpose === 'primary' &&
      `border-left: ${tokens.mainButton.primary.borderLeft}`};
  }
`;

export interface SplitButtonProps {
  /**Størrelse på komponenten. */
  size?: ButtonSize;
  /**Props for primær handling. Samme props som for `<Button />` unntatt `size`, `purpose`, og `appearance`. */
  primaryAction: Omit<ButtonProps, 'size' | 'apperance' | 'purpose'>;
  /**Props for sekunære handlinger. */
  secondaryActions: Array<OverflowMenuButtonItem>;
  /**Formål med knappen */
  purpose?: SplitButtonPurpose;
}
export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (props, ref) => {
    const {
      size,
      primaryAction,
      secondaryActions,
      purpose = 'primary',
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const buttonStyleProps: ButtonProps = {
      appearance: 'filled',
      purpose: purpose,
      size,
    };

    return (
      <Container ref={ref}>
        <MainButton
          {...buttonStyleProps}
          {...primaryAction}
          iconPosition="left"
        />
        <OverflowMenuGroup onToggle={() => setIsOpen(!isOpen)}>
          <OptionButton
            {...buttonStyleProps}
            icon={isOpen ? ChevronUpIcon : ChevronDownIcon}
            aria-label="Åpne liste med flere valg"
            purpose={purpose}
          />
          <OverflowMenu items={secondaryActions} placement="bottom-end" />
        </OverflowMenuGroup>
      </Container>
    );
  },
);

SplitButton.displayName = 'SplitButton';
