import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Heading, type HeadingProps } from '.';

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

export const Overview = (args: Partial<HeadingProps>) => {
  return (
    <StoryTemplate title="Heading - overview">
      <Heading {...args} level={1}>
        Heading 1
      </Heading>
      <Heading {...args} level={2}>
        Heading 2
      </Heading>
      <Heading {...args} level={3}>
        Heading 3
      </Heading>
      <Heading {...args} level={4}>
        Heading 4
      </Heading>
      <Heading {...args} level={5}>
        Heading 5
      </Heading>
      <Heading {...args} level={6}>
        Heading 6
      </Heading>
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
