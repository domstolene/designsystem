import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { List, ListItem } from '.';

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
};

type Story = StoryObj<typeof List>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <List {...args}>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ),
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <List {...args} typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List typographyType="bodySans01">
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

      <List {...args} listType="ordered" typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered" typographyType="bodySans01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args}>
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

      <List {...args} listType="ordered">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} typographyType="bodySans03">
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

      <List {...args} listType="ordered" typographyType="bodySans03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} typographyType="bodySans04">
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

      <List {...args} listType="ordered" typographyType="bodySans04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  ),
};

export const Nested: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
