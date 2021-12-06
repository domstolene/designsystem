import { SkipToContent } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';

import {
  SkipToContent as DDSSkipToContent,
  SkipToContentProps
} from './SkipToContent';

export default {
  title: 'Design system/SkipToContent',
  component: DDSSkipToContent,
  argTypes: {},
  parameters: {
    controls: {
      exclude: ['style', 'className', 'buttonProps']
    }
  }
};

export const Overview = () => (
  <StoryTemplate title="Skip to content - overview">
    <div style={{ position: 'relative' }}>
      <SkipToContent href="#" />
    </div>
  </StoryTemplate>
);
