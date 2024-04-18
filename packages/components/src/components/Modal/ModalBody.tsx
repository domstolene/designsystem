import { type Property } from 'csstype';
import { forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { ScrollableContainer } from '../ScrollableContainer';

export type ModalBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.  */
    scrollable?: boolean;
    /**Høyde på container. */
    height?: Property.Height;
  }
>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    const { children, scrollable, id, className, htmlProps, height, ...rest } =
      props;

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
    };

    return scrollable ? (
      <div {...containerProps}>
        <ScrollableContainer contentHeight={height}>
          {children}
        </ScrollableContainer>
      </div>
    ) : (
      <div {...containerProps}>{children}</div>
    );
  },
);

ModalBody.displayName = 'ModalBody';
