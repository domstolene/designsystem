import { type Meta, type StoryObj } from '@storybook/react-vite';

import { LanguageProvider } from '../../i18n';
import { BackLink } from '../BackLink';
import { Breadcrumb, Breadcrumbs } from '../Breadcrumbs';
import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
} from '../DescriptionList';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { List, ListItem } from '../List';
import { Link, Paragraph } from '../Typography';

import { Contrast } from '.';

const meta: Meta<typeof Contrast> = {
  title: 'dds-components/Components/Contrast',
  component: Contrast,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    as: { control: 'text' },
  },
  decorators: [
    Story => (
      <LanguageProvider language="nb">
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Contrast>;

export const Default: Story = {
  render: args => (
    <Contrast {...args} style={{ padding: 'var(--dds-spacing-x2)' }}>
      <Paragraph>
        Denne teksten får automatisk invertert farge. Bruk Elsa
        typografikomponenter for å få tekstfargen ut av boksen.
      </Paragraph>
    </Contrast>
  ),
};
export const Examples: Story = {
  render: args => (
    <Contrast {...args}>
      <VStack padding="x2" gap="x1">
        <Icon icon={ArrowLeftIcon} />
        <Paragraph>Tekst</Paragraph>
        <Link>Lenke</Link>
        <Breadcrumbs>
          <Breadcrumb href="/">Side 1</Breadcrumb>
          <Breadcrumb>Side 2</Breadcrumb>
        </Breadcrumbs>
        <BackLink href="/" label="Forrige side" />
        <DescriptionList>
          <DescriptionListTerm>Tittel</DescriptionListTerm>
          <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        </DescriptionList>
        <List>
          <ListItem>Listeelement</ListItem>
          <ListItem>Listeelement</ListItem>
        </List>
      </VStack>
    </Contrast>
  ),
};
