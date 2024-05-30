import { type Properties, type Property } from 'csstype';
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import styles from './CardAccordion.module.css';
import { useCardAccordionContext } from './CardAccordionContext';
import { useElementHeight } from './useElementHeight';
import { useIsMounted } from '../../../hooks';
import {
  type BaseComponentPropsWithChildren,
  type Nullable,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type CardAccordionBodyProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Overskriver default padding. */
      padding?: Property.Padding<string>;
    }
  >,
  'id'
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, className, htmlProps, padding, ...rest } = props;

  const { headerId, isExpanded, bodyId: id } = useCardAccordionContext();

  const bodyRef = useRef<HTMLDivElement>(null);

  const [animate, setAnimate] = useState(false);

  const isMounted = useIsMounted();
  const height = useElementHeight(bodyRef.current);

  const [initialExpandedHeight, setIntialExpandedHeight] =
    useState<Nullable<number>>(null);

  useLayoutEffect(() => {
    // For å unngå initiell animasjon dersom Accordion er satt til å være åpen som default.
    if (bodyRef.current && isExpanded) {
      setIntialExpandedHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isMounted()) {
      setAnimate(true);
    }
  }, [isMounted]);

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-body-height' as any]:
      (height ?? initialExpandedHeight ?? 0) + 'px',
  };

  const contentStyleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-card-accordion-body-content-padding' as any]:
      padding ??
      'var(--dds-spacing-x1) calc(var(--dds-spacing-x2) + var(--dds-spacing-x0-75)) var(--dds-spacing-x2) var(--dds-spacing-x1-5)',
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.body,
          !isExpanded && styles['body--hidden'],
          animate && styles['body--animated'],
          typographyStyles['body-sans-03'],
        ),
        htmlProps,
        rest,
      )}
      ref={ref}
      role="region"
      aria-labelledby={headerId}
      aria-hidden={!isExpanded}
      style={{ ...htmlProps?.style, ...styleVariables }}
    >
      <div
        ref={bodyRef}
        className={styles.body__content}
        style={contentStyleVariables}
      >
        {children}
      </div>
    </div>
  );
});

CardAccordionBody.displayName = 'CardAccordionBody';
