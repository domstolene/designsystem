import { Breadcrumbs, BreadcrumbsProps, Breadcrumb } from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    smallScreen: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export const Overview = (args: BreadcrumbsProps) => {
  return (
    <StoryTemplate title="Breadcrumbs - overview" display="grid">
      <Breadcrumbs {...args}>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
      <Breadcrumbs smallScreen>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>
  );
};

export const Default = (args: BreadcrumbsProps) => {
  return (
    <StoryTemplate title="Breadcrumbs - default" gap="0">
      <Breadcrumbs {...args}>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>
  );
};

export const SmallScreen = () => {
  return (
    <StoryTemplate title="Breadcrumbs - small screen" gap="0">
      <Breadcrumbs smallScreen>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>
  );
};
