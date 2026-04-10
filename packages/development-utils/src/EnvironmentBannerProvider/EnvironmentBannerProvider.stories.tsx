import preview from '#.storybook/preview';

import { EnvironmentBannerProvider } from './EnvironmentBannerProvider';

const meta = preview.meta({
  title: 'development-utils/EnvironmentBannerProvider',
  component: EnvironmentBannerProvider,
  parameters: {
    disableGlobalDecorator: true,
  },
});

export const Preview: unknown = meta.story({
  args: { bannerPosition: 'fixed', environment: 'TEST', children: null },
});
