import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { categoryHtml, htmlEventArgType } from '../../storybook';
import { StoryVStack } from '../layout/Stack/storybook-utils';

import { Breadcrumb } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    href: {
      control: 'text',
      table: categoryHtml,
    },
    onClick: htmlEventArgType,
  },
  args: { onClick: fn() },
});

export const Preview = meta.story({
  args: {
    children: 'Side',
    href: '/',
  },
});

export const CurrentPage = meta.story({
  args: {
    children: 'Side',
  },
});

export const Overview = meta.story({
  render: args => (
    <StoryVStack>
      <Breadcrumb {...args} href="#">
        Forrige nivå
      </Breadcrumb>
      <Breadcrumb {...args}>Siden du er på</Breadcrumb>
    </StoryVStack>
  ),
});
