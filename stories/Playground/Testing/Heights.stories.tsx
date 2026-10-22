import preview from '#.storybook/preview.js';
import { CHIP_SIZES } from '#packages/dds-components/src/components/Chip/Chip';
import {
  FAVSTAR_SIZES,
  type FavStartSize,
} from '#packages/dds-components/src/components/FavStar/FavStar';

import { BUTTON_SIZES } from '../../../packages/dds-components/src/components/Button/Button.types';
import {
  INPUT_SIZES,
  type InputSize,
} from '../../../packages/dds-components/src/components/helpers/Input/Input.types';
import { SEARCH_SIZES } from '../../../packages/dds-components/src/components/Search/Search.utils';
import {
  SELECTION_CONTROL_SIZES,
  type SelectionControlSize,
} from '../../../packages/dds-components/src/components/SelectionControl/common/SelectionControl.types';
import { TOGGLE_SIZES } from '../../../packages/dds-components/src/components/Toggle/Toggle';
import {
  Button,
  type ButtonSize,
  Checkbox,
  Chip,
  type ChipSize,
  FavStar,
  LocalMessage,
  MailIcon,
  NativeSelect,
  Paper,
  RadioButton,
  Search,
  type SearchSize,
  Select,
  Tag,
  TextInput,
  Toggle,
  ToggleBar,
  ToggleRadio,
  type ToggleSize,
  Typography,
  VStack,
} from '../../../packages/dds-components/src/index';
import {
  StoryLabel,
  ddsProviderDecorator,
} from '../../../packages/dds-components/src/storybook';

const meta = preview.meta({
  title: 'Playground/Testing',
  decorators: [ddsProviderDecorator],
});

const sValue = { label: 'select', value: 'select' };

export const Heights = meta.story(() => {
  return (
    <VStack gap="x1.5">
      <LocalMessage>
        Her tester vi om komponenter har konsekvent høyde.
      </LocalMessage>
      <VStack gap="x0.5">
        <StoryLabel>Knapper og skjemainput</StoryLabel>
        {renderInputs('large')}
        {renderInputs('medium')}
        {renderInputs('small')}
        {renderInputs('xsmall')}
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Selection controls</StoryLabel>

        {renderSelectionControls('large')}
        {renderSelectionControls('medium')}
        {renderSelectionControls('small')}
      </VStack>
      <VStack gap="x0.25">
        <StoryLabel>Tags og chips</StoryLabel>
        {renderTagsAndChips('medium')}
        {renderTagsAndChips('small')}
      </VStack>
    </VStack>
  );
});

type InputRenderSize = InputSize | SearchSize | ButtonSize;

const isInputSize = (size: InputRenderSize): size is InputSize =>
  INPUT_SIZES.includes(size as InputSize);

const isSearchSize = (size: InputRenderSize): size is SearchSize =>
  SEARCH_SIZES.includes(size as SearchSize);

const isButtonSize = (size: InputRenderSize): size is ButtonSize =>
  BUTTON_SIZES.includes(size as ButtonSize);

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Paper
    background="surface-medium"
    display="flex"
    flexDirection="row"
    gap="x1"
    width="fit-content"
    paddingInline="x1"
    alignItems="center"
    style={{ textWrap: 'nowrap' }}
  >
    {children}
  </Paper>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <Typography as="span" typographyType="heading-small">
    {children}:
  </Typography>
);

const renderInputs = (size: InputSize | SearchSize | ButtonSize) => (
  <Wrapper>
    <Label>{size}</Label>
    {isButtonSize(size) && (
      <Button icon={MailIcon} size={size}>
        Button
      </Button>
    )}
    {isInputSize(size) && (
      <>
        <TextInput componentSize={size} defaultValue="text input" />
        <Select componentSize={size} options={[sValue]} defaultValue={sValue} />
        {size !== 'xsmall' && (
          <Select
            isMulti
            componentSize={size}
            options={[sValue]}
            defaultValue={sValue}
          />
        )}
        <NativeSelect componentSize={size} defaultValue="native select">
          <option value="native select">native select</option>
        </NativeSelect>
      </>
    )}
    <ToggleBar size={size}>
      <ToggleRadio label="Radio" />
      <ToggleRadio label="Radio" />
    </ToggleBar>
    {isSearchSize(size) && (
      <Search componentSize={size} defaultValue="search" />
    )}
  </Wrapper>
);

type SelectionControlRenderSize = SelectionControlSize | ToggleSize;

const isSelectionControlSize = (
  size: SelectionControlRenderSize,
): size is SelectionControlSize =>
  SELECTION_CONTROL_SIZES.includes(size as SelectionControlSize);

const isToggleSize = (size: SelectionControlRenderSize): size is ToggleSize =>
  TOGGLE_SIZES.includes(size as ToggleSize);

const isFavStarSize = (
  size: SelectionControlRenderSize,
): size is FavStartSize => FAVSTAR_SIZES.includes(size as FavStartSize);

const renderSelectionControls = (size: SelectionControlRenderSize) => (
  <Wrapper>
    <Label>{size}</Label>
    {isSelectionControlSize(size) && (
      <>
        <Checkbox size={size} checked>
          Tekst
        </Checkbox>
        <RadioButton size={size} checked>
          Tekst
        </RadioButton>
      </>
    )}
    {isFavStarSize(size) && <FavStar size={size} />}
    {isToggleSize(size) && <Toggle size={size}>Tekst</Toggle>}
  </Wrapper>
);

const isChipSize = (size: ChipSize): size is ChipSize =>
  CHIP_SIZES.includes(size as ChipSize);

const renderTagsAndChips = (size: ChipSize) => (
  <Wrapper>
    <Label>{size}</Label>
    {isChipSize(size) && (
      <>
        <Tag size={size}>Tekst</Tag>
        <Chip.Removable size={size}>Tekst</Chip.Removable>
      </>
    )}
  </Wrapper>
);
