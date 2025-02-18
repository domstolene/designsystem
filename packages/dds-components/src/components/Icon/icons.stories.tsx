import { type JSX, useEffect, useState } from 'react';

import { Icon } from './Icon';
import { CopyIcon } from './icons/copy';
import styles from './IconStory.module.css';
import { type SvgIcon, type SvgProps } from './utils';
import { cn, icons } from '../..';
import { Button } from '../Button';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { LocalMessage } from '../LocalMessage';
import { Modal, ModalBody } from '../Modal';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';
import { Heading, Typography } from '../Typography';

export default {
  title: 'Icons/Overview',
};

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
        <button
          key={key}
          onClick={() => onIconClick(key, value)}
          title={trimmedName}
          className={cn(
            styles.card,
            utilStyles['remove-button-styling'],
            focusable,
          )}
        >
          <Icon iconSize="large" icon={value} />
          <Typography typographyType="bodyXsmall" className={styles.card__name}>
            {trimmedName}
          </Typography>
        </button>
      );
    });
  };

  const importCode = `import { ${iconState?.name} } from '@norges-domstoler/dds-components';`;
  const useCode = `<Icon icon={${iconState?.name}} />`;
  const copyConfirmation = (type: string) => (
    <div className={styles.message}>
      <LocalMessage
        width="fit-content"
        message={`kopiert ${type}`}
        purpose="success"
      />
    </div>
  );

  return (
    <StoryThemeProvider>
      <div className={styles.page}>
        <LocalMessage message="Klikk på ikonet for mer info."></LocalMessage>
        <Typography typographyType="bodySmall">
          Antall ikoner: {Object.keys(iconsObject).length}
        </Typography>
        <div className={styles.overview}>{iconOverview()}</div>
        <Modal
          isOpen={!closed}
          onClose={close}
          header={iconState?.name && trim(iconState.name)}
        >
          <ModalBody>
            {iconState && (
              <div className={styles['icon-row']}>
                <Icon icon={iconState.icon} iconSize="small" />
                <Icon icon={iconState.icon} iconSize="medium" />
                <Icon icon={iconState.icon} iconSize="large" />
                <Button icon={iconState.icon} />
              </div>
            )}
            <div className={styles['group-header']}>
              <Heading level={3} typographyType="headingSmall">
                Import
              </Heading>
              <Button
                icon={CopyIcon}
                size="xsmall"
                purpose="tertiary"
                onClick={() => handleCopyImport(importCode)}
              />
              {copiedImport && copyConfirmation('import')}
            </div>
            <div className={styles['code-block']}>
              <code className={cn(styles['icon-code'], 'icon-code')}>
                {importCode}
              </code>
            </div>
            <div className={styles['group-header']}>
              <Heading level={3} typographyType="headingSmall">
                Bruk
              </Heading>
              <Button
                icon={CopyIcon}
                size="xsmall"
                purpose="tertiary"
                onClick={() => handleCopyUse(useCode)}
              />
              {copiedUse && copyConfirmation('bruk')}
            </div>
            <div className={styles['code-block']}>
              <code className={cn(styles['icon-code'], 'icon-code')}>
                {useCode}
              </code>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </StoryThemeProvider>
  );
};
