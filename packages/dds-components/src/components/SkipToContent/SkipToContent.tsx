import { type Property } from 'csstype';

import styles from './SkipToContent.module.css';
import { type BaseComponentProps } from '../../types';
import { cn } from '../../utils';
import { Contrast } from '../Contrast';
import { Link } from '../Typography';

export type SkipToContentProps = BaseComponentProps<
  HTMLAnchorElement,
  {
    /** Teksten som vises i lenka.
     * @default "Til hovedinnhold"
     */
    text?: string;
    /**Spesifiserer hvor det skal hoppes til via `id`-attributtet til innholdet. */
    href: string;
    /**Avstand fra top i nærmeste posisjonert container.
     * @default 0
     */
    top?: Property.Top;
  }
>;

export const SkipToContent = ({
  text = 'Til hovedinnhold',
  top = 0,
  id,
  className,
  htmlProps,
  style,
  ...rest
}: SkipToContentProps) => {
  return (
    <Contrast
      padding="x0.25"
      position="absolute"
      textAlign="center"
      overflow="hidden"
      height="1px"
      width="1px"
      className={cn(className, styles.wrapper)}
      style={style}
      top={top}
    >
      <Link {...rest} {...htmlProps} id={id}
        typographyType="bodyShortMedium"
      >
        {text}
      </Link>
    </Contrast>
  );
};

SkipToContent.displayName = 'SkipToContent';
