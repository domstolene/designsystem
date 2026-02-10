import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  StoryLabel,
  commonArgTypesWithNodeChildren,
  labelText,
  windowWidthDecorator,
} from '../../storybook';
import { InlineButton } from '../InlineButton';
import { VStack } from '../layout';
import { StoryVStack } from '../layout/Stack/utils';

import {
  DETAIL_LIST_SIZES,
  DetailList,
  DetailListDesc,
  DetailListRow,
  DetailListTerm,
} from '.';

export default {
  title: 'dds-components/Components/DetailList',
  component: DetailList,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
  },
} satisfies Meta<typeof DetailList>;

type Story = StoryObj<typeof DetailList>;

const children = [
  <DetailListRow>
    <DetailListTerm>Term</DetailListTerm>
    <DetailListDesc>Beskrivelse</DetailListDesc>
    <DetailListDesc textAlign="right">
      <InlineButton
        onClick={() => {
          //kun for showcase
        }}
      >
        Knapp
      </InlineButton>
    </DetailListDesc>
  </DetailListRow>,
  <DetailListRow>
    <DetailListTerm>Term</DetailListTerm>
    <DetailListDesc>Beskrivelse</DetailListDesc>
    <DetailListDesc textAlign="right">
      <InlineButton
        onClick={() => {
          //kun for showcase
        }}
      >
        Knapp
      </InlineButton>
    </DetailListDesc>
  </DetailListRow>,
  <DetailListRow>
    <DetailListTerm>Term</DetailListTerm>
    <DetailListDesc>Beskrivelse</DetailListDesc>
    <DetailListDesc textAlign="right">
      <InlineButton
        onClick={() => {
          //kun for showcase
        }}
      >
        Knapp
      </InlineButton>
    </DetailListDesc>
  </DetailListRow>,
  <DetailListRow>
    <DetailListTerm>Term</DetailListTerm>
    <DetailListDesc>Beskrivelse</DetailListDesc>
    <DetailListDesc textAlign="right">
      <InlineButton
        onClick={() => {
          //kun for showcase
        }}
      >
        Knapp
      </InlineButton>
    </DetailListDesc>
  </DetailListRow>,
];

export const Preview: Story = {
  render: args => <DetailList {...args}>{children}</DetailList>,
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      {DETAIL_LIST_SIZES.map(size => (
        <VStack width="100%">
          <StoryLabel>{labelText(size)}</StoryLabel>
          <DetailList {...args} key={size} size={size}>
            {children}
          </DetailList>
        </VStack>
      ))}
    </StoryVStack>
  ),
};

export const SmallScreen: Story = {
  render: args => (
    <DetailList {...args} smallScreenBreakpoint="xl">
      {children}
    </DetailList>
  ),
};

export const Responsive: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
  args: { smallScreenBreakpoint: 'sm' },
  render: args => <DetailList {...args}>{children}</DetailList>,
};
