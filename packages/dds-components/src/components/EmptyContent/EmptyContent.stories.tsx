import { type Meta, type StoryObj } from '@storybook/react-vite';

import { EmptyContent } from './EmptyContent';
import { StoryVStack } from '../layout/Stack/utils';
import { Link } from '../Typography';

export default {
  title: 'dds-components/Components/EmptyContent',
  component: EmptyContent,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof EmptyContent>;

type Story = StoryObj<typeof EmptyContent>;

export const Default: Story = {
  args: { headerText: 'Tittel', message: 'Dette er en tekst.' },
};

export const Overview: Story = {
  args: {},
  render: args => (
    <StoryVStack>
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

      <div style={{ height: '25rem', width: '500px' }}>
        <EmptyContent
          {...args}
          message="Ligger inne i et element med definert høyde og bredde."
        />
      </div>
    </StoryVStack>
  ),
};

export const ComplexContent: Story = {
  args: {
    headerText: 'Tittel',
    message: (
      <>
        Dette er en forklaring. Du kan <Link href="/">registrere en aktør</Link>
        .
      </>
    ),
  },
};
