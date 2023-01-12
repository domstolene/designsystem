import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { chipTokens as tokens, typographyType } from './Chip.tokens';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { CloseIcon } from '../../icons/tsx';
import {
  TextOverflowEllipsisInner,
  TextOverflowEllipsisWrapper,
} from '../../helpers/TextOverflowEllipsis';
import { getFontStyling } from '../Typography/Typography.utils';

const { container } = tokens;

const Container = styled(TextOverflowEllipsisWrapper)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${container.gap};
  padding: ${container.padding};
  border: ${container.border};
  border-radius: ${container.borderRadius};
  background-color: ${container.backgroundColor};
  ${getFontStyling(typographyType, true)};
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
      as="div"
    >
      <TextOverflowEllipsisInner>{text}</TextOverflowEllipsisInner>
      <Button
        size="tiny"
        icon={CloseIcon}
        appearance="borderless"
        purpose="secondary"
        onClick={onClick}
        aria-label={ariaLabel || `Fjern ${text ? `chip ${text}` : 'chip'}`}
      />
    </Container>
  ) : null;
});