import { Legend, LegendProps } from '..';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & LegendProps;

export default {
  title: 'Design system/Typography/Legend',
  component: Legend,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
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
