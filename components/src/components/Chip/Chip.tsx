import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { chipTokens as tokens } from './Chip.tokens';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

const Container = styled.div`
  ${tokens.container.base}
`;

const TextWrapper = styled.span`
  ${tokens.text.base}
`;

export type ChipProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Teksten som vises i komponenten. */
    text?: string;
    /** Ekstra logikk når `<Chip />` lukkes. */
    onClose?: () => void;
  }
>;

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { text, onClose, id, className, htmlProps = {}, ...rest } = props;

  const { 'aria-label': ariaLabel, ...restHTMLprops } = htmlProps;

  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return isOpen ? (
    <Container
      {...getBaseHTMLProps(id, className, restHTMLprops, rest)}
      ref={ref}
    >
      <TextWrapper>{text}</TextWrapper>
      <Button
        size="tiny"
        icon="close"
        appearance="borderless"
        purpose="secondary"
        onClick={onClick}
        aria-label={ariaLabel || `Fjern ${text ? `chip ${text}` : 'chip'}`}
      />
    </Container>
  ) : null;
});
