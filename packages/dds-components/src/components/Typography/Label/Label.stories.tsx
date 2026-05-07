import preview from '#.storybook/preview';

import { categoryHtml, ddsProviderDecorator } from '../../../storybook';
import { HelpIcon } from '../../Icon/icons';
import { InlineButton } from '../../InlineButton';
import { Popover, PopoverGroup } from '../../Popover';
import { Paragraph } from '../Paragraph';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Label } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Label',
  component: Label,
  argTypes: {
    htmlFor: { control: false, table: categoryHtml },
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Label' },
});

export const readOnly = meta.story({
  args: { children: 'Label', readOnly: true },
});

export const afterLabelContent = meta.story({
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
});
