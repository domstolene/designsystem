import { type Story } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CardSelectable } from './CardSelectable';
import { CardSelectableGroup } from './CardSelectableGroup';
import {
  htmlPropsArgType,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';
import { Button } from '../../Button';
import { VStack } from '../../layout';
import { Typography } from '../../Typography';
import { VisuallyHidden } from '../../VisuallyHidden';

const {
  alignItems,
  flexDirection,
  columnGap,
  display,
  rowGap,
  gap,
  flexWrap,
  margin,
  padding,
} = responsivePropsArgTypes;

export default {
  title: 'dds-components/Components/Card/CardSelectable/Group',
  component: CardSelectableGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
    className: htmlPropsArgType,
    id: htmlPropsArgType,
    alignItems,
    flexDirection,
    columnGap,
    display,
    rowGap,
    gap,
    flexWrap,
    margin,
    padding,
  },
} satisfies Meta<typeof CardSelectableGroup>;

type Story = StoryObj<typeof CardSelectableGroup>;

export const Group: Story = {
  args: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
      lg: 'row',
      xl: 'row',
    },
    gap: 'x1',
    cardType: 'radio',
    name: 'a',
  },
  render: args => {
    return (
      <CardSelectableGroup {...args}>
        <CardSelectable children="alternativ 1" value={1} />
        <CardSelectable children="alternativ 2" value={2} />
      </CardSelectableGroup>
    );
  },
};

export const WithLabel: Story = {
  args: {
    display: 'flex',
    gap: 'x1',
    cardType: 'radio',
    name: 'a',
  },
  render: args => {
    return (
      <VStack gap="x0.75">
        <Typography typographyType="headingSmall" as="span" id="label-1">
          Gruppeledetekst
        </Typography>
        <CardSelectableGroup {...args} aria-labelledby="label-1">
          <CardSelectable children="alternativ 1" value={1} />
          <CardSelectable children="alternativ 2" value={2} />
        </CardSelectableGroup>
      </VStack>
    );
  },
};

export const WithCustomTip: Story = {
  args: {
    display: 'flex',
    gap: 'x1',
    cardType: 'radio',
    name: 'a',
  },
  render: args => {
    return (
      <VStack gap="x0.75">
        <Typography typographyType="headingSmall" as="span" id="label-1">
          Gruppeledetekst
        </Typography>
        <Typography id="tip-1">Hjelpetekst</Typography>
        <CardSelectableGroup {...args} aria-labelledby="label-1" tipId="tip-1">
          <CardSelectable children="alternativ 1" value={1} />
          <CardSelectable children="alternativ 2" value={2} />
        </CardSelectableGroup>
      </VStack>
    );
  },
};

export const GroupWithInvisibleLabel: Story = {
  args: {
    cardType: 'radio',
    display: 'flex',
    gap: 'x1',
  },
  render: args => {
    return (
      <>
        <VisuallyHidden id="label-1">Gruppeledetekst</VisuallyHidden>
        <CardSelectableGroup {...args} aria-labelledby="label-1">
          <CardSelectable children="alternativ 1" value={1} name="a" />
          <CardSelectable children="alternativ 2" value={2} name="a" />
        </CardSelectableGroup>
      </>
    );
  },
};

export const WithErrorMessage: Story = {
  args: {
    display: 'flex',
    gap: 'x1',
    cardType: 'radio',
    name: 'a',
    errorMessage: 'Dette er en feilmelding',
  },
  render: args => {
    return (
      <>
        <VStack gap="x0.75">
          <Typography typographyType="headingSmall" as="span" id="label-1">
            Gruppeledetekst
          </Typography>
          <CardSelectableGroup {...args} aria-labelledby="label-1">
            <CardSelectable children="alternativ 1" value="1" />
            <CardSelectable children="alternativ 2" value="2" />
          </CardSelectableGroup>
        </VStack>
      </>
    );
  },
};

export const ControlledRadio: Story = {
  args: {
    display: 'flex',
    gap: 'x1',
    cardType: 'radio',
    name: 'a',
  },
  render: args => {
    const [v, setV] = useState('3');
    return (
      <>
        <VStack gap="x0.75">
          <Typography typographyType="headingSmall" as="span" id="label-1">
            Gruppeledetekst
          </Typography>
          <CardSelectableGroup
            {...args}
            aria-labelledby="label-1"
            value={v}
            onChange={value => {
              setV(value as string);
            }}
          >
            <CardSelectable children="alternativ 1" value="1" />
            <CardSelectable children="alternativ 2" value="2" />
            <CardSelectable children="alternativ 3" value="3" />
          </CardSelectableGroup>
        </VStack>
        <Button onClick={() => setV('2')}> Sett verdi til 2 </Button>
      </>
    );
  },
};
