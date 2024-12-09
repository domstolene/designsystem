import { type HTMLAttributes, type ReactNode } from 'react';

import styles from './EmptyContent.module.css';
import { cn } from '../../utils';
import { Heading, type HeadingLevel, Paragraph } from '../Typography';

export type EmptyContentProps = {
  /**Tittel - kort oppsummering. */
  title?: string;
  /**Nivå på overskriften. Sørg for at den følger hierarkiet på siden.
   * @default 2
   */
  titleHeadingLevel?: HeadingLevel;
  /**Melding - beskrivelse og forklaring på hvordan brukeren kan få innhold. Kan inneholde lenker og andre interaktive elementer. */
  message: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function EmptyContent({
  title,
  message,
  titleHeadingLevel = 2,
  className,
  ...rest
}: EmptyContentProps) {
  return (
    <div {...rest} className={cn(className, styles.containter)}>
      <div className={styles.text}>
        {title && (
          <Heading level={titleHeadingLevel} typographyType="headingMedium">
            {title}
          </Heading>
        )}
        <Paragraph className={styles.message}>{message}</Paragraph>
      </div>
    </div>
  );
}

EmptyContent.displayName = 'EmptyContent';
