import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';
import { type Property } from 'csstype';
import { type CSSProperties, useRef } from 'react';

import { focusVisible } from '../helpers';

import { ScrollableContainer, Scrollbar } from '.';

export default {
  title: 'dds-components/ScrollableContainer',
  component: ScrollableContainer,
  argTypes: {
    contentHeight: { control: 'text' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ScrollableContainer>;

type Story = StoryObj<typeof ScrollableContainer>;

export const Default: Story = {
  args: { contentHeight: '300px' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <ScrollableContainer {...args}>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
      <p>
        Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
        begrense kostnadene veldig. Under hele meklingsprosessen betaler staten
        for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere ikke
        blir enige gjennom mekling, innkaller retten til et nytt rettsmøte
        (hovedforhandling).
      </p>
    </ScrollableContainer>
  ),
};

export const JustScrollbar: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const contentRef = useRef<HTMLDivElement>(null);
    const containerStyle: CSSProperties = {
      display: 'grid',
      gridTemplate: 'auto / 1fr 20px',
      overflow: 'hidden',
      padding: '4px',
    };

    const contentContainerStyle = {
      height: '300px',
      overflow: 'auto',
      scrollbarWidth: 'none' as Property.ScrollbarWidth,
      '&::WebkitScrollbar': {
        display: 'none',
      },
      ':focus-visible': {
        ...focusVisible,
      },
    };

    return (
      <div style={containerStyle}>
        <div style={contentContainerStyle} ref={contentRef} tabIndex={0}>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
          <p>
            Hvis både du og den andre forelderen ønsker å forsøke mekling, kan
            det begrense kostnadene veldig. Under hele meklingsprosessen betaler
            staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis
            dere ikke blir enige gjennom mekling, innkaller retten til et nytt
            rettsmøte (hovedforhandling).
          </p>
        </div>
        <Scrollbar contentRef={contentRef} />
      </div>
    );
  },
};
