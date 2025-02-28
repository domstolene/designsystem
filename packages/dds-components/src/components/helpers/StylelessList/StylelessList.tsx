import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../../helpers/styling/utilStyles.module.css';

export type StylelessListProps<TProps extends object = object> = TProps &
  ComponentPropsWithRef<'ul'>;

export const StylelessList = ({ className, ...rest }: StylelessListProps) => (
  <ul {...rest} className={cn(className, utilStyles['remove-list-styling'])} />
);
