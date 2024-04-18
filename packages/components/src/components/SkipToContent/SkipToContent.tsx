import { type Property } from 'csstype';
import { forwardRef } from 'react';

import styles from './SkipToContent.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Link, defaultTypographyType } from '../Typography';

export type SkipToContentProps = BaseComponentProps<
  HTMLAnchorElement,
  {
    /** Teksten som vises i lenka. */
    text?: string;
    /**Spesifiserer hvor det skal hoppes til via `id`-attributtet til innholdet. */
    href: string;
    /**Avstand fra top i nærmeste posisjonert container. */
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
      <div
        className={cn(className, htmlPropsClassName, styles.wrapper)}
        style={{ ...style, top }}
      >
        <Link
          {...getBaseHTMLProps(id, restHtmlProps, rest)}
          typographyType={defaultTypographyType}
          ref={ref}
          className={cn(styles.link)}
        >
          {text}
        </Link>
      </div>
    );
  },
);

SkipToContent.displayName = 'SkipToContent';
