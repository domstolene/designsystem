import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { htmlEventArgType, htmlPropsArgType } from '../../storybook/helpers';
import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
} from '../DescriptionList';
import { Divider } from '../Divider';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Heading, Link, Paragraph } from '../Typography';

import {
  Card,
  CardExpandable,
  CardExpandableBody,
  CardExpandableHeader,
  CardSelectable,
} from '.';
export default {
  title: 'dds-components/Components/Card',
  component: Card,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
    cardRef: { control: false },
    onClick: htmlEventArgType,
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const body = (
  <Paragraph>
    Content Content Content Content Content Content Content Content
  </Paragraph>
);

const contentContainerStyle = (
  <style>
    {`
.story-container-padding {
  padding: var(--dds-spacing-x0-75);
}
  `}
  </style>
);

export const Default: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {contentContainerStyle}
      </>
    ),
  ],
  args: {
    children: <div className="story-container-padding">Content</div>,
  },
};

export const Overview: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {contentContainerStyle}
      </>
    ),
  ],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <StoryHStack>
      <StoryVStack>
        <Card {...args} cardType="info">
          <div className="story-container-padding">
            <Heading level={2} typographyType="headingLarge">
              Info
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="navigation" href="#">
          <div className="story-container-padding">
            <Heading level={2} typographyType="headingLarge">
              Navigation
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="expandable">
          <CardExpandable>
            <CardExpandableHeader> Expandable </CardExpandableHeader>
            <CardExpandableBody>Content</CardExpandableBody>
          </CardExpandable>
        </Card>
        <CardSelectable cardType="checkbox">Selectable checkbox</CardSelectable>
        <CardSelectable cardType="radio">Selectable radio</CardSelectable>
      </StoryVStack>
      <StoryVStack>
        <Card {...args} cardType="info" appearance="border">
          <div className="story-container-padding">
            <Heading level={2} typographyType="headingLarge">
              Info
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} appearance="border" cardType="navigation" href="#">
          <div className="story-container-padding">
            <Heading level={2} typographyType="headingLarge">
              Navigation
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="expandable" appearance="border">
          <CardExpandable>
            <CardExpandableHeader> Expandable </CardExpandableHeader>
            <CardExpandableBody>Content</CardExpandableBody>
          </CardExpandable>
        </Card>
        <CardSelectable cardType="checkbox" appearance="border">
          Selectable checkbox
        </CardSelectable>
        <CardSelectable cardType="radio" appearance="border">
          Selectable radio
        </CardSelectable>
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Navigation: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {contentContainerStyle}
      </>
    ),
  ],
  args: {
    children: <div className="story-container-padding">Content</div>,
    cardType: 'navigation',
    href: '#',
  },
};

export const Expandable: Story = {
  args: {
    children: (
      <CardExpandable>
        <CardExpandableHeader>Header</CardExpandableHeader>
        <CardExpandableBody>Content</CardExpandableBody>
      </CardExpandable>
    ),
    cardType: 'expandable',
  },
};

export const ExpandableControlled: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <Card {...args} cardType="expandable">
        <CardExpandable
          isExpanded={isExpanded}
          onChange={() => setIsExpanded(!isExpanded)}
        >
          <CardExpandableHeader>Header</CardExpandableHeader>
          <CardExpandableBody>Content</CardExpandableBody>
        </CardExpandable>
      </Card>
    );
  },
};

export const ExpandableCustom: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
        .custom-header {
          background-color: var(--dds-color-surface-info-default);
        }
          `}
        </style>
      </>
    ),
  ],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} cardType="expandable" appearance="border">
      <CardExpandable>
        <CardExpandableHeader
          typographyType="bodySmall"
          padding="4px 12px"
          bold
          className="custom-header"
        >
          Dekning av reiseutgifter
        </CardExpandableHeader>
        <CardExpandableBody padding="16px 12px">
          <Paragraph typographyType="bodySmall">
            I sivile saker avtales dekning av utgifter med den part som innkalte
            deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
            <Link href="#">
              særavtale om dekning av utgifter til reise og kost
            </Link>
            ). Reisen skal foretas på raskeste og rimeligste måte for staten.
            Offentlig transport må benyttes der det er tilgjengelig.
            Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det
            er rimeligst for det offentlige, med mindre særlige grunner tilsier
            at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer,
            unntatt for rimeligste offentlig transport, for eksempel buss, tog
            og så videre. For reiser over 15 km og som varer utover 6 timer,
            dekkes utgifter til måltider etter satsene i særavtalen om dekning
            av utgifter til reise og kost. Dersom enkeltmåltider er dekket av
            andre enn deg selv, må du registrere måltidsfradrag.
          </Paragraph>
        </CardExpandableBody>
      </CardExpandable>
    </Card>
  ),
};

export const Examples: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {contentContainerStyle}
      </>
    ),
  ],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args}>
      <div className="story-container-padding">
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
        <Divider />
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
      </div>
    </Card>
  ),
};
