import styles from './Modal.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Box, type ResponsiveProps } from '../layout';

export type ModalBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.  */
    scrollable?: boolean;
    /**Høyde på container. Kan resultere i scrolling. */
    height?: ResponsiveProps['height'];
  }
>;

export const ModalBody = ({
  children,
  id,
  className,
  style,
  scrollable,
  htmlProps,
  height,
  ...rest
}: ModalBodyProps) => {
  return (
    <Box
      height={height}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          utilStyles.scrollbar,
          scrollable && utilStyles['scrollable-y'],
          styles.body,
        ),
        style,
        htmlProps,
        rest,
      )}
    >
      {children}
    </Box>
  );
};

ModalBody.displayName = 'ModalBody';
