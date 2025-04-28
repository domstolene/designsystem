import { type Meta, type StoryObj } from '@storybook/react';

import { BackLink } from '../BackLink';
import { Breadcrumb, Breadcrumbs } from '../Breadcrumbs';
import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
} from '../DescriptionList';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../Icon/icons';
import { List, ListItem } from '../List';
import { Link, Paragraph } from '../Typography';

import { Contrast } from '.';

export default {
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
} satisfies Meta<typeof Contrast>;

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
    <Contrast
      {...args}
      style={{
        padding: 'var(--dds-spacing-x2)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--dds-spacing-x1)',
      }}
    >
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
    </Contrast>
  ),
};
