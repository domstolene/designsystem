import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  ddsProviderDecorator,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
import { Paragraph } from '../Paragraph';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Link } from '.';

export default {
  title: 'dds-components/Components/Typography/Link',
  component: Link,
  argTypes: {
    href: { control: 'text', table: categoryHtml },
    as: { control: 'text' },
    onClick: htmlEventArgType,
    target: htmlArgType,
    ...storyTypographyHtmlAttrs,
  },
  args: { onClick: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

const showcaseProps = { children: 'Link', href: 'https://www.domstol.no' };

export const Preview: Story = {
  args: showcaseProps,
};

export const Variants: Story = {
  args: showcaseProps,
  render: args => (
    <StoryVStack>
      <Link {...args} external>
        External
      </Link>
      <Link {...args} withVisited>
        Med visited styling
      </Link>
      <Link {...args} color="text-medium">
        Custom farge
      </Link>
    </StoryVStack>
  ),
};

export const As: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...showcaseProps,
    as: 'span',
  },
};

export const InText: Story = {
  args: showcaseProps,
  render: args => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore <Link {...args} /> magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum. Lorem ipsum <Link {...args} external /> dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore <Link {...args} /> magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.Lorem <Link {...args} external /> ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore <Link {...args} /> magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </Paragraph>
  ),
};
