import styled, { css } from 'styled-components';
import { textInputTokens as tokens } from './TextInput.tokens';
import { StatefulInput, InputSize } from '../../helpers';
import { Icon } from '../Icon';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { iconSizes } = ddsBaseTokens;
const { input, icon } = tokens;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type StyledIconProps = {
  size: InputSize;
};

export const StyledIcon = styled(Icon)<StyledIconProps>`
  position: absolute;
  color: ${icon.color};
  ${({ size, iconSize }) => css`
    left: ${icon.sizes[size].left};
    ${iconSize === 'small'
      ? css`
          top: ${`calc(50% - ${iconSizes.DdsIconsizeSmallNumberPx / 2}px)`};
        `
      : css`
          top: ${`calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`}; ;
        `}
  `}
  z-index: 1;
`;

type StyledInputProps = {
  hasIcon?: boolean;
};

export const StyledInput = styled(StatefulInput)<StyledInputProps>`
  ${({ componentSize, hasIcon }) =>
    hasIcon &&
    componentSize &&
    css`
      padding-left: ${input.withIcon[componentSize].paddingLeft};
    `}
`;
