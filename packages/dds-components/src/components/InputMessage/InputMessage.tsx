import { type ElementType, type ReactNode } from 'react';

import styles from './InputMessage.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon';
import { ErrorIcon } from '../Icon/icons';
import { Box, type BoxProps, Paper, type ResponsiveProps } from '../layout';
import { Typography } from '../Typography/Typography/Typography';

export type InputMessageType = 'error' | 'tip';

export type InputMessageProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Innhold. */
    children?: ReactNode;
    /** Formålet med meldingen. Påvirker styling.
     * @default "error"
     */
    messageType: InputMessageType;
  } & Pick<ResponsiveProps, 'margin' | 'marginInline' | 'marginBlock'>
>;

export const InputMessage = ({
  messageType,
  id,
  className,
  style,
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
    ...getBaseHTMLProps(
      id,
      cn(className, styles.container),
      style,
      htmlProps,
      rest,
    ),
  };

  const tgCommonProps = {
    as: 'span' as ElementType,
    children,
  };

  return isError ? (
    <Paper
      {...commonProps}
      gap="x0.25"
      padding="x0.25 x0.5"
      background="surface-danger-default"
      borderRadius="surface"
    >
      <Icon
        icon={ErrorIcon}
        iconSize="small"
        className={styles.icon}
        color="icon-on-danger-default"
      />
      <Typography
        {...tgCommonProps}
        typographyType="bodySmall"
        color="text-default"
      />
    </Paper>
  ) : (
    <Box {...commonProps}>
      <Typography
        {...tgCommonProps}
        typographyType="bodyXsmall"
        color="text-subtle"
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
        messageType="error"
        id={errorMessageId}
        marginBlock={!noSpacing ? 'x0.125 0' : undefined}
      >
        {errorMessage}
      </InputMessage>
    )}
    {tip && !errorMessage && (
      <InputMessage messageType="tip" id={tipId}>
        {tip}
      </InputMessage>
    )}
  </>
);
