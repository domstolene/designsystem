import { type Meta } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import { ICON_SIZES, Icon } from '../Icon';
import styles from './icons.module.css';
import { type IconName, iconSvgs } from './icons.utils';
import {
  Box,
  CheckIcon,
  DownloadIcon,
  HStack,
  Paper,
  StylelessButton,
  ToggleBar,
  ToggleRadio,
  VStack,
  cn,
  icons,
} from '../../..';
import { StoryLabel, ddsProviderDecorator } from '../../../storybook';
import { Button } from '../../Button';
import { focusable } from '../../helpers/styling/focus.module.css';
import { LocalMessage } from '../../LocalMessage';
import { Modal, ModalBody } from '../../Modal';
import { Heading, Typography } from '../../Typography';
import { CopyIcon } from '../icons/copy';
import { type SvgIcon } from '../utils';

const meta: Meta = {
  title: 'Icons/Overview',
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
};

export default meta;

export const Overview = () => {
  interface IconState {
    name: IconName;
    icon: SvgIcon;
  }

  const hasStates = (
    icon: SvgIcon,
  ): icon is SvgIcon & { states: ReadonlyArray<string> } => 'states' in icon;

  const [iconState, setIconState] = useState<IconState | undefined>();
  const [currentState, setCurrentState] = useState<string | undefined>(
    undefined,
  );
  const [closed, setClosed] = useState(true);
  const [copiedUse, setCopiedUse] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const close = () => setClosed(true);

  useEffect(() => {
    const timer = setTimeout(() => setCopiedUse(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedUse]);

  useEffect(() => {
    const timer = setTimeout(() => setCopiedImport(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedImport]);

  const onIconClick = (props: IconState) => {
    setIconState(props);
    if (hasStates(props.icon)) {
      setCurrentState(props.icon.states[0]);
    } else {
      setCurrentState(undefined);
    }
    setClosed(false);
  };

  const availableStates: ReadonlyArray<string> =
    iconState && hasStates(iconState.icon) ? iconState.icon.states : [];

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const trim = (name: string) => name.replace('Icon', '');

  const downloadSvg = (name: IconName, svg: string) => {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${trim(name)}.svg`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleCopyUse = (text: string) => {
    copy(text);
    setCopiedUse(true);
  };

  const handleCopyImport = (text: string) => {
    copy(text);
    setCopiedImport(true);
  };

  const iconOverview = () => {
    return Object.entries(icons).map(([name, icon]) => {
      const trimmedName = trim(name);
      return (
        <VStack
          as={StylelessButton}
          position="relative"
          justifyContent="center"
          alignItems="center"
          gap="x0.75"
          height="6rem"
          width={{ xs: '5rem', sm: '5rem', md: '5rem', lg: '5rem', xl: '6rem' }}
          key={name}
          onClick={() => onIconClick({ name, icon } as IconState)}
          title={trimmedName}
          className={cn(styles.card, focusable)}
        >
          <Icon iconSize="large" icon={icon} color="icon-default" />
          <Typography
            typographyType="bodyShortXsmall"
            className={styles.card__name}
          >
            {trimmedName}
          </Typography>
          {hasStates(icon) && (
            <Box
              position="absolute"
              top="0"
              right="0"
              className={styles.card__badge}
              width="max-content"
              padding="x0.125"
            >
              <Typography typographyType="bodyShortXsmall">
                ✨ animert
              </Typography>
            </Box>
          )}
        </VStack>
      );
    });
  };

  const importCode = `import { ${iconState?.name} } from '@norges-domstoler/dds-components';`;
  const useCode = `<Icon icon={${iconState?.name}}${availableStates.length > 0 ? ` iconState='${availableStates[0]}'` : ''} />`;

  return (
    <VStack
      gap="x1"
      margin="auto"
      position="relative"
      maxWidth={{
        xs: '800px',
        sm: '800px',
        md: '800px',
        lg: '1100px',
        xl: '1350px',
      }}
    >
      <Typography typographyType="bodyShortSmall">
        Antall ikoner: {Object.keys(icons).length}
      </Typography>
      <LocalMessage>
        Klikk på ikonet for mer info. Animerte ikoner bruker{' '}
        <code>iconState</code> prop for å animere mellom tilstander.
      </LocalMessage>
      <div className={styles.overview}>{iconOverview()}</div>
      <Modal
        isOpen={!closed}
        onClose={close}
        header={
          iconState?.name && (
            <Heading level={2}>
              <Icon
                icon={iconState.icon}
                iconSize="component"
                className={styles.header__icon}
              />{' '}
              {trim(iconState.name)}
            </Heading>
          )
        }
      >
        {iconState && (
          <ModalBody>
            {iconSvgs[iconState.name] && (
              <Button
                purpose="secondary"
                onClick={() =>
                  downloadSvg(iconState.name, iconSvgs[iconState.name])
                }
                icon={DownloadIcon}
              >
                Last ned SVG
              </Button>
            )}
            <Paper
              as="section"
              border="border-subtle"
              background="surface-medium"
              marginBlock="x1"
            >
              <HStack
                as={Heading}
                level={3}
                typographyType="headingSmall"
                justifyContent="space-between"
                paddingInline=" x0.5"
                alignItems="center"
              >
                <span>Import</span>
                <Box
                  as={Button}
                  purpose="tertiary"
                  size="small"
                  marginInline="x0.5 0"
                  icon={copiedImport ? CheckIcon : CopyIcon}
                  aria-label={`Kopier${copiedImport ? 't' : ''} import`}
                  onClick={() => handleCopyImport(importCode)}
                />
              </HStack>

              <Paper
                className={styles['code-paper']}
                background="surface-default"
                borderRadius="0"
              >
                <pre className={cn(styles['icon-code'], 'icon-code')}>
                  {importCode}
                </pre>
              </Paper>
            </Paper>
            <Paper
              as="section"
              border="border-subtle"
              background="surface-medium"
              marginBlock="x1"
            >
              <HStack
                as={Heading}
                level={3}
                typographyType="headingSmall"
                justifyContent="space-between"
                paddingInline=" x0.5 0"
                alignItems="center"
              >
                <span>Bruk i kode</span>
                <Box
                  as={Button}
                  purpose="tertiary"
                  size="small"
                  marginInline="x0.5"
                  icon={copiedUse ? CheckIcon : CopyIcon}
                  aria-label={`Kopier${copiedUse ? 't' : ''} use`}
                  onClick={() => handleCopyUse(useCode)}
                />
              </HStack>

              <Paper
                className={styles['code-paper']}
                background="surface-default"
                borderRadius="0"
              >
                <pre className={cn(styles['icon-code'], 'icon-code')}>
                  {useCode}
                </pre>
              </Paper>
            </Paper>

            <Heading level={3} withMargins>
              Størrelser
            </Heading>
            {availableStates.length !== 0 && (
              <Box width="fit-content" marginBlock="0 x1">
                <ToggleBar
                  size="xsmall"
                  value={currentState}
                  onChange={(_event, state) => {
                    if (state) setCurrentState(state);
                  }}
                  label="Tilstand"
                >
                  {availableStates.map(s => (
                    <ToggleRadio key={s} value={s} label={s} />
                  ))}
                </ToggleBar>
              </Box>
            )}
            <HStack gap="x1" alignItems="end">
              {ICON_SIZES.map(size => (
                <VStack>
                  <Icon
                    icon={iconState.icon}
                    iconSize={size}
                    iconState={
                      availableStates.length
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (currentState as any)
                        : undefined
                    }
                  />
                  <StoryLabel>{size}</StoryLabel>
                </VStack>
              ))}
              <VStack>
                <Button
                  icon={iconState.icon}
                  iconState={
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    availableStates.length ? (currentState as any) : undefined
                  }
                />
                <StoryLabel>I Button</StoryLabel>
              </VStack>
            </HStack>
          </ModalBody>
        )}
      </Modal>
    </VStack>
  );
};
