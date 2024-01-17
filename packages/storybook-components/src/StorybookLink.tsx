import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { type ReactNode } from 'react';
import styled, { css } from 'styled-components';

const { border, colors } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

import {
  FigmaSvg,
  GithubSvg,
  NpmSvg,
  SlackSvg,
  ZeroheightSvg,
} from './assets/logos';

const LinkBlockInner = styled.div<{ size: Size }>`
  display: flex;
  ${({ size }) => {
    if (size === 'large') {
      return css`
        flex-direction: column;
        gap: ${ddsBaseTokens.spacing.SizesDdsSpacingX075};
        padding: ${ddsBaseTokens.spacing.SizesDdsSpacingX075};
        align-items: center;
        @media only screen and (max-width: 350px) {
          & {
            padding: ${ddsBaseTokens.spacing.SizesDdsSpacingX05};
          }
        }
      `;
    } else if (size === 'small') {
      return css`
        flex-direction: row;
        gap: ${ddsBaseTokens.spacing.SizesDdsSpacingX05};
        padding: ${ddsBaseTokens.spacing.SizesDdsSpacingX05};
        align-items: center;
      `;
    }
  }}
`;
export const hoverWithBorder = {
  borderColor: border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `inset 0 0 0 1px ${border.BordersDdsBorderFocusInputfieldStroke}`,
};

export const focusVisibleWithBorder = {
  outline: 'none',
  borderColor: border.BordersDdsBorderFocusCardStroke,
  boxShadow: `inset 0 0 0 1px ${border.BordersDdsBorderFocusCardStroke}`,
};

const StyledCard = styled.a<{ size: Size }>`
  display: block;
  background-color: ${colors.DdsColorNeutralsWhite};
  border: ${border.BordersDdsBorderStyleLightStrokeWeight} solid;
  border-color: ${border.BordersDdsBorderStyleLightStroke};
  color: ${textDefault.textColor};
  text-decoration: none;
  width: ${({ size }) => (size === 'large' ? '210px' : 'fit-content')};
  transition: 0.2s;

  &:hover {
    ${hoverWithBorder}
  }
  &:focus {
    ${focusVisibleWithBorder}
  }
`;

type LinkType = 'npm' | 'zeroheight' | 'figma' | 'slack' | 'github';

type Size = 'small' | 'large';

interface StorybookLinkProps {
  href: string;
  children?: ReactNode;
  text: string;
  linkType: LinkType;
  size?: Size;
}

export const StorybookLink = ({
  text,
  href,
  linkType,
  size = 'large',
}: StorybookLinkProps) => {
  const iconSize = size === 'small' ? '1rem' : '50';
  return (
    <StyledCard size={size} href={href} target="_blank" className="sb-unstyled">
      <LinkBlockInner size={size}>
        {linkType === 'npm' && <NpmSvg size={iconSize} />}
        {linkType === 'zeroheight' && <ZeroheightSvg size={iconSize} />}
        {linkType === 'figma' && <FigmaSvg size={iconSize} />}
        {linkType === 'slack' && <SlackSvg size={iconSize} />}
        {linkType === 'github' && <GithubSvg size={iconSize} />}
        <span>{text}</span>
      </LinkBlockInner>
    </StyledCard>
  );
};
