import { type Meta, type StoryObj } from '@storybook/react';

import { InlineButton } from '../InlineButton';

import { DetailList, DetailListDesc, DetailListRow, DetailListTerm } from '.';

export default {
  title: 'dds-components/DetailList',
  component: DetailList,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    htmlProps: { control: false },
    withDividers: { control: 'boolean' },
    striped: { control: 'boolean' },
  },
} satisfies Meta<typeof DetailList>;

type Story = StoryObj<typeof DetailList>;

export const Default: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-text-right {
          text-align: right;
          }
        `}
        </style>
      </>
    ),
  ],
  render: args => (
    <DetailList {...args}>
      <DetailListRow>
        <DetailListTerm>Term</DetailListTerm>
        <DetailListDesc>Beskrivelse</DetailListDesc>
        <DetailListDesc className="story-text-right">
          <InlineButton
            onClick={() => {
              null;
            }}
          >
            Knapp
          </InlineButton>
        </DetailListDesc>
      </DetailListRow>
      <DetailListRow>
        <DetailListTerm>Term</DetailListTerm>
        <DetailListDesc>Beskrivelse</DetailListDesc>
        <DetailListDesc className="story-text-right">
          <InlineButton
            onClick={() => {
              null;
            }}
          >
            Knapp
          </InlineButton>
        </DetailListDesc>
      </DetailListRow>
      <DetailListRow>
        <DetailListTerm>Term</DetailListTerm>
        <DetailListDesc>Beskrivelse</DetailListDesc>
        <DetailListDesc className="story-text-right">
          <InlineButton
            onClick={() => {
              null;
            }}
          >
            Knapp
          </InlineButton>
        </DetailListDesc>
      </DetailListRow>
      <DetailListRow>
        <DetailListTerm>Term</DetailListTerm>
        <DetailListDesc>Beskrivelse</DetailListDesc>
        <DetailListDesc className="story-text-right">
          <InlineButton
            onClick={() => {
              null;
            }}
          >
            Knapp
          </InlineButton>
        </DetailListDesc>
      </DetailListRow>
    </DetailList>
  ),
};
