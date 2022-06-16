import { forwardRef, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { chipTokens as tokens } from './Chip.tokens';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Container = styled.div`
  ${tokens.container.base}
`;

const TextWrapper = styled.span`
  ${tokens.text.base}
`;

export type ChipProps = {
  /** Teksten som vises i komponenten. */
  text?: string;
  /** Ekstra logikk når `<Chip />` lukkes. */
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ text, onClose, 'aria-label': ariaLabel, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const onClick = () => {
      setIsOpen(false);
      onClose && onClose();
    };

    return isOpen ? (
      <Container {...rest} ref={ref}>
        <TextWrapper>{text}</TextWrapper>
        <Button
          size="tiny"
          Icon={CloseOutlinedIcon}
          appearance="borderless"
          purpose="secondary"
          onClick={onClick}
          aria-label={ariaLabel || `Fjern ${text ? `chip ${text}` : 'chip'}`}
        />
      </Container>
    ) : null;
  }
);
