import type { Meta, StoryObj } from '@storybook/react';

import { EnvironmentBannerProvider } from './EnvironmentBannerProvider';

const meta: Meta<typeof EnvironmentBannerProvider> = {
  title: 'development-utils/EnvironmentBannerProvider',
  component: EnvironmentBannerProvider,
  parameters: {
    disableGlobalDecorator: true,
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EnvironmentBannerProvider>;

export const Default: Story = {
  args: { bannerPosition: 'fixed', environment: 'TEST' },
  render: args => <EnvironmentBannerProvider {...args} />,
};
