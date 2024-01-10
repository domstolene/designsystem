import { ReactNode } from 'react';
import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const Blockquote = styled.blockquote`
  border-left: 4px solid ${colors.DdsColorInteractiveBase};
  padding: ${spacing.SizesDdsSpacingX05};
  text-align: left;
`;

interface Props {
  children: ReactNode;
}

export const Quote = (props: Props) => {
  return <Blockquote>{props.children}</Blockquote>;
};
