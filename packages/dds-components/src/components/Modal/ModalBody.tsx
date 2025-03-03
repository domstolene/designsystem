import { type Property } from 'csstype';

import styles from './Modal.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';

export type ModalBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.  */
    scrollable?: boolean;
    /**Høyde på container. Kan resultere i scrolling. */
    height?: Property.Height;
  }
>;

export const ModalBody = ({
  children,
  id,
  className,
  scrollable,
  htmlProps,
  height,
  ...rest
}: ModalBodyProps) => {
  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          utilStyles.scrollbar,
          scrollable && utilStyles['scrollable-y'],
          styles.body,
        ),
        htmlProps,
        rest,
      )}
      style={{ ...htmlProps?.style, height: height }}
    >
      {children}
    </div>
  );
};

ModalBody.displayName = 'ModalBody';
