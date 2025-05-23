import { type Story } from '@storybook/blocks';
import { type Meta, type StoryObj } from '@storybook/react';

import { CardSelectable } from './CardSelectable';
import {
  htmlPropsArgType,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';
import { VStack } from '../../layout';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';
import { Typography } from '../../Typography';
import {
  type CardAppearance,
  type CardSelectableProps,
  type CardSelectableType,
} from '../Card.types';

const { padding } = responsivePropsArgTypes;

export default {
  title: 'dds-components/Components/Card/CardSelectable',
  component: CardSelectable,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
    checked: htmlPropsArgType,
    disabled: htmlPropsArgType,
    value: htmlPropsArgType,
    defaultValue: htmlPropsArgType,
    padding,
  },
} satisfies Meta<typeof CardSelectable>;

type Story = StoryObj<typeof CardSelectable>;

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

export const Radio: Story = {
  args: {
    children: 'Alternativ',
    cardType: 'radio',
  },
  render: args => {
    return (
      <CardSelectable {...args} children="Alternativ" value={1} name="a" />
    );
  },
};
export const Overview: Story = {
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
};

export const Checkbox: Story = {
  args: {
    children: 'Alternativ',
    cardType: 'checkbox',
  },
};

export const CustomSpacing: Story = {
  args: {
    children: 'Alternativ',
    cardType: 'checkbox',
    padding: 'var(--dds-spacing-x2) var(--dds-spacing-x6)',
    controlPlacementProps: {
      left: 'var(--dds-spacing-x4)',
      top: 'calc(var(--dds-spacing-x2) + var(--dds-spacing-x0-25))',
    },
  },
};

export const ComplexContent: Story = {
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
};
