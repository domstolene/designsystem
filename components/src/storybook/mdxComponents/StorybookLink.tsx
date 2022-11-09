import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Card } from '../../components/Card';
import { ReactNode } from 'react';
import { Typography } from '../../components/Typography';
import {
  ZeroheightSvg,
  NpmSvg,
  FigmaSvg,
  SlackSvg,
  GithubSvg,
} from '../assets/logos';

const LinkBlockInner = styled.div<{ size: Size }>`
  display: flex;
  ${({ size }) => {
    if (size === 'large') {
      return css`
        flex-direction: column;
        gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075};
        padding: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075};
        align-items: center;
        @media only screen and (max-width: 350px) {
          & {
            padding: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
          }
        }
      `;
    } else if (size === 'small') {
      return css`
        flex-direction: row;
        gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
        padding: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
        align-items: center;
      `;
    }
  }}
`;

const StyledCard = styled(Card)<{ size: Size }>`
  display: block;
  width: ${({ size }) => (size === 'large' ? '210px' : 'fit-content')};
`;

type LinkType = 'npm' | 'zeroheight' | 'figma' | 'slack' | 'github';

type Size = 'small' | 'large';

type StorybookLinkProps = {
  href: string;
  children?: ReactNode;
  text: string;
  linkType: LinkType;
  size?: Size;
};

export const StorybookLink = ({
  text,
  href,
  linkType,
  size = 'large',
}: StorybookLinkProps) => {
  const iconSize = size === 'small' ? '1rem' : '50';
  return (
    <StyledCard
      size={size}
      cardType="navigation"
      color="strokeLight"
      href={href}
      target="_blank"
    >
      <LinkBlockInner size={size}>
        {linkType === 'npm' && <NpmSvg size={iconSize} />}
        {linkType === 'zeroheight' && <ZeroheightSvg size={iconSize} />}
        {linkType === 'figma' && <FigmaSvg size={iconSize} />}
        {linkType === 'slack' && <SlackSvg size={iconSize} />}
        {linkType === 'github' && <GithubSvg size={iconSize} />}
        <Typography typographyType="headingSans01" as="span">
          {text}
        </Typography>
      </LinkBlockInner>
    </StyledCard>
  );
};
