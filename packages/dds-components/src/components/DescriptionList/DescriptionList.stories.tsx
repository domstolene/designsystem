import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook/helpers';
import { CallIcon, HomeIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';
import { Link } from '../Typography';

import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListGroup,
  DescriptionListTerm,
} from '.';

export default {
  title: 'dds-components/Components/DescriptionList',
  component: DescriptionList,

  argTypes: {
    ...commonArgTypes,
  },
} satisfies Meta<typeof DescriptionList>;

type Story = StoryObj<typeof DescriptionList>;

export const Preview: Story = {
  render: args => (
    <DescriptionList {...args}>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
    </DescriptionList>
  ),
};

export const Appearances: Story = {
  render: () => (
    <StoryVStack>
      <DescriptionList appearance="default">
        <DescriptionListTerm>Default</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
      <DescriptionList appearance="subtle">
        <DescriptionListTerm>Subtle</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
    </StoryVStack>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <DescriptionList {...args}>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc icon={HomeIcon}>Beskrivelse</DescriptionListDesc>
    </DescriptionList>
  ),
};

export const Phone: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionListTerm>Tittel</DescriptionListTerm>
      <DescriptionListDesc icon={CallIcon}>
        <Link>+47 123 45 678</Link>
      </DescriptionListDesc>
    </DescriptionList>
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

const margin = 'var(--dds-spacing-x0-75)';
export const Row: Story = {
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
