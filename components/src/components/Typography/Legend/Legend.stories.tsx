import { Legend, LegendProps } from '..';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & LegendProps;

export default {
  title: 'Design system/Typography/Legend',
  component: Legend,
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
    <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>
  );
};
