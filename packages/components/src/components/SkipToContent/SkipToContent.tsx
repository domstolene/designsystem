import { type Property } from 'csstype';
import { forwardRef } from 'react';

import styles from './SkipToContent.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
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

export const SkipToContent = forwardRef<HTMLAnchorElement, SkipToContentProps>(
  (props, ref) => {
    const {
      text = 'Til hovedinnhold',
      top = 0,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const {
      className: htmlPropsClassName,
      style,
      ...restHtmlProps
    } = htmlProps;

    return (
      <Contrast
        className={cn(className, htmlPropsClassName, styles.wrapper)}
        style={{ ...style, top }}
      >
        <Link {...getBaseHTMLProps(id, restHtmlProps, rest)} ref={ref}>
          {text}
        </Link>
      </Contrast>
    );
  },
);

SkipToContent.displayName = 'SkipToContent';
