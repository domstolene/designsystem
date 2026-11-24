import { type BaseComponentProps } from '../../../types';
import { type ResponsiveGridProps } from '../../layout/common/Responsive.types';
import { MESSAGE_PURPOSES, type MessagePurpose } from '../MessageBase';
import { MessageBase } from '../MessageBase';
import { type CommonMessageProps } from '../MessageBase/MessageBase';
import styles from './GlobalMessage.module.css';

export const G_MESSAGE_PURPOSES = MESSAGE_PURPOSES.filter(
  (purpose): purpose is Exclude<MessagePurpose, 'tips' | 'success'> =>
    purpose !== 'tips' && purpose !== 'success',
);

export type GlobalMessagePurpose = (typeof G_MESSAGE_PURPOSES)[number];

export type GlobalMessageProps = BaseComponentProps<
  HTMLDivElement,
  CommonMessageProps & {
    /**Formålet med meldingen. Påvirker styling.
     * @default "info"
     */
    purpose?: GlobalMessagePurpose;
  }
>;

export const GlobalMessage = (props: GlobalMessageProps) => {
  type GridLayout =
    | 'message'
    | 'message-closable'
    | 'message-heading'
    | 'message-closable-heading';

  const gridLayout: GridLayout = `message${props.closable ? '-closable' : ''}${props.heading ? '-heading' : ''}`;

  const containerGridTemplateStyles: Record<
    GridLayout,
    Partial<ResponsiveGridProps>
  > = {
    message: {
      gridTemplateAreas: `"icon text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'message-closable': {
      gridTemplateAreas: `"icon text close-btn"`,
      gridTemplateColumns: 'min-content 1fr min-content',
    },
    'message-heading': {
      gridTemplateAreas: `"icon heading" ". text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'message-closable-heading': {
      gridTemplateAreas: `"icon heading close-btn" ". text text"`,
      gridTemplateColumns: 'min-content 1fr min-content',
    },
  };

  return (
    <MessageBase
      gridLayout={gridLayout}
      containerGridTemplateStyles={containerGridTemplateStyles}
      className={styles.container}
      rowGap="x0.5"
      columnGap="x0.75"
      padding="x0.75"
      width="100%"
      {...props}
    />
  );
};

GlobalMessage.displayName = 'GlobalMessage';
