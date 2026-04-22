import preview from '#.storybook/preview';
import { useState } from 'react';

import { CardSelectable } from './CardSelectable';
import { CardSelectableGroup } from './CardSelectableGroup';
import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  responsivePropsArgTypes,
} from '../../../storybook';
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

const meta = preview.meta({
  title: 'dds-components/Components/Card/CardSelectable/Group',
  component: CardSelectableGroup,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
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
  decorators: [ddsProviderDecorator],
});

export const Group = meta.story({
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
});

export const WithLabel = meta.story({
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
});

export const WithCustomTip = meta.story({
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
});

export const GroupWithInvisibleLabel = meta.story({
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
});

export const WithErrorMessage = meta.story({
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
});

export const ControlledRadio = meta.story({
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
});
