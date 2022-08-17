import { SB_DESIGNSYSTEM_PREFIX, StoryTemplate } from '../../storybook';
import { Scrollbar, ScrollbarContainer } from '.';
import { useRef } from 'react';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/Scrollbar`,
  component: Scrollbar
};

export const Default = () => {
  return (
    <StoryTemplate title="Scrollbar">
      <ScrollbarContainer>
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
      </ScrollbarContainer>
    </StoryTemplate>
  );
};

export const JustScrollbar = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerStyle = {
    display: 'grid',
    gridTemplate: 'auto / 1fr 50px',
    overflow: 'hidden'
  };
  const contentStyle = { height: '500px', overflow: 'hidden' };
  return (
    <StoryTemplate title="Scrollbar">
      <div style={containerStyle}>
        <div style={contentStyle} ref={contentRef}>
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
        </div>
        <Scrollbar contentRef={contentRef} />
      </div>
    </StoryTemplate>
  );
};
