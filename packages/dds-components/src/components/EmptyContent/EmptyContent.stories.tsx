import preview from '#.storybook/preview';

import { EmptyContent } from './EmptyContent';
import { Box } from '../layout';
import { Link } from '../Typography';

const meta = preview.meta({
  title: 'dds-components/Components/EmptyContent',
  component: EmptyContent,
  args: { children: 'Dette er en tekst.' },
});

export const Preview = meta.story({
  args: {
    headerText: 'Tittel',
  },
});

export default meta;

export const InWrapper = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <Box height="25rem" width="400px">
      <EmptyContent {...args}>
        Ligger inne i et element med definert høyde og bredde.
      </EmptyContent>
    </Box>
  ),
});

export const ComplexContent = meta.story({
  args: {
    headerText: 'Tittel',
  },
  render: args => (
    <EmptyContent {...args}>
      Dette er en forklaring. Du kan <Link href="/">registrere en aktør</Link>.
    </EmptyContent>
  ),
});
