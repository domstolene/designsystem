import { type Properties } from 'csstype';

import { getBaseHTMLProps } from '../../../types';
import { cn, spaceSeparatedIdListGenerator } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Checkbox } from '../../SelectionControl/Checkbox';
import { useCheckboxGroup } from '../../SelectionControl/Checkbox/CheckboxGroupContext';
import { RadioButton } from '../../SelectionControl/RadioButton';
import styles from '../Card.module.css';
import { type CardSelectableProps } from '../Card.types';
import { useCardSelectableContext } from './CardSelectable.context';
import { useRadioButtonGroup } from '../../SelectionControl/RadioButton/RadioButtonGroupContext';

export const CardSelectable = (props: CardSelectableProps) => {
  const {
    appearance = 'filled',
    cardType: cardTypeProp,
    id,
    padding,
    controlPlacementProps = {},
    'aria-describedby': ariaDescribedby,
    className,
    htmlProps,
    ...rest
  } = props;

  const { left, top } = controlPlacementProps;

  const radioGroup = useRadioButtonGroup();
  const checkboxGroup = useCheckboxGroup();
  const { cardType: cardTypeContext, tipId } = useCardSelectableContext();

  const cardType = cardTypeProp ?? cardTypeContext;
  const group = cardTypeContext === 'radio' ? radioGroup : checkboxGroup;

  if (!cardType)
    throw new Error(`
Error: <CardSelectable> requires a \`cardType\` prop.
Provide \`cardType\` either via a parent <CardSelectableGroup> or directly on the component.`);

  const {
    disabled = group?.disabled,
    readOnly = group?.readOnly,
    error = group?.error,
    name = radioGroup?.name,
    value = radioGroup?.value,
    defaultValue = radioGroup?.defaultValue,
    required = radioGroup?.required,
  } = { ...group, ...rest };

  const classNames = cn(
    className,
    styles.container,
    styles[`container--${appearance}`],
    styles[`container--selection-control`],
    focusStyles['has-focusable-input'],
  );

  const radioContextProps = {
    name,
    required,
    value,
    defaultValue,
  };

  const customStyles: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-padding' as any]:
      padding ??
      'var(--dds-spacing-x1-5) var(--dds-spacing-x1-5) var(--dds-spacing-x1-5) calc(var(--dds-size-icon-component) + var(--dds-spacing-x0-5) + var(--dds-spacing-x1-5))',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-control-top' as any]: top,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-selection-control-card-control-left' as any]:
      left ?? `var(--dds-spacing-x1-5)`,
  };

  const sharedProps = {
    ...getBaseHTMLProps(id, classNames, htmlProps, rest),
    htmlProps: {
      ...htmlProps,
      style: {
        ...htmlProps?.style,
        ...customStyles,
      },
    },
    disabled,
    readOnly,
    error,
    'aria-describedby': spaceSeparatedIdListGenerator([tipId, ariaDescribedby]),
  };

  return cardType === 'radio' ? (
    <RadioButton {...sharedProps} {...radioContextProps} />
  ) : cardType === 'checkbox' ? (
    <Checkbox {...sharedProps} />
  ) : null;
};

CardSelectable.displayName = 'CardSelectable';
