import styles from './Contrast.module.css';
import { ElementAs, type PolymorphicProps } from '../../polymorphic';
import { cn } from '../../utils';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type ContrastProps<T extends React.ElementType> = PolymorphicProps<T>;

export const Contrast = <T extends React.ElementType>({
  className,
  as = 'div',
  ...rest
}: ContrastProps<T>) => {
  return (
    <ElementAs
      as={as}
      className={cn(className, typographyStyles.contrast, styles.container)}
      {...rest}
    />
  );
};
