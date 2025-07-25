import { type FC } from 'react';

import {
  FigmaSvg,
  GithubSvg,
  NpmSvg,
  SlackSvg,
  StorybookSvg,
  ZeroheightSvg,
} from './assets/logos';
import { type IconType } from './types';

export const iconMap: Record<IconType, FC<{ size: string }>> = {
  npm: NpmSvg,
  zeroheight: ZeroheightSvg,
  figma: FigmaSvg,
  slack: SlackSvg,
  github: GithubSvg,
  storybook: StorybookSvg,
};
