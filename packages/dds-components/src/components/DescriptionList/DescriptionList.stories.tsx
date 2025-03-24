import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
import { CallIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Typography } from '../Typography';

import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListGroup,
  DescriptionListTerm,
} from '.';

export default {
  title: 'dds-components/Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
} satisfies Meta<typeof DescriptionList>;

type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  render: args => (
    <DescriptionList {...args}>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
    </DescriptionList>
  ),
};
export const Overview: Story = {
  render: () => (
    <>
      <StoryHStack>
        <StoryVStack>
          <DescriptionList>
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
          </DescriptionList>

          <DescriptionList>
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc icon={CallIcon}>
              <Typography typographyType="a">+47 123 45 678</Typography>
            </DescriptionListDesc>
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc icon={CallIcon}>
              <Typography typographyType="a">+47 123 45 678</Typography>
            </DescriptionListDesc>
          </DescriptionList>
        </StoryVStack>
        <StoryVStack>
          <DescriptionList appearance="subtle">
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
            <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
          </DescriptionList>
          <DescriptionList appearance="subtle">
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc icon={CallIcon}>
              <Typography typographyType="a">+47 123 45 678</Typography>
            </DescriptionListDesc>
            <DescriptionListTerm>Tittel</DescriptionListTerm>
            <DescriptionListDesc icon={CallIcon}>
              <Typography typographyType="a">+47 123 45 678</Typography>
            </DescriptionListDesc>
          </DescriptionList>
        </StoryVStack>
      </StoryHStack>
    </>
  ),
};

export const Group: Story = {
  render: args => (
    <DescriptionList {...args}>
      <DescriptionListGroup>
        <DescriptionListTerm>Tittel 1</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
        <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Tittel 2</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Tittel 3</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Tittel 4</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
      </DescriptionListGroup>
    </DescriptionList>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <DescriptionList {...args}>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc icon={CallIcon}>
        <Typography typographyType="a">+47 123 45 678</Typography>
      </DescriptionListDesc>
    </DescriptionList>
  ),
};

const margin = 'var(--dds-spacing-x1)';
export const RowDirectionExample: Story = {
  render: args => (
    <DescriptionList {...args} direction="row">
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 1</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 2</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 3</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 4</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 5</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 5</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 6</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 6</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 7</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 7</DescriptionListDesc>
      </DescriptionListGroup>
      <DescriptionListGroup margin={margin}>
        <DescriptionListTerm>Tittel 8</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse 8</DescriptionListDesc>
      </DescriptionListGroup>
    </DescriptionList>
  ),
};
