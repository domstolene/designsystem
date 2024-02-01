import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { type CSSProperties, useRef } from 'react';
import styled from 'styled-components';

import { focusVisible } from '../helpers';

import { ScrollableContainer, Scrollbar } from '.';

export default {
  title: 'dds-components/ScrollableContainer',
  component: ScrollableContainer,
  argTypes: {
    contentHeight: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof ScrollableContainer>;

export const Default: Story = {
  args: { contentHeight: '300px' },
  decorators: Story => (
    <StoryTemplate title="ScrollableContainer - default">
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
    <StoryTemplate title="ScrollableContainer - just scrollbar">
      <Story />
    </StoryTemplate>
  ),
  render: () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const containerStyle: CSSProperties = {
      display: 'grid',
      gridTemplate: 'auto / 1fr 20px',
      overflow: 'hidden',
      padding: '4px',
    };

    const ContentContainer = styled.div`
      height: 500px;
      overflow: auto;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
      :focus-visible {
        ${focusVisible};
      }
    `;

    return (
      <div style={containerStyle}>
        <ContentContainer ref={contentRef} tabIndex={0}>
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
        </ContentContainer>
        <Scrollbar contentRef={contentRef} />
      </div>
    );
  },
};
