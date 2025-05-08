import { type Properties } from 'csstype';

import styles from './Card.module.css';
import { type SelectionControlCardProps } from './Card.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import { Checkbox } from '../SelectionControl/Checkbox';
import { RadioButton } from '../SelectionControl/RadioButton';

export const SelectionControlCard = (props: SelectionControlCardProps) => {
  const {
    appearance = 'filled',
    cardType,
    cardRef,
    id,
    children,
    padding,
    controlPlacementProps = {},
    className,
    htmlProps,
    ...rest
  } = props;

  const { left, top } = controlPlacementProps;

  const classNames = cn(
    className,
    styles.container,
    styles[`container--${appearance}`],
    styles[`container--selection-control`],
    focusStyles['has-focusable-input'],
  );

  const customStyles: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-padding' as any]:
      padding ??
      'var(--dds-spacing-x1-5) var(--dds-spacing-x1-5) var(--dds-spacing-x1-5) calc(var(--dds-selection-control-height) + var(--dds-spacing-x0-5) + var(--dds-spacing-x1-5))',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-control-top' as any]:
      top ??
      `calc(
      (var(--dds-font-lineheight-x1) * 1em - var(--dds-icon-size-small)) / 2 -
        1px + var(--dds-spacing-x1-5)
    )`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-control-left' as any]:
      left ?? `var(--dds-spacing-x1-5)`,
  };

  return cardType === 'radio' ? (
    <RadioButton
      {...getBaseHTMLProps(id, classNames, htmlProps, rest)}
      ref={cardRef}
      children={children}
      htmlProps={{
        style: {
          ...htmlProps?.style,
          ...customStyles,
        },
      }}
    />
  ) : (
    // <RadioButton
    //   {...getBaseHTMLProps(id, classNames, htmlProps, rest)}
    //   ref={cardRef}
    //   children={children}
    //   htmlProps={{
    //     style: {
    //       ...htmlProps?.style,
    //       ...customStyles,
    //       padding:
    //         padding ??
    //         `var(--dds-spacing-x1-5) var(--dds-spacing-x1-5)
    // var(--dds-spacing-x1-5)
    // calc(
    //   var(--dds-selection-control-height) + var(--dds-spacing-x0-5) +
    //     var(--dds-spacing-x1-5)
    // );`,
    //     },
    //   }}
    // />
    <Checkbox
      {...getBaseHTMLProps(id, classNames, htmlProps, rest)}
      ref={cardRef}
      children={children}
      htmlProps={{ style: { ...htmlProps?.style, ...customStyles } }}
    />
  );
  // <Box className={classNames} padding="x1.5">
  //   {cardType === 'radio' ? (
  //     <RadioButton
  //       {...getBaseHTMLProps(id, htmlProps, rest)}
  //       ref={cardRef}
  //       children={children}
  //     />
  //   ) : (
  //     <Checkbox
  //       {...getBaseHTMLProps(id, htmlProps, rest)}
  //       ref={cardRef}
  //       children={children}
  //     />
  //   )}
  // </Box>
};

SelectionControlCard.displayName = 'SelectionControlCard';
