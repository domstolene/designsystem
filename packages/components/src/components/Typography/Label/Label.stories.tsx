import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Label, type LabelProps } from '.';

type StoryTProps = {
  text: string;
} & LabelProps;

export default {
  title: 'dds-components/Typography/Label',
  component: Label,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Label - default">
      <Label {...rest}>{text || 'Label'}</Label>
    </StoryTemplate>
  );
};
