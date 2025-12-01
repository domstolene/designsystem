import { type Meta, type StoryObj } from '@storybook/react-vite';

import { EmptyContent } from './EmptyContent';
import { Box } from '../layout';
import { Link } from '../Typography';

export default {
  title: 'dds-components/Components/EmptyContent',
  component: EmptyContent,
} satisfies Meta<typeof EmptyContent>;

type Story = StoryObj<typeof EmptyContent>;

export const Preview: Story = {
  args: {
    headerText: 'Tittel',
    children: 'Dette er en tekst.',
  },
};

export const InWrapper: Story = {
  render: args => (
    <Box height="25rem" width="400px">
      <EmptyContent {...args}>
        Ligger inne i et element med definert høyde og bredde.
      </EmptyContent>
    </Box>
  ),
};

export const LongContent: Story = {
  args: {
    children: `Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec tempus imperdiet leo, eget tempus nulla suscipit
        vel. Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        imperdiet leo, eget tempus nulla suscipit vel. Curabitur accumsan
        dapibus elit, eu semper massa pulvinar vitae. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec tempus imperdiet leo, eget
        tempus nulla suscipit vel. Curabitur accumsan dapibus elit, eu semper
        massa pulvinar vitae.`,
  },
};

export const ComplexContent: Story = {
  args: {
    headerText: 'Tittel',
  },
  render: args => (
    <EmptyContent {...args}>
      Dette er en forklaring. Du kan <Link href="/">registrere en aktør</Link>.
    </EmptyContent>
  ),
};
