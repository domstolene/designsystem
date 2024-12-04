import { forwardRef } from 'react';

import styles from './DescriptionList.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';

export type DescriptionListDescProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**Ikon som vises ved siden av teksten. */
    icon?: SvgIcon;
  }
>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>((props, ref) => {
  const { children, icon, id, className, htmlProps, ...rest } = props;

  return (
    <dd
      ref={ref}
      {...getBaseHTMLProps(id, cn(className, styles.desc), htmlProps, rest)}
    >
      {icon && <Icon icon={icon} />} {children}
    </dd>
  );
});

DescriptionListDesc.displayName = 'DescriptionListDesc';
