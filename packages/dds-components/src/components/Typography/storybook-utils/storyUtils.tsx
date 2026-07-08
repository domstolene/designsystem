import { type ArgTypes } from '@storybook/react-vite';

import {
  type ResponsiveArgTypes,
  commonArgTypes,
  htmlArgType,
  responsivePropsArgTypes,
} from '../../../storybook';
import {
  type BlockTypographyResponsiveProps,
  type InlineTypographyResponsiveProps,
} from '../Typography';

const {
  wordBreak,
  textAlign,
  margin,
  marginBlock,
  display,
  maxWidth,
  width,
  minWidth,
} = responsivePropsArgTypes;

const blockTgResponsiveArgTypes: ResponsiveArgTypes<BlockTypographyResponsiveProps> =
  {
    wordBreak,
    textAlign,
    margin,
    marginBlock,
    display,
    maxWidth,
    width,
    minWidth,
  };

const inlineTgResponsiveArgTypes: ResponsiveArgTypes<InlineTypographyResponsiveProps> =
  {
    wordBreak,
    textAlign,
    marginBlock,
  };

export const tgCommonArgTypes: ArgTypes = {
  ...commonArgTypes,
  style: htmlArgType,
  color: { control: { type: 'text' } },
};

export const inlineTgCommonArgTypes: ArgTypes = {
  ...tgCommonArgTypes,
  ...inlineTgResponsiveArgTypes,
};

export const blockTgCommonArgTypes: ArgTypes = {
  ...tgCommonArgTypes,
  ...blockTgResponsiveArgTypes,
};
