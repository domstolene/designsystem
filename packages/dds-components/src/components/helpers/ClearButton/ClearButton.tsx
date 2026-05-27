import { type HTMLRootProps } from '../../../types';
import { cn } from '../../../utils';
import { Button, type ButtonProps } from '../../Button';
import styles from '../../Button/Button.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { CloseSmallIcon } from '../../Icon/icons';
import { Box } from '../../layout';
import inputStyles from '../Input/Input.module.css';

type ClearButtonProps = {
  /**Om knappen bruker `position:absolute` med standard  styling. */
  absolute?: boolean;
  hasIconToRight?: boolean;
} & Pick<ButtonProps, 'onClick' | 'size' | 'aria-label' | keyof HTMLRootProps>;

export const ClearButton = ({
  className,
  absolute = true,
  hasIconToRight,
  size = 'medium',
  ...rest
}: ClearButtonProps) => (
  <Box
    as={Button}
    className={cn(
      className,
      styles.clear,
      absolute && utilStyles['center-absolute-y'],
      absolute && !hasIconToRight && inputStyles[`input-group__btn-right`],
      absolute &&
        hasIconToRight &&
        inputStyles[`input-group__btn-right-with-right-icon--${size}`],
    )}
    icon={CloseSmallIcon}
    purpose="tertiary"
    type="button"
    size={size}
    {...rest}
  />
);

ClearButton.displayName = 'ClearButton';
