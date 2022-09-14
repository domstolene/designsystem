import { Label, LabelProps } from '.';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & LabelProps;

export default {
  title: 'Design system/Typography/Label',
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
