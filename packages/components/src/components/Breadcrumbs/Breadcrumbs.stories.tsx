import { Breadcrumbs, BreadcrumbsProps, Breadcrumb } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/Breadcrumbs',
  component: Breadcrumbs,
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
