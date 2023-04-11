import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { EmptyContent, EmptyContentProps } from './EmptyContent';

export default {
  title: 'dds-components/EmptyContent',
  component: EmptyContent,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
    },
  },
};

export const Overview = (args: EmptyContentProps) => {
  return (
    <StoryTemplate title="EmptyContent">
      <EmptyContent {...args} title="Tittel" message="Dette er en tekst." />

      <EmptyContent {...args} message="Kort melding." />

      <EmptyContent
        {...args}
        message={`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.`}
      />

      <div style={{ height: '25rem', width: '100%' }}>
        <EmptyContent
          {...args}
          message="Ligger inne i et element med definert høyde og bredde."
        />
      </div>
    </StoryTemplate>
  );
};
