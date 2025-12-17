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

export const DescriptionListDesc = ({
  children,
  icon,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: DescriptionListDescProps) => (
  <dd
    {...getBaseHTMLProps(
      id,
      cn(className, styles.desc),
      style,
      htmlProps,
      rest,
    )}
  >
    {icon && <Icon icon={icon} />} {children}
  </dd>
);

DescriptionListDesc.displayName = 'DescriptionListDesc';
