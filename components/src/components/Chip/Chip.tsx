import { forwardRef, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { chipTokens as tokens } from './Chip.tokens';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Container = styled.span`
  ${tokens.container.base}
`;

export type ChipProps = {
  /** Teksten som vises i komponenten. */
  text?: string;
  /** Ekstra logikk når `<Chip />` lukkes. */
  onClose?: () => void;
} & HTMLAttributes<HTMLSpanElement>;

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  ({ text, onClose, 'aria-label': ariaLabel, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const onClick = () => {
      setIsOpen(false);
      onClose && onClose();
    };

    return isOpen ? (
      <Container {...rest} ref={ref}>
        {text}
        <Button
          size="tiny"
          Icon={CloseOutlinedIcon}
          appearance="borderless"
          purpose="secondary"
          onClick={onClick}
          aria-label={ariaLabel || `Fjern ${text ?? 'chip'}`}
        />
      </Container>
    ) : null;
  }
);
