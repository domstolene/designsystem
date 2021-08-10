import { Breadcrumbs, BreadcrumbsProps, Breadcrumb } from './';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

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
  return storyHTMLGridTemplate(
    'Breadcrumbs - overview',
    <>
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
    </>
  );
};

export const Default = (args: BreadcrumbsProps) => {
  return storyHTMLTemplate(
    'Breadcrumbs - default',
    <Breadcrumbs {...args}>
      <Breadcrumb href="#">Side 1</Breadcrumb>
      <Breadcrumb href="#">Side 2</Breadcrumb>
      <Breadcrumb>Side 3</Breadcrumb>
    </Breadcrumbs>
  );
};

export const SmallScreen = () => {
  return storyHTMLTemplate(
    'Breadcrumbs - small screen',
    <Breadcrumbs smallScreen>
      <Breadcrumb href="#">Side 1</Breadcrumb>
      <Breadcrumb href="#">Side 2</Breadcrumb>
      <Breadcrumb>Side 3</Breadcrumb>
    </Breadcrumbs>
  );
};
