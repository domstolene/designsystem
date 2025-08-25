import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { CloseSmallIcon } from '../../Icon/icons';
import {
  InlineIconButton,
  type InlineIconButtonProps,
} from '../InlineIconButton';

type ClearButtonProps = {
  /**Om knappen bruker `position:absolute` med standard  styling. */
  absolute?: boolean;
} & ComponentPropsWithRef<'button'> &
  Pick<InlineIconButtonProps, 'size'>;

export const ClearButton = ({
  className,
  absolute = true,
  ...rest
}: ClearButtonProps) => (
  <InlineIconButton
    className={cn(className, absolute && utilStyles['center-absolute-y'])}
    icon={CloseSmallIcon}
    {...rest}
  />
);

ClearButton.displayName = 'ClearButton';
