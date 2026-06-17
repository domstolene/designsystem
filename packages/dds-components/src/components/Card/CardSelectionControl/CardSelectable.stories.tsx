import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { CardSelectable } from './CardSelectable';
import {
  categoryHtml,
  commonArgTypes,
  htmlArgType,
  htmlEventArgType,
  responsivePropsArgTypes,
} from '../../../storybook';
import { VStack } from '../../layout';
import { StoryHStack, StoryVStack } from '../../layout/Stack/storybook-utils';
import { Typography } from '../../Typography';
import {
  type CardAppearance,
  type CardSelectableProps,
  type CardSelectableType,
} from '../Card.types';

const meta = preview.meta({
  title: 'dds-components/Components/Card/CardSelectable',
  component: CardSelectable,
  argTypes: {
    ...commonArgTypes,
    checked: { table: categoryHtml, control: 'boolean' },
    disabled: { table: categoryHtml, control: 'boolean' },
    value: htmlArgType,
    defaultValue: htmlArgType,
    padding: responsivePropsArgTypes.padding,
    onChange: htmlEventArgType,
    onBlur: htmlEventArgType,
  },

  args: { onBlur: fn(), onChange: fn() },
});

const cardExamples = (
  args: CardSelectableProps,
  cardType: CardSelectableType,
  appearance: CardAppearance,
) => (
  <StoryVStack>
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="Alternativ 1"
    />
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="error"
      error={true}
    />
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="disabled"
      disabled
    />
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="readOnly"
      readOnly
    />
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="checked"
      checked
    />

    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="disabled"
      disabled
      checked
    />
    <CardSelectable
      {...args}
      cardType={cardType}
      appearance={appearance}
      children="readOnly checked"
      readOnly
      checked
    />
  </StoryVStack>
);

export const Radio = meta.story({
  args: {
    children: 'Alternativ',
    cardType: 'radio',
  },
  render: args => {
    return (
      <CardSelectable {...args} children="Alternativ" value={1} name="a" />
    );
  },
});
export const Overview = meta.story({
  args: {
    children: 'Alternativ',
  },
  render: args => {
    return (
      <StoryHStack>
        {cardExamples(args, 'radio', 'filled')}
        {cardExamples(args, 'radio', 'border')}
        {cardExamples(args, 'checkbox', 'filled')}
        {cardExamples(args, 'checkbox', 'border')}
      </StoryHStack>
    );
  },
});

export const Checkbox = meta.story({
  args: {
    children: 'Alternativ',
    cardType: 'checkbox',
  },
});

export const CustomSpacing = meta.story({
  args: {
    children: 'Alternativ',
    cardType: 'checkbox',
    padding: 'var(--dds-spacing-x2) var(--dds-spacing-x6)',
    controlPlacementProps: {
      left: 'var(--dds-spacing-x4)',
      top: 'calc(var(--dds-spacing-x2) + var(--dds-spacing-x0-25))',
    },
  },
});

export const ComplexContent = meta.story({
  args: {
    children: 'Alternativ',
    cardType: 'checkbox',
  },
  render: args => {
    return (
      <VStack gap="x1">
        <CardSelectable {...args}>
          <VStack gap="x0.5">
            <Typography as="span" typographyType="headingSmall">
              Overskrift
            </Typography>
            <Typography as="span">
              Detaljer Detaljer Detaljer Detaljer Detaljer Detaljer Detaljer{' '}
              Detaljer Detaljer Detaljer{' '}
            </Typography>
          </VStack>
        </CardSelectable>
      </VStack>
    );
  },
});
