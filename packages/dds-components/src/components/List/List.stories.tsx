import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack } from '../Stack/utils';
import { Typography } from '../Typography';

import { List, ListItem, type ListProps } from '.';

export default {
  title: 'dds-components/List',
  component: List,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: { control: false },
  },
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: args => (
    <List {...args}>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ),
};

export const Overview: Story = {
  render: args => {
    interface Props {
      typographyType: ListProps['typographyType'];
      listType: ListProps['listType'];
    }
    const ListVariant = ({ typographyType, listType }: Props) => {
      return (
        <div>
          <Typography
            as="div"
            typographyType="labelMedium"
            style={{ maxWidth: '100px' }}
          >
            {typographyType} {listType}
          </Typography>
          <List {...args} typographyType={typographyType} listType={listType}>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List>
                <ListItem>Item</ListItem>
                <ListItem>
                  Item
                  <List>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </div>
      );
    };
    return (
      <>
        <StoryHStack gap={undefined}>
          {ListVariant({ typographyType: 'bodyXsmall', listType: 'unordered' })}
          {ListVariant({ typographyType: 'bodySmall', listType: 'unordered' })}
          {ListVariant({ typographyType: 'bodyMedium', listType: 'unordered' })}
          {ListVariant({ typographyType: 'bodyLarge', listType: 'unordered' })}
        </StoryHStack>

        <StoryHStack>
          {ListVariant({ typographyType: 'bodyXsmall', listType: 'ordered' })}
          {ListVariant({ typographyType: 'bodySmall', listType: 'ordered' })}
          {ListVariant({ typographyType: 'bodyMedium', listType: 'ordered' })}
          {ListVariant({ typographyType: 'bodyLarge', listType: 'ordered' })}
        </StoryHStack>
      </>
    );
  },
};

export const Nested: Story = {
  render: args => (
    <List {...args}>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>
        Item
        <List {...args}>
          <ListItem>Item</ListItem>
          <ListItem>
            Item
            <List {...args}>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
    </List>
  ),
};

export const Example: Story = {
  render: args => (
    <div style={{ maxWidth: '700px' }}>
      <Typography withMargins>
        Første gang du gjør tjeneste som arbeidslivskyndig meddommer, vil
        rettens leder be deg om:
      </Typography>
      <List {...args}>
        <ListItem>å følge nøye med i forhandlingen</ListItem>
        <ListItem>
          merke deg forklaringene som blir gitt og bevisene som blir fremlagt
        </ListItem>
        <ListItem>
          å gi uttrykk for hvordan du vurderer saken etter at bevisene er lagt
          frem
        </ListItem>
        <ListItem>
          å ikke legge vekt på andre forhold enn bevisene som er ført i saken
        </ListItem>
      </List>
      <Typography withMargins>
        Første gang du er i retten må du også avgi en forsikring. Den sier at du
        både i den aktuelle saken og i fremtidige saker vil gi vel akt på alt
        som fremkommer gjennom forhandlingene i retten, og at du vil dømme slik
        du finner sannest å rettest å være etter loven og sakens bevisligheter.
        På oppfordring fra dommeren, skal du til dette svare: «Det forsikrer
        jeg.»
      </Typography>
    </div>
  ),
};
