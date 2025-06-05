import { type StoryObj } from '@storybook/react-vite';

import { categoryHtml, htmlEventArgType } from '../../storybook/helpers';

import { BackLink } from '.';

export default {
  title: 'dds-components/Components/BackLink',
  component: BackLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    href: {
      table: categoryHtml,
    },
    onClick: htmlEventArgType,
  },
};

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: { label: 'Forrige nivå', href: '#' },
};
