import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { LanguageProvider } from '../../i18n';
import { categoryHtml, htmlEventArgType } from '../../storybook/helpers';

import { BackLink } from '.';

const meta: Meta<typeof BackLink> = {
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
  args: { onClick: fn() },
  decorators: [
    Story => (
      <LanguageProvider language="nb">
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: { label: 'Forrige nivå', href: '#' },
};
