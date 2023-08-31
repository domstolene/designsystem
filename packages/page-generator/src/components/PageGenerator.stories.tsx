import { PageGenerator } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { FormFields } from '../storybook/FormFields';
import { OtherFields } from '../storybook/OtherFields';

export default {
  title: 'dds-page-generator/PageGenerator',
  component: PageGenerator,
};

export const Form = () => {
  return (
    <StoryTemplate title="PageGenerator - Form" display="grid">
      <PageGenerator
        as="form"
        fields={FormFields}
        stateOnChange={(newState: any, errors: any) => {
          console.log(newState, errors);
        }}
      />
    </StoryTemplate>
  );
};

export const Other = () => {
  return (
    <StoryTemplate title="PageGenerator - Other" display="grid">
      <PageGenerator
        as="form"
        fields={OtherFields()}
        stateOnChange={(newState: any) => {
          console.log(newState);
        }}
      />
    </StoryTemplate>
  );
};
