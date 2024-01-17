import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import styled, { css } from 'styled-components';

import { textInputTokens as tokens } from './TextInput.tokens';
import { type InputProps, type InputSize, StatefulInput } from '../helpers';
import { Icon } from '../Icon';

const { iconSizes } = ddsBaseTokens;
const { input, icon } = tokens;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface StyledIconProps {
  $size: InputSize;
}

export const StyledIcon = styled(Icon)<StyledIconProps>`
  position: absolute;
  color: ${icon.color};
  ${({ $size, iconSize }) => css`
    left: ${icon.sizes[$size].left};
    ${iconSize === 'small'
      ? css`
          top: ${`calc(50% - ${iconSizes.DdsIconsizeSmallNumberPx / 2}px)`};
        `
      : css`
          top: ${`calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`};
        `}
  `}
  z-index: 1;
`;

type StyledInputProps = {
  $hasIcon?: boolean;
} & Pick<InputProps, 'componentSize'>;

export const StyledInput = styled(StatefulInput)<StyledInputProps>`
  ${({ componentSize, $hasIcon }) =>
    $hasIcon &&
    componentSize &&
    css`
      padding-left: ${input.withIcon[componentSize].paddingLeft};
    `}
`;
