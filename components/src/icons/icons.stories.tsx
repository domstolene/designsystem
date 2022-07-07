import styled from 'styled-components';
import { Icon, IconName } from '../components/Icon';
import { Typography } from '../components/Typography';
import { StoryTemplate } from '../storybook';
import { iconPaths } from './icons';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { LocalMessage } from '../components/LocalMessage';
import { useEffect, useState } from 'react';

const { colors, spacing } = ddsBaseTokens;

export default {
  title: 'Icons/Overview'
};

const IconContainer = styled.div`
  padding: ${spacing.SizesDdsSpacingLocalX05}
    ${spacing.SizesDdsSpacingLocalX025};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: ${spacing.SizesDdsSpacingLocalX075};
  width: 80px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.DdsColorInteractiveLightest};
  }
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${spacing.SizesDdsSpacingLocalX05};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.SizesDdsSpacingLayoutX15};
  max-width: 800px;
  margin: auto;
`;

const Name = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

const MessageWrapper = styled.div`
  position: sticky;
  top: 10%;
`;

export const Overview = () => {
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    const timer = setTimeout(() => setName(undefined), 5000);
    return () => clearTimeout(timer);
  }, [name]);

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name);
    setName(name);
  };

  return (
    <StoryTemplate title="Icons - overview" display="block">
      <Container>
        <Typography typographyType="bodySans03">
          Klikk på ikonet for å kopiere navnet til utklippstavlen.
        </Typography>
        {name && (
          <MessageWrapper>
            <LocalMessage
              purpose="success"
              width="100%"
              message={`Ikonnavnet "${name}" ble kopiert til utklippstavlen.`}
            />
          </MessageWrapper>
        )}
        <OverviewContainer>
          {Object.keys(iconPaths)
            .sort()
            .map(e => (
              <IconContainer key={e} onClick={() => copyName(e)}>
                <Icon
                  iconSize="large"
                  iconName={e as IconName}
                  htmlProps={{ title: e }}
                />
                <Name
                  typographyType="supportingStyleTiny01"
                  htmlProps={{ title: e }}
                >
                  {e}
                </Name>
              </IconContainer>
            ))}
        </OverviewContainer>
      </Container>
    </StoryTemplate>
  );
};
