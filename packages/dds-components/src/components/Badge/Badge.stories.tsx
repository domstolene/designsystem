import preview from '#.storybook/preview';

import { BADGE_PURPOSES, BADGE_SIZES, Badge } from './Badge';
import { commonArgTypes } from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';
import { Table } from '../Table';
import { Paragraph, Typography } from '../Typography';

const meta = preview.meta({
  title: 'dds-components/Components/Badge',
  component: Badge,
  argTypes: {
    ...commonArgTypes,
    children: {
      control: 'number',
    },
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    children: 5,
  },
});

export const Purposes = meta.story({
  args: {
    children: 5,
  },
  render: args => (
    <StoryHStack>
      {BADGE_PURPOSES.map(purpose => (
        <Badge {...args} purpose={purpose} key={purpose} />
      ))}
    </StoryHStack>
  ),
});

export const Sizes = meta.story({
  render: args => (
    <StoryVStack>
      <StoryHStack>
        {BADGE_SIZES.map(size => (
          <Badge {...args} children={5} size={size} key={size} />
        ))}
      </StoryHStack>
      <StoryHStack>
        {BADGE_SIZES.map(size => (
          <Badge {...args} children={undefined} size={size} key={size} />
        ))}
      </StoryHStack>
    </StoryVStack>
  ),
});

export const OverMax = meta.story({
  args: {
    children: 100,
  },
});

export const InTable = meta.story({
  args: {
    purpose: 'action',
    size: 'small',
  },
  render: args => (
    <StoryVStack>
      <Paragraph>
        Enestående <code>Badge</code> må ha et tilgjengelig navn, satt f.eks.
        via <code>aria-label</code>.
      </Paragraph>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Dokument</Table.Cell>
            <Table.Cell>Avsender</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell layout="text and icon">
              <Badge {...args} aria-label="Ny fil" />{' '}
              <Typography bold> Dokumentnavn1 </Typography>
            </Table.Cell>
            <Table.Cell>Navn</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Dokumentnavn2</Table.Cell>
            <Table.Cell>Navn</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StoryVStack>
  ),
});
