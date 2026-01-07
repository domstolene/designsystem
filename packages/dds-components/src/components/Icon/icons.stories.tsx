import { type Meta } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import { ICON_SIZES, Icon } from './Icon';
import { CopyIcon } from './icons/copy';
import styles from './IconStory.module.css';
import {
  Box,
  HStack,
  InlineButton,
  StylelessButton,
  ToggleBar,
  ToggleRadio,
  VStack,
  cn,
  icons,
} from '../..';
import { type SvgIcon } from './utils';
import { StoryLabel, ddsProviderDecorator } from '../../storybook';
import { Button } from '../Button';
import { focusable } from '../helpers/styling/focus.module.css';
import { StoryVStack } from '../layout/Stack/utils';
import { LocalMessage } from '../LocalMessage';
import { Modal, ModalBody } from '../Modal';
import { Heading, Typography } from '../Typography';

const meta: Meta = {
  title: 'Icons/Overview',
  parameters: { docs: { canvas: { sourceState: 'none' } } },
  decorators: [ddsProviderDecorator],
};

export default meta;

export const Overview = () => {
  interface IconState {
    name: string;
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
          onClick={() => onIconClick({ name, icon })}
          title={trimmedName}
          className={cn(styles.card, focusable)}
        >
          <Icon iconSize="large" icon={icon} />
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
  const useCode = `<Icon icon={${iconState?.name}} ${availableStates.length > 0 ? `iconState='${availableStates[0]}'` : ''} />`;
  const copyConfirmation = (type: string) => (
    <div className={styles.message}>
      <LocalMessage width="fit-content" purpose="success">
        kopiert {type}
      </LocalMessage>
    </div>
  );

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
        header={iconState?.name && trim(iconState.name)}
      >
        <ModalBody>
          {iconState && (
            <>
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

              <HStack justifyContent="center" gap="x1" alignItems="end">
                {ICON_SIZES.map(size => (
                  <StoryVStack>
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
                  </StoryVStack>
                ))}
                <StoryVStack>
                  <Button
                    icon={iconState.icon}
                    iconState={
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      availableStates.length ? (currentState as any) : undefined
                    }
                  />
                  <StoryLabel>I Button</StoryLabel>
                </StoryVStack>
              </HStack>
            </>
          )}
          <div className={styles['group-header']}>
            <Heading level={3} typographyType="headingSmall" withMargins>
              Import
              <Box
                as={InlineButton}
                marginInline="x0.5"
                icon={CopyIcon}
                aria-label="Kopier import"
                onClick={() => handleCopyImport(importCode)}
              />
            </Heading>
            {copiedImport && copyConfirmation('import')}
          </div>
          <div className={styles['code-block']}>
            <code className={cn(styles['icon-code'], 'icon-code')}>
              {importCode}
            </code>
          </div>
          <div className={styles['group-header']}>
            <Heading level={3} typographyType="headingSmall" withMargins>
              Bruk
              <Box
                as={InlineButton}
                marginInline="x0.5"
                icon={CopyIcon}
                aria-label="Kopier bruk"
                onClick={() => handleCopyUse(useCode)}
              />
            </Heading>
            {copiedUse && copyConfirmation('bruk')}
          </div>
          <div className={styles['code-block']}>
            <code className={cn(styles['icon-code'], 'icon-code')}>
              {useCode}
            </code>
          </div>
        </ModalBody>
      </Modal>
    </VStack>
  );
};
