import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
import { VStack } from '../layout';
import { SelectionControlCard } from './SelectionControlCard';
import { Typography } from '../Typography';

export default {
  title: 'dds-components/Components/Card/SelectionControlCard',
  component: SelectionControlCard,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
    cardRef: { control: false },
  },
} satisfies Meta<typeof SelectionControlCard>;

type Story = StoryObj<typeof SelectionControlCard>;

export const Radio: Story = {
  args: {
    children: 'Alternativ',
    cardType: 'radio',
  },
  render: args => {
    return (
      <VStack gap="x1">
        <SelectionControlCard
          {...args}
          children="alternativ 1"
          value={1}
          name="a"
        />
        <SelectionControlCard
          {...args}
          children="alternativ 2"
          value={2}
          name="a"
        />
      </VStack>
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
    padding: 'var(--dds-spacing-x1)',
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
        <SelectionControlCard {...args}>
          <VStack gap="x0.5">
            <Typography as="span" typographyType="headingSmall">
              Overskrift
            </Typography>
            <Typography as="span">
              Detaljer Detaljer Detaljer Detaljer Detaljer Detaljer Detaljer{' '}
              Detaljer Detaljer Detaljer{' '}
            </Typography>
          </VStack>
        </SelectionControlCard>
      </VStack>
    );
  },
};
