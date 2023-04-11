import { Paragraph, ParagraphProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

type StoryTProps = {
  text: string;
} & ParagraphProps;

export default {
  title: 'dds-components/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
};

export const Overview = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Paragraph - overview">
      <Paragraph {...rest} typographyType="bodySans01">
        {text || 'bodySans01'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans02">
        {text || 'bodySans02'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans03">
        {text || 'bodySans03'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans04">
        {text || 'bodySans04'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans01">
        {text || 'leadSans01'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans02">
        {text || 'leadSans02'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans03">
        {text || 'leadSans03'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans04">
        {text || 'leadSans04'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans05">
        {text || 'leadSans05'}
      </Paragraph>
    </StoryTemplate>
  );
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Paragraph - default">
      <Paragraph {...rest}>{text || 'Paragraph'}</Paragraph>
    </StoryTemplate>
  );
};
