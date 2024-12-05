import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';

export type FooterSocialsListProps = ComponentProps<'ul'>;

export const FooterSocialsList = forwardRef<
  HTMLUListElement,
  FooterSocialsListProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <ul
      ref={ref}
      className={cn(
        className,
        utilStyles['remove-list-styling'],
        styles['socials-list'],
      )}
      {...rest}
    />
  );
});
