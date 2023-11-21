import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { changeRGBAAlpha } from '@norges-domstoler/dds-core';

interface BackdropProps {
  isOpen: boolean;
}

export const Backdrop = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isOpen',
})<BackdropProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${changeRGBAAlpha(
    ddsBaseTokens.colors.DdsColorNeutralsGray9,
    0.5,
  )};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }
`;
