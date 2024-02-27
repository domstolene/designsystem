import { StoryTemplate } from '@norges-domstoler/storybook-components';

import {
  Caption,
  Heading,
  Label,
  Legend,
  Link,
  Paragraph,
  Typography,
} from '..';

export default {
  title: 'dds-components/Typography/Overview',
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

export const ComponentsOverview = () => {
  return (
    <StoryTemplate>
      <Heading level={1}>Heading</Heading>
      <Paragraph>Paragraph</Paragraph>
      <Label>Label</Label>
      <Link>Link</Link>
      <Legend>Legend</Legend>
      <Caption>Caption</Caption>
      <Typography>Typography</Typography>
    </StoryTemplate>
  );
};
