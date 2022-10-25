import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons/tsx';
import { Button, ButtonProps, ButtonSize } from '../Button';
import {
  OverflowMenu,
  OverflowMenuButtonItem,
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
const OptionButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  &:focus {
    position: relative;
    z-index: 0;
  }
`;

export type SplitButtonProps = {
  /**Størrelse på komponenten. */
  size?: ButtonSize;
  /**Props for primær handling. Samme props som for `<Button />` unntatt `size`, `purpose`, og `appearance`. */
  primaryAction: Omit<ButtonProps, 'size' | 'apperance' | 'purpose'>;
  /**Props for sekunære handlinger. */
  secondaryActions: OverflowMenuButtonItem[];
};
export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (props, ref) => {
    const { size, primaryAction, secondaryActions, ...rest } = props;

    const [isOpen, setIsOpen] = useState(false);
    const buttonStyleProps: ButtonProps = {
      appearance: 'filled',
      purpose: 'secondary',
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
          />
          <OverflowMenu items={secondaryActions} placement="bottom-end" />
        </OverflowMenuGroup>
      </Container>
    );
  }
);
