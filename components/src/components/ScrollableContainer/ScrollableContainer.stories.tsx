import { SB_DESIGNSYSTEM_PREFIX, StoryTemplate } from '../../storybook';
import { Scrollbar, ScrollableContainer } from '.';
import { useRef, CSSProperties } from 'react';
import styled from 'styled-components';
import { focusVisible } from '../../helpers/styling';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/ScrollableContainer`,
  component: ScrollableContainer
};

export const Default = () => {
  return (
    <StoryTemplate title="ScrollableContainer - default">
      <ScrollableContainer>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
        <p>
          Hvis både du og den andre forelderen ønsker å forsøke mekling, kan det
          begrense kostnadene veldig. Under hele meklingsprosessen betaler
          staten for eventuell hjelp fra sakkyndig psykolog underveis. Hvis dere
          ikke blir enige gjennom mekling, innkaller retten til et nytt
          rettsmøte (hovedforhandling).
        </p>
      </ScrollableContainer>
    </StoryTemplate>
  );
};

export const JustScrollbar = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerStyle: CSSProperties = {
    display: 'grid',
    gridTemplate: 'auto / 1fr 20px',
    overflow: 'hidden',
    padding: '4px'
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
    <StoryTemplate title="Just Scrollbar">
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
    </StoryTemplate>
  );
};
