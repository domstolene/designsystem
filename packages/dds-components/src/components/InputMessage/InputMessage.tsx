import { type ElementType } from 'react';

import styles from './InputMessage.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon';
import { ErrorIcon } from '../Icon/icons';
import { Box, type BoxProps, Paper, type ResponsiveProps } from '../layout';
import { Typography } from '../Typography/Typography/Typography';
import tgStyles from '../Typography/typographyStyles.module.css';

export type InputMessageType = 'error' | 'tip';

export type InputMessageProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Meldingen som vises til brukeren. */
    message?: string;
    /** Formålet med meldingen. Påvirker styling.
     * @default "error"
     */
    messageType: InputMessageType;
  } & Pick<ResponsiveProps, 'margin' | 'marginInline' | 'marginBlock'>
>;

export const InputMessage = ({
  message,
  messageType,
  id,
  className,
  htmlProps,
  children,
  ...rest
}: InputMessageProps) => {
  const isError = messageType === 'error';

  const commonProps: BoxProps = {
    display: 'flex',
    width: 'fit-content',
    maxWidth: '100%',
    wordBreak: 'break-word',
    ...getBaseHTMLProps(id, cn(className, styles.container), htmlProps, rest),
  };

  const tgCommonProps = {
    as: 'span' as ElementType,
    children: message ?? children,
  };

  return isError ? (
    <Paper
      {...commonProps}
      gap="x0.25"
      padding="x0.25 x0.5"
      background="surface-danger-default"
      borderRadius="surface"
      className={tgStyles['body-short-small']}
    >
      <Icon
        icon={ErrorIcon}
        iconSize="component"
        color="icon-on-danger-default"
      />
      {tgCommonProps.children}
    </Paper>
  ) : (
    <Box {...commonProps}>
      <Typography
        {...tgCommonProps}
        typographyType="bodyShortXsmall"
        color="textSubtle"
      />
    </Box>
  );
};

InputMessage.displayName = 'InputMessage';

interface RenderInputMessageProps {
  tip?: string;
  tipId?: string;
  errorMessage?: string;
  errorMessageId?: string;
  noSpacing?: boolean;
}

export const renderInputMessage = ({
  tip,
  tipId,
  errorMessage,
  errorMessageId,
  noSpacing,
}: RenderInputMessageProps) => (
  <>
    {errorMessage && (
      <InputMessage
        message={errorMessage}
        messageType="error"
        id={errorMessageId}
        marginBlock={!noSpacing ? 'x0.125 0' : undefined}
      />
    )}
    {tip && !errorMessage && (
      <InputMessage message={tip} messageType="tip" id={tipId} />
    )}
  </>
);
