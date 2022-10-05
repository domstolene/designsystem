import { FormGenerator } from '.';
import { StoryTemplate } from '../../storybook';
import {
  exampleDefault,
  exampleRowTypes,
  exampleChildren,
  exampleFull,
} from './FormGenerator.examples';
import { FormGeneratorProps } from './FormGenerator.types';

export default {
  title: 'Design system/FormGenerator BETA',
  component: FormGenerator,
};

export const Default = (args: FormGeneratorProps) => {
  return (
    <StoryTemplate title="FormGenerator - Default" display="block">
      <FormGenerator
        {...args}
        fields={exampleDefault}
        stateOnChange={(newState: object) => {
          console.log(newState);
        }}
      />
    </StoryTemplate>
  );
};

export const Rows = (args: FormGeneratorProps) => {
  return (
    <StoryTemplate title="FormGenerator - Row Types" display="block">
      <FormGenerator
        {...args}
        fields={exampleRowTypes}
        stateOnChange={(newState: object) => {
          console.log(newState);
        }}
      />
    </StoryTemplate>
  );
};

export const ComponentWithChildren = (args: FormGeneratorProps) => {
  return (
    <StoryTemplate
      title="FormGenerator - Component with Children"
      display="block"
    >
      <FormGenerator
        {...args}
        fields={exampleChildren}
        stateOnChange={(newState: object) => {
          console.log(newState);
        }}
      />
    </StoryTemplate>
  );
};

export const FullExample = (args: FormGeneratorProps) => {
  return (
    <StoryTemplate title="FormGenerator - Full Example" display="block">
      <FormGenerator
        {...args}
        fields={exampleFull}
        stateOnChange={(newState: object) => {
          console.log(newState);
        }}
      />
    </StoryTemplate>
  );
};
