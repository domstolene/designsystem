import styles from './LocalMessage.module.css';
import { type BaseComponentProps } from '../../../types';
import { type ResponsiveProps } from '../../layout';
import { type ResponsiveGridProps } from '../../layout/common/Responsive.types';
import { MessageBase } from '../MessageBase';
import {
  type CommonMessageProps,
  MESSAGE_PURPOSES,
} from '../MessageBase/MessageBase';

export const L_MESSAGE_PURPOSES = MESSAGE_PURPOSES;

export type LocalMessagePurpose = (typeof L_MESSAGE_PURPOSES)[number];

export type LocalMessageLayout = 'horisontal' | 'vertical';

export type LocalMessageProps = BaseComponentProps<
  HTMLDivElement,
  CommonMessageProps & {
    /**Formålet med meldingen. Påvirker styling.
     * @default "info"
     */
    purpose?: LocalMessagePurpose;
    /**Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`.
     * @default "horisontal"
     */
    layout?: LocalMessageLayout;
  } & Pick<ResponsiveProps, 'width'>
>;

export const LocalMessage = ({
  layout = 'horisontal',
  ...rest
}: LocalMessageProps) => {
  type GridLayout =
    | LocalMessageLayout
    | 'horisontal-closable'
    | 'horisontal-heading'
    | 'vertical-heading'
    | 'vertical-closable'
    | 'horisontal-closable-heading'
    | 'vertical-closable-heading';

  const gridLayout: GridLayout = `${layout}${rest.closable ? '-closable' : ''}${rest.heading ? '-heading' : ''}`;

  const containerGridTemplateStyles: Record<
    GridLayout,
    Partial<ResponsiveGridProps>
  > = {
    horisontal: {
      gridTemplateAreas: `"icon text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'horisontal-closable': {
      gridTemplateAreas: `"icon text close-btn"`,
      gridTemplateColumns: 'min-content 1fr min-content',
    },
    'horisontal-heading': {
      gridTemplateAreas: `"icon heading" ". text"`,
      gridTemplateColumns: 'min-content 1fr',
    },
    'horisontal-closable-heading': {
      gridTemplateAreas: `"icon heading close-btn" ". text text"`,
      gridTemplateColumns: 'min-content 1fr min-content',
    },
    vertical: {
      gridTemplateAreas: `"icon" "text"`,
      gridTemplateColumns: '1fr',
    },
    'vertical-closable': {
      gridTemplateAreas: `"icon close-btn" "text text"`,
      gridTemplateColumns: '1fr min-content',
    },
    'vertical-heading': {
      gridTemplateAreas: `"icon" "heading" "text"`,
      gridTemplateColumns: '1fr',
    },
    'vertical-closable-heading': {
      gridTemplateAreas: `"icon close-btn" "heading heading" "text text"`,
      gridTemplateColumns: '1fr min-content',
    },
  };

  const hasDenseLayout =
    gridLayout === 'vertical' || gridLayout === 'vertical-closable';

  return (
    <MessageBase
      gridLayout={gridLayout}
      containerGridTemplateStyles={containerGridTemplateStyles}
      className={styles.container}
      padding="x0.75 x0.75 x0.75 x0.5"
      rowGap={hasDenseLayout ? 'x0.25' : 'x0.5'}
      columnGap="x0.5"
      {...rest}
    />
  );
};

LocalMessage.displayName = 'LocalMessage';
