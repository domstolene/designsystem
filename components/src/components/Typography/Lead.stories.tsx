import { Typography as DDSTypography } from './Typography';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Typography/Overview/Leads',
  component: DDSTypography
};

export const Leads = () => {
  return (
    <StoryTemplate title="Leads - overview" gap="30px">
      <DDSTypography typographyType="leadSans01">lead-sans-01</DDSTypography>
      <DDSTypography typographyType="leadSans02">lead-sans-02</DDSTypography>
      <DDSTypography typographyType="leadSans03">lead-sans-03</DDSTypography>
      <DDSTypography typographyType="leadSans04">lead-sans-04</DDSTypography>
      <DDSTypography typographyType="leadSans05">lead-sans-05</DDSTypography>
    </StoryTemplate>
  );
};
