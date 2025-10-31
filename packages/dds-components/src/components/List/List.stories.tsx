import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook';
import { StoryHStack } from '../layout/Stack/utils';
import { Typography } from '../Typography';

import { List, ListItem, type ListProps } from '.';

export default {
  title: 'dds-components/Components/List',
  component: List,
  argTypes: {
    ...commonArgTypes,
  },
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const Preview: Story = {
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
              <List typographyType={typographyType} listType={listType}>
                <ListItem>Item</ListItem>
                <ListItem>
                  Item
                  <List typographyType={typographyType} listType={listType}>
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
        Dette er et eksempelsetning som viser hvordan komponenten ser ut i
        mengdetekst. Her er listen:
      </Typography>
      <List {...args}>
        <ListItem>første punkt i listen</ListItem>
        <ListItem>andre punkt i listen er her</ListItem>
        <ListItem>og så tredje punkt</ListItem>
        <ListItem>til slutt kommer fjerde punkt</ListItem>
      </List>
      <Typography withMargins>
        Eksempeltekst under listen. Den skal være litt lengre for å få mer
        realistisk inntrykk; gjerne over minst to linjer, men helst tre. Derfor
        trenger vi en ekstra setning i dette avsnittet. Og gjerne enda en for å
        være helt sikker.
      </Typography>
    </div>
  ),
};
