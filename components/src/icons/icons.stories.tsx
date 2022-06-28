import styled from 'styled-components';
import { IconWrapper2 } from '../components/IconWrapper';
import { Typography } from '../components/Typography';
import { StoryTemplate } from '../storybook';
import { IconName, iconPaths } from './icons';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

export default {
  title: 'Icons/Overview'
};

const IconContainer = styled.div`
  padding: ${spacing.SizesDdsSpacingLocalX05}
    ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX025};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacing.SizesDdsSpacingLocalX075};
  width: 70px;
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${spacing.SizesDdsSpacingLocalX075};
  max-width: 800px;
`;

const Name = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

export const Overview = () => {
  return (
    <StoryTemplate title="Icons - overview" display="block">
      <OverviewContainer>
        {Object.keys(iconPaths)
          .sort()
          .map(e => (
            <IconContainer>
              <IconWrapper2
                iconSize="large"
                iconName={e as IconName}
                title={e}
              />
              <Name typographyType="supportingStyleTiny01" title={e}>
                {e}
              </Name>
            </IconContainer>
          ))}
      </OverviewContainer>
    </StoryTemplate>
  );
};
