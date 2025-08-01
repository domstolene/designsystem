import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { CloseSmallIcon } from '../../Icon/icons';
import {
  InlineIconButton,
  type InlineIconButtonProps,
} from '../InlineIconButton';

type ClearButtonProps = ComponentPropsWithRef<'button'> &
  Pick<InlineIconButtonProps, 'size'>;

export const ClearButton = ({ className, ...rest }: ClearButtonProps) => (
  <InlineIconButton
    className={cn(className, utilStyles['center-absolute-y'])}
    icon={CloseSmallIcon}
    {...rest}
  />
);

ClearButton.displayName = 'ClearButton';
