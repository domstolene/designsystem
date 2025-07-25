import type { Meta, StoryObj } from '@storybook/react-vite';

import { EnvironmentBannerProvider } from './EnvironmentBannerProvider';

const meta: Meta<typeof EnvironmentBannerProvider> = {
  title: 'development-utils/EnvironmentBannerProvider',
  component: EnvironmentBannerProvider,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;

type Story = StoryObj<typeof EnvironmentBannerProvider>;

export const Preview: Story = {
  args: { bannerPosition: 'fixed', environment: 'TEST' },
  render: args => <EnvironmentBannerProvider {...args} />,
};
