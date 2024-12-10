import { type ChangeEvent, useId, useState } from 'react';

import { ToggleBarContext } from './ToggleBar.context';
import styles from './ToggleBar.module.css';
import { type ToggleBarProps, type ToggleBarValue } from './ToggleBar.types';
import { getBaseHTMLProps } from '../../types';
import { cn, combineHandlers } from '../../utils';
import { Typography } from '../Typography';

export const ToggleBar = <T extends string | number = string>(
  props: ToggleBarProps<T>,
) => {
  const {
    children,
    size = 'medium',
    label,
    onChange,
    value,
    name,
    width,
    htmlProps,
    className,
    id,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-ToggleBar`;

  const [groupValue, setGroupValue] = useState<ToggleBarValue>(value);

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value as T),
  );

  const labelId = label && `${uniqueId}-label`;

  return (
    <ToggleBarContext.Provider
      value={{
        size: size,
        onChange: handleChange,
        name: name,
        value: groupValue,
      }}
    >
      <div
        {...getBaseHTMLProps(
          id,
          cn(className, styles.container),
          htmlProps,
          rest,
        )}
        style={{ ...htmlProps?.style, width }}
        role="radiogroup"
        aria-labelledby={labelId ?? htmlProps?.['aria-labelledby']}
      >
        {label && (
          <Typography id={labelId} as="span" typographyType="labelMedium">
            {label}
          </Typography>
        )}
        <div className={styles.bar}>{children}</div>
      </div>
    </ToggleBarContext.Provider>
  );
};

ToggleBar.displayName = 'ToggleBar';
