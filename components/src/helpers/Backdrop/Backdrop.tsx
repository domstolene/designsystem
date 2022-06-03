import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { changeRGBAAlpha } from '../../utils/color';

type BackdropProps = { isOpen: boolean };

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${changeRGBAAlpha(
    ddsBaseTokens.colors.DdsColorNeutralsGray9,
    0.5
  )};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.2s;
`;
