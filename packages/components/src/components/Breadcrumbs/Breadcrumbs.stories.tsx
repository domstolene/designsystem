import { Breadcrumbs, BreadcrumbsProps, Breadcrumb } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'Design system/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
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
