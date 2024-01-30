import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { EmptyContent } from './EmptyContent';

export default {
  title: 'dds-components/EmptyContent',
  component: EmptyContent,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof EmptyContent>;

export const Default: Story = {
  args: { title: 'Tittel', message: 'Dette er en tekst.' },
  decorators: Story => (
    <StoryTemplate title="EmptyContent - default">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate title="EmptyContent - overview">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <EmptyContent {...args} title="Tittel" message="Dette er en tekst." />

      <EmptyContent {...args} message="Kort melding." />

      <EmptyContent
        {...args}
        message={`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.`}
      />

      <div style={{ height: '25rem', width: '100%' }}>
        <EmptyContent
          {...args}
          message="Ligger inne i et element med definert høyde og bredde."
        />
      </div>
    </>
  ),
};
