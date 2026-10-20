import { ChipButton, ChipCheckbox, ChipRadio, ChipRemovable } from './Chip';
import { ChipGroup } from './ChipGroup';

interface ChipCompoundProps {
  Group: typeof ChipGroup;
  Button: typeof ChipButton;
  Checkbox: typeof ChipCheckbox;
  Radio: typeof ChipRadio;
  Removable: typeof ChipRemovable;
}

const Chip: ChipCompoundProps = {
  Button: ChipButton,
  Checkbox: ChipCheckbox,
  Radio: ChipRadio,
  Removable: ChipRemovable,
  Group: ChipGroup,
};

Chip.Button.displayName = 'Chip.Button';
Chip.Checkbox.displayName = 'Chip.Checkbox';
Chip.Radio.displayName = 'Chip.Radio';
Chip.Removable.displayName = 'Chip.Removable';
Chip.Group.displayName = 'Chip.Group';

export { ChipButton, ChipCheckbox, ChipRadio, ChipRemovable, ChipGroup, Chip };

export {
  type ChipButtonProps,
  type ChipCheckboxProps,
  type ChipRadioProps,
  type ChipRemovableProps,
  type ChipSize,
} from './Chip';
export type { ChipGroupProps } from './ChipGroup';
