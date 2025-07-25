import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook/helpers';
import { StoryVStack } from '../../layout/Stack/utils';
import { Paragraph } from '../Paragraph';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Link } from '.';

export default {
  title: 'dds-components/Components/Typography/Link',
  component: Link,
  argTypes: {
    href: { control: 'text', table: categoryHtml },
    onClick: htmlEventArgType,
    target: htmlArgType,
    ...storyTypographyHtmlAttrs,
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Preview: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no' },
};

export const Overview: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no' },
  render: args => (
    <StoryVStack>
      <Link {...args} />
      <Link {...args} external />
    </StoryVStack>
  ),
};

export const WithVisited: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no', withVisited: true },
};

export const CustomColor: Story = {
  args: {
    children: 'Link',
    href: 'https://www.domstol.no',
    color: 'text-default',
  },
};

export const InText: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no' },
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
