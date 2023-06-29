import { Heading, HeadingProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

type StoryTProps = {
  text: string;
} & HeadingProps;

export default {
  title: 'dds-components/Typography/Heading',
  component: Heading,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
};

export const Overview = () => {
  return (
    <StoryTemplate title="Heading - overview">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </StoryTemplate>
  );
};

export const Default = (args: StoryTProps) => {
  const { text, level, ...rest } = args;
  return (
    <StoryTemplate title="Heading - default">
      <Heading {...rest} level={level || 1}>
        {text || 'Heading'}
      </Heading>
    </StoryTemplate>
  );
};
