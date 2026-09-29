import styles from './DescriptionList.module.css';
import { Box } from '../..';
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
  <Box
    {...getBaseHTMLProps(
      id,
      cn(className, styles.desc),
      style,
      htmlProps,
      rest,
    )}
    as="dd"
    display="flex"
    alignItems="center"
    gap="x0.25"
    marginInline="x0"
  >
    {icon && <Icon icon={icon} />} {children}
  </Box>
);

DescriptionListDesc.displayName = 'DescriptionListDesc';
