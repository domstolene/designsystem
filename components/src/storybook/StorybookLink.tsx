import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Card } from '../components/Card';
import { ReactNode } from 'react';
import { Typography } from '../components/Typography';
import {
  zeroheightSvg,
  npmSvg,
  figmaSvg,
  slackSvg,
  githubSvg
} from './assets/logos';

const LinkBlockInner = styled.div`
  display: flex;
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

const StyledCard = styled(Card)`
  display: block;
  width: 210px;
`;

type LinkType = 'npm' | 'zeroheight' | 'figma' | 'slack' | 'github';

type StorybookLinkProps = {
  href: string;
  children?: ReactNode;
  text: string;
  linkType: LinkType;
};

export const StorybookLink = ({ text, href, linkType }: StorybookLinkProps) => (
  <StyledCard cardType="navigation" color="strokeLight" href={href}>
    <LinkBlockInner>
      {linkType === 'npm' && npmSvg}
      {linkType === 'zeroheight' && zeroheightSvg}
      {linkType === 'figma' && figmaSvg}
      {linkType === 'slack' && slackSvg}
      {linkType === 'github' && githubSvg}
      <Typography typographyType="headingSans01" as="span">
        {text}
      </Typography>
    </LinkBlockInner>
  </StyledCard>
);
