import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';
import { CopyIcon } from './icons/copy';
import { type SvgIcon, type SvgProps } from './utils';
import { icons } from '../..';
import { Button } from '../Button';
import { LocalMessage } from '../LocalMessage';
import { Modal, ModalBody } from '../Modal';
import { Typography } from '../Typography';

const { colors, spacing, borderRadius } = ddsBaseTokens;

export default {
  title: 'Icons/Overview',
};

const IconContainer = styled.div`
  padding: ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX025};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: ${spacing.SizesDdsSpacingX075};
  width: 80px;
  @media only screen and (min-width: 1400px) {
    width: 100px;
  }
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
  gap: ${spacing.SizesDdsSpacingX05};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.SizesDdsSpacingX15};
  max-width: 800px;
  margin: auto;
  @media only screen and (min-width: 1400px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1350px;
  }
`;

const Name = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

const MessageWrapper = styled.div`
  position: absolute;
  right: 50%;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.SizesDdsSpacingX025};
  position: relative;
`;

const CodeBlock = styled.div`
  background-color: ${colors.DdsColorNeutralsGray8};
  padding: ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX1};
  margin: ${spacing.SizesDdsSpacingX1} 0;
  border-radius: ${borderRadius.RadiiDdsBorderRadius1Radius};
  code {
    color: white;
  }
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spacing.SizesDdsSpacingX05};
  margin-bottom: ${spacing.SizesDdsSpacingX1};
`;

export const Overview = () => {
  const [iconState, setIconState] = useState<
    { name: string; icon: SvgIcon } | undefined
  >();
  const [closed, setClosed] = useState(true);
  const [copiedUse, setCopiedUse] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const close = () => {
    setClosed(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCopiedUse(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedUse]);

  useEffect(() => {
    const timer = setTimeout(() => setCopiedImport(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedImport]);

  const onIconClick = (name: string, icon: SvgIcon) => {
    setIconState({ name: name, icon: icon });
    setClosed(false);
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const trim = (name: string) => {
    return name.replace('Icon', '');
  };

  const handleCopyUse = (text: string) => {
    copy(text);
    setCopiedUse(true);
  };

  const handleCopyImport = (text: string) => {
    copy(text);
    setCopiedImport(true);
  };

  const iconsObject = icons as Record<string, (props: SvgProps) => JSX.Element>;

  const iconOverview = () => {
    return Object.entries(iconsObject).map(([key, value]) => {
      const trimmedName = trim(key);
      return (
        <IconContainer
          key={key}
          onClick={() => onIconClick(key, value)}
          title={trimmedName}
        >
          <Icon iconSize="large" icon={value} />
          <Name typographyType="supportingStyleTiny01">{trimmedName}</Name>
        </IconContainer>
      );
    });
  };

  const importCode = `import { ${iconState?.name} } from '@norges-domstoler/dds-components';`;
  const useCode = `<Icon icon={${iconState?.name}} />`;
  const copyConfirmation = (
    <MessageWrapper>
      <LocalMessage width="fit-content" message="kopiert" purpose="success" />
    </MessageWrapper>
  );

  return (
    <StoryTemplate title="Icons - overview" display="block">
      <Container>
        <Typography typographyType="bodySans03">
          Klikk på ikonet for mer info.
        </Typography>
        <Typography typographyType="supportingStyleHelperText01">
          Antall ikoner: {Object.keys(iconsObject).length}
        </Typography>
        <OverviewContainer>{iconOverview()}</OverviewContainer>
        <Modal
          isOpen={!closed}
          onClose={close}
          header={iconState?.name && trim(iconState.name)}
        >
          <ModalBody>
            {iconState && (
              <IconRow>
                <Icon icon={iconState.icon} iconSize="small" />
                <Icon icon={iconState.icon} iconSize="medium" />
                <Icon icon={iconState.icon} iconSize="large" />
                <Button icon={iconState.icon} />
              </IconRow>
            )}
            <GroupHeader>
              <Typography typographyType="headingSans02">Import</Typography>
              <Button
                icon={CopyIcon}
                size="tiny"
                appearance="borderless"
                onClick={() => handleCopyImport(importCode)}
              />
              {copiedImport && copyConfirmation}
            </GroupHeader>
            <CodeBlock className="icon-code">
              <code>{importCode}</code>
            </CodeBlock>
            <GroupHeader>
              <Typography typographyType="headingSans02">Bruk</Typography>
              <Button
                icon={CopyIcon}
                size="tiny"
                appearance="borderless"
                onClick={() => handleCopyUse(useCode)}
              />
              {copiedUse && copyConfirmation}
            </GroupHeader>
            <CodeBlock className="icon-code">
              <code>{useCode}</code>
            </CodeBlock>
          </ModalBody>
        </Modal>
      </Container>
    </StoryTemplate>
  );
};
