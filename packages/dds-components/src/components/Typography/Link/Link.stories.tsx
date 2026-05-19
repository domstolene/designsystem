import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  ddsProviderDecorator,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/utils';
import { Paragraph } from '../Paragraph';
import { inlineTgCommonArgTypes } from '../storyUtils';

import { Link } from '.';
import { Icon } from '../../Icon';
import { TipIcon } from '../../Icon/icons';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Link',
  component: Link,
  argTypes: {
    href: { control: 'text', table: categoryHtml },
    as: { control: 'text' },
    onClick: htmlEventArgType,
    target: htmlArgType,
    ...inlineTgCommonArgTypes,
  },
  args: { onClick: fn() },
  decorators: [ddsProviderDecorator],
});

export default meta;

const showcaseProps = { children: 'Link', href: 'https://www.domstol.no' };

export const Preview = meta.story({
  args: showcaseProps,
});

export const Variants = meta.story({
  args: showcaseProps,
  render: args => (
    <StoryVStack>
      <Link {...args} withVisited>
        Med visited styling
      </Link>
      <Link {...args} color="text-medium">
        Custom farge
      </Link>
      <Link {...args} withIconStyling>
        Med ikon-styling
        <Icon icon={TipIcon} iconSize="inherit" />
      </Link>
    </StoryVStack>
  ),
});

export const NewTab = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...showcaseProps,
    children: 'Norges domstoler (åpnes i ny fane)',
    target: '_blank',
  },
});

export const As = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...showcaseProps,
    as: 'span',
  },
});

export const InText = meta.story({
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
});
