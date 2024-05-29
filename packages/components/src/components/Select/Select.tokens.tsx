import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

import {
  type InputSize,
  type InputTypographyTypes,
  inputTypographyTypes,
} from '../helpers';
import { type StaticTypographyType } from '../Typography';

const placeholderTypographyTypes: { [k in InputSize]: StaticTypographyType } = {
  medium: 'supportingStylePlaceholderText01',
  small: 'supportingStylePlaceholderText02',
  tiny: 'supportingStylePlaceholderText03',
};

const multiValueLabelTypographyTypes: {
  [k in InputSize]: StaticTypographyType;
} = {
  medium: 'bodySans01',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

export const typographyTypes: {
  control: InputTypographyTypes;
  option: InputTypographyTypes;
  placeholder: { [k in InputSize]: StaticTypographyType };
  noOptionsMessage: { [k in InputSize]: StaticTypographyType };
  groupHeading: StaticTypographyType;
  multiValueLabel: { [k in InputSize]: StaticTypographyType };
} = {
  control: inputTypographyTypes,
  option: inputTypographyTypes,
  placeholder: placeholderTypographyTypes,
  noOptionsMessage: placeholderTypographyTypes,
  groupHeading: 'supportingStyleHelperText01',
  multiValueLabel: multiValueLabelTypographyTypes,
};

const control = {
  borderRadius: ddsTokens.DdsBorderRadius1,
  border: '1px solid',
  borderColor: ddsTokens.DdsColorBorderDefault,
  backgroundColor: ddsTokens.DdsColorSurfaceDefault,
  color: ddsTokens.DdsColorTextDefault,
  disabled: {
    backgroundColor: ddsTokens.DdsColorSurfaceFieldDisabled,
    borderColor: ddsTokens.DdsColorBorderDefault,
  },
  readOnly: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    paddingTop: ddsTokens.DdsSpacingX0125,
  },
  isMulti: {
    sizes: {
      medium: {
        padding: `${ddsTokens.DdsSpacingX075} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX075} ${ddsTokens.DdsSpacingX075}`,
      },
      small: {
        padding: `${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX075}`,
      },
      tiny: {
        padding: `${ddsTokens.DdsSpacingX025} ${ddsTokens.DdsSpacingX05}`,
      },
    },
  },
  sizes: {
    medium: {
      padding: `${ddsTokens.DdsSpacingX075} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX075} ${ddsTokens.DdsSpacingX075}`,
    },
    small: {
      padding: `${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX075}`,
    },
    tiny: {
      padding: `${ddsTokens.DdsSpacingX025} ${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX025} ${ddsTokens.DdsSpacingX05}`,
    },
  },
};

const placeholder = {
  color: ddsTokens.DdsColorTextSubtle,
};

const dropdownIndicator = {
  base: {
    color: ddsTokens.DdsColorIconDefault,
  },
  readOnly: {
    color: 'transparent',
  },
};

const clearIndicator = {
  base: {
    color: ddsTokens.DdsColorIconDefault,
  },
  hover: { backgroundColor: ddsTokens.DdsColorSurfaceHoverDefault },
};

const loadingIndicator = {
  color: ddsTokens.DdsColorIconDefault,
};

const menu = {
  border: '1px solid',
  borderColor: ddsTokens.DdsColorBorderActionDefault,
  backgroundColor: ddsTokens.DdsColorSurfaceDefault,
  borderRadius: ddsTokens.DdsBorderRadius1,
  marginTop: ddsTokens.DdsSpacingX025,
  marginBottom: ddsTokens.DdsSpacingX025,
};

const groupHeading = {
  color: ddsTokens.DdsColorTextMedium,
  padding: `${ddsTokens.DdsSpacingX05}  ${ddsTokens.DdsSpacingX075} ${ddsTokens.DdsSpacingX0125} ${ddsTokens.DdsSpacingX075}`,
};

const option = {
  base: {
    color: ddsTokens.DdsColorTextDefault,
    gap: ddsTokens.DdsSpacingX05,
    padding: `${ddsTokens.DdsSpacingX075}`,
    backgroundColor: ddsTokens.DdsColorSurfaceDefault,
  },
  hover: {
    color: ddsTokens.DdsColorTextDefault,
    backgroundColor: ddsTokens.DdsColorSurfaceHoverDefault,
  },
  focus: {
    color: ddsTokens.DdsColorTextDefault,
    backgroundColor: ddsTokens.DdsColorSurfaceHoverDefault,
  },
  selected: {
    color: ddsTokens.DdsColorTextDefault,
    backgroundColor: ddsTokens.DdsColorSurfaceDefault,
  },
};

const noOptionsMessage = {
  padding: `${ddsTokens.DdsSpacingX05} ${ddsTokens.DdsSpacingX1}`,
  color: ddsTokens.DdsColorTextMedium,
};

const multiValue = {
  borderRadius: ddsTokens.DdsBorderRadius1,
  backgroundColor: ddsTokens.DdsColorSurfaceMedium,
};

const multiValueLabel = {
  padding: `0 ${ddsTokens.DdsSpacingX025}`,
  color: ddsTokens.DdsColorTextDefault,
};

const multiValueRemove = {
  base: {
    color: ddsTokens.DdsColorIconDefault,
    padding: `0 ${ddsTokens.DdsSpacingX025}`,
    borderTopRightRadius: ddsTokens.DdsBorderRadius1,
    borderBottomRightRadius: ddsTokens.DdsBorderRadius1,
  },
  hover: {
    color: ddsTokens.DdsColorSurfaceDefault,
  },
};

const valueContainer = {
  isMulti: {
    gap: ddsTokens.DdsSpacingX025,
  },
};

const icon = {
  marginRight: ddsTokens.DdsSpacingX05,
};

export const selectTokens = {
  control,
  dropdownIndicator,
  placeholder,
  menu,
  groupHeading,
  option,
  valueContainer,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  noOptionsMessage,
  clearIndicator,
  loadingIndicator,
  icon,
};
