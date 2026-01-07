import { type ElementType, type ReactNode } from 'react';

import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import { ErrorIcon } from '../Icon/icons';
import { Box, type BoxProps, Paper, type ResponsiveProps } from '../layout';
import { Typography } from '../Typography/Typography/Typography';
import tgStyles from '../Typography/typographyStyles.module.css';

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
    ...getBaseHTMLProps(id, className, style, htmlProps, rest),
  };

  const tgCommonProps = {
    as: 'span' as ElementType,
    children,
  };

  return isError ? (
    <Paper
      {...commonProps}
      gap="x0.125"
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
