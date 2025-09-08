import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes, windowWidthDecorator } from '../../storybook/helpers';
import { InlineButton } from '../InlineButton';

import { DetailList, DetailListDesc, DetailListRow, DetailListTerm } from '.';

export default {
  title: 'dds-components/Components/DetailList',
  component: DetailList,
  argTypes: {
    ...commonArgTypes,
  },
  decorators: [
    Story => (
      <>
        <Story />
        <style>{styling}</style>
      </>
    ),
  ],
} satisfies Meta<typeof DetailList>;

type Story = StoryObj<typeof DetailList>;

const styling = `
          .story-text-right {
          text-align: right;
          }
        `;

const children = [
  <DetailListRow>
    <DetailListTerm>Term</DetailListTerm>
    <DetailListDesc>Beskrivelse</DetailListDesc>
    <DetailListDesc className="story-text-right">
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
    <DetailListDesc className="story-text-right">
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
    <DetailListDesc className="story-text-right">
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
    <DetailListDesc className="story-text-right">
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

export const Small: Story = {
  render: args => (
    <DetailList {...args} size="small">
      {children}
    </DetailList>
  ),
};

export const Large: Story = {
  render: args => (
    <DetailList {...args} size="large">
      {children}
    </DetailList>
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
