import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryHtml, ddsProviderDecorator } from '../../../storybook';
import { HelpIcon } from '../../Icon/icons';
import { InlineButton } from '../../InlineButton';
import { Popover, PopoverGroup } from '../../Popover';
import { Paragraph } from '../Paragraph';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Label } from '.';

export default {
  title: 'dds-components/Components/Typography/Label',
  component: Label,
  argTypes: {
    htmlFor: { control: false, table: categoryHtml },
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Preview: Story = {
  args: { children: 'Label' },
};

export const readOnly: Story = {
  args: { children: 'Label', readOnly: true },
};

export const afterLabelContent: Story = {
  args: {
    children: 'Label',
    afterLabelContent: (
      <PopoverGroup>
        <InlineButton icon={HelpIcon} />
        <Popover>
          <Paragraph>Ekstra info</Paragraph>
        </Popover>
      </PopoverGroup>
    ),
  },
};
