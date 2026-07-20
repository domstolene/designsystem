import preview from '#.storybook/preview';
import { useState } from 'react';

import { commonArgTypesWithNodeChildren } from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';
import { Heading, Link, Paragraph } from '../Typography';

import {
  Card,
  CardExpandable,
  CardExpandableBody,
  CardExpandableHeader,
  CardSelectable,
} from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Card',
  component: Card,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    cardRef: { control: false },
  },
});

export default meta;

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

export const Preview = meta.story({
  decorators: [
    Story => (
      <>
        <Story />
        {contentContainerStyle}
      </>
    ),
  ],
  args: {
    cardType: 'info',
    children: <div className="story-container-padding">Content</div>,
  },
});

export const Overview = meta.story({
  args: {
    cardType: 'info',
  },
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
            <Heading level={2} typographyType="heading-large">
              Info
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="navigation" href="#">
          <div className="story-container-padding">
            <Heading level={2} typographyType="heading-large">
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
            <Heading level={2} typographyType="heading-large">
              Info
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} appearance="border" cardType="navigation" href="#">
          <div className="story-container-padding">
            <Heading level={2} typographyType="heading-large">
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
});

export const Expandable = meta.story({
  args: {
    children: (
      <CardExpandable>
        <CardExpandableHeader>Header</CardExpandableHeader>
        <CardExpandableBody>Content</CardExpandableBody>
      </CardExpandable>
    ),
    cardType: 'expandable',
  },
});

export const ExpandableControlled = meta.story({
  args: {
    cardType: 'expandable',
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <>
        Utvidet: {isExpanded.toString()}
        <Card {...args} cardType="expandable">
          <CardExpandable
            isExpanded={isExpanded}
            onChange={() => setIsExpanded(!isExpanded)}
          >
            <CardExpandableHeader>Header</CardExpandableHeader>
            <CardExpandableBody>Content</CardExpandableBody>
          </CardExpandable>
        </Card>
      </>
    );
  },
});

export const ExpandableCustom = meta.story({
  args: {
    cardType: 'expandable',
  },
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
          typographyType="heading-xsmall"
          padding="4px 12px"
          bold
          className="custom-header"
        >
          Dekning av reiseutgifter
        </CardExpandableHeader>
        <CardExpandableBody padding="16px 12px">
          <Paragraph typographyType="body-long-small">
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
});
