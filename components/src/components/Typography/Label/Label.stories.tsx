import { Label, LabelProps } from '.';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & LabelProps;

export default {
  title: 'Design system/Typography/Label',
  component: Label,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    underline: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
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
