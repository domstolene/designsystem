import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  htmlPropsArgType,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { InlineButton } from '../InlineButton';

import { DetailList, DetailListDesc, DetailListRow, DetailListTerm } from '.';

export default {
  title: 'dds-components/Components/DetailList',
  component: DetailList,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
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
          null;
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
          null;
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
          null;
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
          null;
        }}
      >
        Knapp
      </InlineButton>
    </DetailListDesc>
  </DetailListRow>,
];

export const Default: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{styling}</style>
      </>
    ),
  ],
  render: args => <DetailList {...args}>{children}</DetailList>,
};

export const Small: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{styling}</style>
      </>
    ),
  ],
  render: args => (
    <DetailList {...args} size="small">
      {children}
    </DetailList>
  ),
};

export const Large: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{styling}</style>
      </>
    ),
  ],
  render: args => (
    <DetailList {...args} size="large">
      {children}
    </DetailList>
  ),
};

export const Responsive: Story = {
  decorators: [
    Story =>
      windowWidthDecorator(
        <>
          <Story />
          <style>{styling}</style>
        </>,
        'Versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
  args: { smallScreenBreakpoint: 'sm' },
  render: args => <DetailList {...args}>{children}</DetailList>,
};
